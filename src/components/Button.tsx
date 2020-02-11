import React from "react";
import {ActionTypes} from "../actions/actions";
import {useDispatch} from "react-redux";

type Props = {
	title: string;
	onClick: (payload: any) => ActionTypes;
};

const Button: React.FC<Props> = ({title, onClick}) => {
	const dispatch = useDispatch();

	return (
		<button className="button" onClick={() => dispatch(onClick(null))}>
			{title}
		</button>
	);
};

export {Button};
