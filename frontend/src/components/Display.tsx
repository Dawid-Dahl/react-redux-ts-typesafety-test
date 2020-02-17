import React from "react";

type Props = {
	count: number;
};

const Display: React.FC<Props> = ({count}) => <div className="display">{count}</div>;

export {Display};
