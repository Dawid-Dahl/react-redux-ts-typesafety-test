import React from "react";

type Props = {
	count: number | Promise<any>;
};

const Display: React.FC<Props> = ({count}) => <div className="display">{count}</div>;

export {Display};
