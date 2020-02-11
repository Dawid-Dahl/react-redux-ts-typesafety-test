import {ActionTypes, AppEvents} from "../actions/actions";

type ReducerState = {
	count: number;
};

const initialState: ReducerState = {
	count: 0
} as const;

const reducer = (state: ReducerState = initialState, {type}: ActionTypes): ReducerState => {
	switch (type) {
		case AppEvents.INCREMENT_1:
			return {...state, count: state.count + 1};

		case AppEvents.INCREMENT_5:
			return {...state, count: state.count + 5};

		case AppEvents.DECREMENT_1:
			return {...state, count: state.count - 1};

		case AppEvents.DECREMENT_5:
			return {...state, count: state.count - 5};
		default:
			return state;
	}
};

export {reducer};
