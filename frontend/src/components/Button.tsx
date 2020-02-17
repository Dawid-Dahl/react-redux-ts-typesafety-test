import React from "react";
import {useDispatch} from "react-redux";

type Props = {
	title: string;
	onClick: (count: number) => void;
	amount: number;
};

const Button: React.FC<Props> = ({title, onClick, amount}) => {
	const dispatch = useDispatch();

	return (
		<button className="button" onClick={() => dispatch(onClick(amount))}>
			{title}
		</button>
	);
};

export {Button};
