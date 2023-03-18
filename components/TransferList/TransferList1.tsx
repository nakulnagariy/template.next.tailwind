import { useState } from 'react';

export type Option = {
  id: string;
  label: string;
};

type TransferListProps = {
  leftOptions: Option[];
  rightOptions: Option[];
  onChange: (leftOptions: Option[], rightOptions: Option[]) => void;
};

const TransferList = ({ leftOptions, rightOptions, onChange }: TransferListProps) => {
  const [selectedLeftOptions, setSelectedLeftOptions] = useState<string[]>([]);
  const [selectedRightOptions, setSelectedRightOptions] = useState<string[]>([]);

  const handleLeftOptionClick = (id: string) => {
    setSelectedLeftOptions((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((option) => option !== id) : [...prevSelected, id]
    );
  };

  const handleRightOptionClick = (id: string) => {
    setSelectedRightOptions((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((option) => option !== id) : [...prevSelected, id]
    );
  };

  const handleTransferLeft = () => {
    const newLeftOptions = leftOptions.filter((option) => !selectedRightOptions.includes(option.id));
    const newRightOptions = [
      ...rightOptions,
      ...leftOptions.filter((option) => selectedLeftOptions.includes(option.id)),
    ];

    onChange(newLeftOptions, newRightOptions);
    setSelectedLeftOptions([]);
    setSelectedRightOptions([]);
  };

  const handleTransferRight = () => {
    const newRightOptions = rightOptions.filter((option) => !selectedLeftOptions.includes(option.id));
    const newLeftOptions = [
      ...leftOptions,
      ...rightOptions.filter((option) => selectedRightOptions.includes(option.id)),
    ];

    onChange(newLeftOptions, newRightOptions);
    setSelectedLeftOptions([]);
    setSelectedRightOptions([]);
  };

  return (
    <div className="transfer-list">
      <div className="transfer-list__column">
        <h2>Available options</h2>
        <ul aria-label="Available options">
          {leftOptions.map((option) => (
            <li
              key={option.id}
              role="option"
              aria-selected={selectedLeftOptions.includes(option.id)}
              onClick={() => handleLeftOptionClick(option.id)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="transfer-list__controls">
        <button disabled={selectedLeftOptions.length === 0} onClick={handleTransferRight}>
          &gt;&gt;
        </button>
        <button disabled={selectedRightOptions.length === 0} onClick={handleTransferLeft}>
          &lt;&lt;
        </button>
      </div>
      <div className="transfer-list__column">
        <h2>Selected options</h2>
        <ul aria-label="Selected options">
          {rightOptions.map((option) => (
            <li
              key={option.id}
              role="option"
              aria-selected={selectedRightOptions.includes(option.id)}
              onClick={() => handleRightOptionClick(option.id)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
