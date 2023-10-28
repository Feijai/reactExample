import React from 'react';

export const DialogContext = React.createContext();

export const useDialogContext = () => {
  return React.useContext(DialogContext);
};
