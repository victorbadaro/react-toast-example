import { useEffect, useRef } from 'react';
import { UseTimeoutCallback } from './types';

export function useTimeout(callback: UseTimeoutCallback) {
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const timeoutId = setTimeout(() => savedCallback.current(), 4000);

		return () => clearTimeout(timeoutId);
	}, []);
}
