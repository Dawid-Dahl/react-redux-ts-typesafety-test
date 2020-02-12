import React from "react";

type Props = {
	value: number;
};

const Display: React.FC<Props> = ({value}) => <div className="display">{value}</div>;

export {Display};
