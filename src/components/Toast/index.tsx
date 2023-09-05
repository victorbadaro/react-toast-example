import { ToastProps } from './types';

import styles from './styles.module.css';

export function Toast({ message, close }: ToastProps) {
	return (
		<div className={styles.toast}>
			<p>{message}</p>
			<button
				type="button"
				title="close"
				className={styles['close-button']}
				onClick={close}
			>
				{'\u274C'}
			</button>
		</div>
	);
}
