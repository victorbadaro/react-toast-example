export interface ToastContextValue {
	open: (message: string) => void;
	close: (id: number) => void;
}
