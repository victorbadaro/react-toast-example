import { ToastContext } from '@/contexts/ToastContext';
import { useContext } from 'react';

export function useToast() {
	const context = useContext(ToastContext);

	return context;
}
