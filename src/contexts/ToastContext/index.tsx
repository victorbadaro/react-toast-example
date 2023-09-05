import { createContext } from 'react';
import { ToastContextValue } from './types';

const ToastContext = createContext<ToastContextValue>({} as ToastContextValue);

export { ToastContext };
