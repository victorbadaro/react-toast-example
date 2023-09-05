import { ToastProvider } from './contexts/ToastContext';
import { AppLayout } from './layouts/AppLayout';

import './styles/global.css';

export function App() {
	return (
		<ToastProvider>
			<AppLayout />
		</ToastProvider>
	);
}
