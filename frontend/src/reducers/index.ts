import {ActionTypes} from "../actions/actions";

export type ReducerState = {
	count: number;
};

const initialState: ReducerState = {
	count: 0
} as const;

const reducer = (state: ReducerState = initialState, {type}: ActionTypes): ReducerState => {
	switch (type) {
		case "INCREMENT_1":
			return {...state, count: state.count + 1};

		case "INCREMENT_5":
			return {...state, count: state.count + 5};

		case "DECREMENT_1":
			return {...state, count: state.count - 1};

		case "DECREMENT_5":
			return {...state, count: state.count - 5};
		default:
			return state;
	}
};

export {reducer};
