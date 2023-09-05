import { Toast } from '@/components/Toast';
import { ToastsContainer } from '@/components/ToastsContainer';
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
			<ToastsContainer>
				{toasts.map(toast => (
					<Toast
						key={toast.id}
						message={toast.message}
						close={() => close(toast.id)}
					/>
				))}
			</ToastsContainer>
		</ToastContext.Provider>
	);
}

export { ToastContext, ToastProvider };
