import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TransferItem {
  id: string;
  label: string;
}

interface TransferListProps {
  items: TransferItem[];
  onChange: (selectedItems: TransferItem[]) => void;
}

const TransferList: React.FC<TransferListProps> = ({ items, onChange }) => {
  const [selectedItems, setSelectedItems] = useState<TransferItem[]>([]);

  const handleSelectItem = (item: TransferItem) => {
    const selectedItemIndex = selectedItems.findIndex(
      selectedItem => selectedItem.id === item.id
    );

    if (selectedItemIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems([
        ...selectedItems.slice(0, selectedItemIndex),
        ...selectedItems.slice(selectedItemIndex + 1),
      ]);
    }

    onChange(selectedItems);
  };

  return (
    <div role="listbox" aria-multiselectable={true}>
      {items.map(item => {
        const isSelected = selectedItems.some(
          selectedItem => selectedItem.id === item.id
        );

        return (
          <div
            key={item.id}
            role="option"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={() => handleSelectItem(item)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                handleSelectItem(item);
              }
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default TransferList;
