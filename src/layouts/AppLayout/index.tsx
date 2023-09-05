import { useToast } from '@/hooks/useToast';

import styles from './styles.module.css';

export function AppLayout() {
	const { open } = useToast();

	return (
		<main className={styles['app-layout']}>
			<div>
				<h1>React Toast Example</h1>
				<button
					type="button"
					onClick={() => open('This is a message!')}
				>
					Toast Message
				</button>
			</div>
		</main>
	);
}
