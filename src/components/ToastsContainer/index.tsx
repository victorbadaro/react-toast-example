import { ToastsContainerProps } from './types';

import styles from './styles.module.css';

export function ToastsContainer({ children }: ToastsContainerProps) {
	return (
		<div className={styles['toasts-container']}>
			{children}
		</div>
	);
}
