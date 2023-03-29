export type MessageAPI = {
  messageApi: any;
  info: any;
  warning: any;
};

export interface Item {
  key: React.Key;
  description: string;
  amount: number;
  category: string;
  comment: string;
  date: string;
}

export type FormData = {
  amount: number;
  description: string;
  category: string;
  comment: string;
  date: string;
};

export interface EProps {
  isDataAdded?: (added: boolean) => void;
}

export interface IExpenseModal {
  isModalOpen: boolean;
  handleModal: (isOpen: boolean) => void;
  expenseID: string;
}
