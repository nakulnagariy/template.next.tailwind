import {
  EXPENSE_FETCHED_SUCCESSFULLY,
  SOMETHING_WENT_WRONG,
  UNAUTHORIZED,
  EXPENSE_DELETED,
  EXPENSE_ADDED,
  DATA_UPDATED,
  LOGOUT_MSG,
} from '../constant/constant';

export const showExpenseFetchSuccessMessage = (messageApi: any) => {
  messageApi.info(EXPENSE_FETCHED_SUCCESSFULLY);
};

export const showExpenseAddedSuccessMessage = (messageApi: any) => {
  messageApi.info(EXPENSE_ADDED);
};

export const showSomethingWentWrongMessage = (messageApi: any) => {
  messageApi.warning(SOMETHING_WENT_WRONG);
};

export const showUnautorizedMessage = (messageApi: any) => {
  messageApi.warning(UNAUTHORIZED);
};

export const showDeleteMessage = (messageApi: any) => {
  messageApi.info(EXPENSE_DELETED);
};

export const showDataUpdatedMessage = (messageApi: any) => {
  messageApi.info(DATA_UPDATED);
};

export const showLogoutMessage = (messageApi: any) => {
  messageApi.info(LOGOUT_MSG);
};
