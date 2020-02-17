import {ActionTypes} from "../actions/fetchActions";

enum ActionSuffix {
	fulfilled = "FULFILLED",
	pending = "PENDING",
	rejected = "REJECTED"
}

export type ReducerState = {
	count: number | Promise<any> | "";
	isFetching: boolean;
	error: Error | null;
};

const initialState: ReducerState = {
	count: 0,
	isFetching: false,
	error: null
} as const;

const countReducer = (
	state: ReducerState = initialState,
	{type, payload}: ActionTypes
): ReducerState => {
	switch (type) {
		case `FETCH_COUNT_${ActionSuffix.fulfilled}`:
			return {...state, count: payload};
		case `SET_COUNT_${ActionSuffix.pending}`:
			return {...state, count: ""};
		case `SET_COUNT_${ActionSuffix.fulfilled}`:
			return {...state, count: payload};
		default:
			return state;
	}
};

export {countReducer};
