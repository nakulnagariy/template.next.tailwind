import React, { useState } from "react";

interface TransferListProps {
  data: string[];
}

const TransferList: React.FC<TransferListProps> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectItem = (item: string) => {
    const updatedSelectedItems = [...selectedItems];
    const itemIndex = updatedSelectedItems.indexOf(item);
    if (itemIndex === -1) {
      updatedSelectedItems.push(item);
    } else {
      updatedSelectedItems.splice(itemIndex, 1);
    }
    setSelectedItems(updatedSelectedItems);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleSearch} />
      <div>
        <h2>Available Items:</h2>
        <ul
          role="listbox"
          aria-multiselectable={true}
          tabIndex={0}
          aria-label="Available Items"
        >
          {filteredData.map((item) => (
            <li
              key={item}
              role="option"
              aria-selected={selectedItems.includes(item)}
              onClick={() => handleSelectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Selected Items:</h2>
        <ul
          role="listbox"
          aria-multiselectable={true}
          tabIndex={0}
          aria-label="Selected Items"
        >
          {selectedItems.map((item) => (
            <li
              key={item}
              role="option"
              aria-selected={true}
              onClick={() => handleSelectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
