export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(key) {
	return {
		type: FETCH_DATA,
		key,
	};
}
