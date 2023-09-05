import { useEffect, useRef } from 'react';
import { UseTimeoutProps } from './types';

export function useTimeout({ callback }: UseTimeoutProps) {
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const timeoutId = setTimeout(() => savedCallback.current(), 4000);

		return () => clearTimeout(timeoutId);
	}, []);
}
