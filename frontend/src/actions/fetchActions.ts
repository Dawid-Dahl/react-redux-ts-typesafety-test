export const fetchCount = (payload: any = null) =>
	({
		type: "FETCH_COUNT",
		payload: fetch("http://localhost:5000/api").then(res => res.json())
	} as const);

export const setCount = (count: number = 0) =>
	({
		type: "SET_COUNT",
		payload: fetch("http://localhost:5000/api", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({count})
		}).then(res => res.json())
	} as const);

export type ActionTypes = ReturnType<typeof fetchCount> | ReturnType<typeof setCount>;
