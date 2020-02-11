export enum AppEvents {
	INCREMENT_1 = "INCREMENT_1",
	INCREMENT_5 = "INCREMENT_5",
	DECREMENT_1 = "DECREMENT_1",
	DECREMENT_5 = "DECREMENT_5"
}

const createAction = <T extends AppEvents, P>(type: T) => (payload: P) => ({
	type,
	payload
});

export const increment1 = createAction<AppEvents.INCREMENT_1, any>(AppEvents.INCREMENT_1);
export const increment5 = createAction<AppEvents.INCREMENT_5, any>(AppEvents.INCREMENT_5);
export const decrement1 = createAction<AppEvents.DECREMENT_1, any>(AppEvents.DECREMENT_1);
export const decrement5 = createAction<AppEvents.DECREMENT_5, any>(AppEvents.DECREMENT_5);

interface StringMap<T> {
	[key: string]: T;
}

type AnyFunction = (...args: any) => any;

type ActionUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
	increment1,
	increment5,
	decrement1,
	decrement5
} as const;

export type ActionTypes = ActionUnion<typeof actions>;

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
