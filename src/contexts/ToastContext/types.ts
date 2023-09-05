import { ReactNode } from 'react';

export interface IToast {
	id: string;
	message: string;
}

export interface ToastContextValue {
	open: (message: string) => void;
	close: (id: string) => void;
}

export interface ToastProviderProps {
	children: ReactNode;
}
