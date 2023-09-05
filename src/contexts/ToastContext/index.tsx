import { Toast } from '@/components/Toast';
import { createContext, useCallback, useState } from 'react';
import { IToast, ToastContextValue, ToastProviderProps } from './types';

const ToastContext = createContext<ToastContextValue>({} as ToastContextValue);

function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<IToast[]>([]);

	const open = useCallback((message: string) => {
		const newToast: IToast = {
			id: crypto.randomUUID(),
			message
		};

		setToasts(previousToasts => [...previousToasts, newToast]);
	}, []);

	const close = useCallback((id: string) => {
		setToasts(previousToasts => previousToasts.filter(toast => toast.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ open, close }}>
			{children}
			{toasts.map(toast => (
				<Toast
					key={toast.id}
					message={toast.message}
					close={() => close(toast.id)}
				/>
			))}
		</ToastContext.Provider>
	);
}

export { ToastContext, ToastProvider };
