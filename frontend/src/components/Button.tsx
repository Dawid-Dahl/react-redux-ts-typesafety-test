import React from "react";
import {ActionTypes} from "../actions/countActions";
import {useDispatch} from "react-redux";

type Props = {
	title: string;
	onClick: () => ActionTypes;
};

const Button: React.FC<Props> = ({title, onClick}) => {
	const dispatch = useDispatch();

	return (
		<button className="button" onClick={() => dispatch(onClick())}>
			{title}
		</button>
	);
};

export {Button};
