export const sqlCountUpdator = (payload: number): string =>
	`UPDATE Counter SET count = ${payload} WHERE id = 1;`;
