import {AppEvents} from "./types";

const createAction = <T extends AppEvents, P>(type: T) => (payload: P) => ({
	type,
	payload
});

export const increment1 = createAction<AppEvents.INCREMENT_1, any>(AppEvents.INCREMENT_1);
export const increment5 = createAction<AppEvents.INCREMENT_5, any>(AppEvents.INCREMENT_5);
export const decrement1 = createAction<AppEvents.DECREMENT_1, any>(AppEvents.DECREMENT_1);
export const decrement5 = createAction<AppEvents.DECREMENT_5, any>(AppEvents.DECREMENT_5);

const actions = {
	increment1,
	increment5,
	decrement1,
	decrement5
};

/* export const increment1 = (payload: any = null) =>
	({
		type: AppEvents.INCREMENT_1,
		payload
	} as const); 

export const increment5 = (payload: any = null) =>
	({
		type: AppEvents.INCREMENT_5,
		payload
	} as const);

export const decrement1 = (payload: any = null) =>
	({
		type: AppEvents.DECREMENT_1,
		payload
	} as const);

export const decrement5 = (payload: any = null) =>
	({
		type: AppEvents.DECREMENT_5,
		payload
	} as const); */
