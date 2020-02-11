import {increment1, increment5, decrement1, decrement5} from "./actions";

export enum AppEvents {
	INCREMENT_1 = "INCREMENT_1",
	INCREMENT_5 = "INCREMENT_5",
	DECREMENT_1 = "DECREMENT_1",
	DECREMENT_5 = "DECREMENT_5"
}

export type ActionTypes =
	| ReturnType<typeof increment1>
	| ReturnType<typeof increment5>
	| ReturnType<typeof decrement1>
	| ReturnType<typeof decrement5>;
