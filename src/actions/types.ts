import {increment1, increment5, decrement1, decrement5} from "./actions";

export type ReducerState = {
	count: number;
};

export type ActionTypes =
	| ReturnType<typeof increment1>
	| ReturnType<typeof increment5>
	| ReturnType<typeof decrement1>
	| ReturnType<typeof decrement5>;
