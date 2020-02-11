import React from "react";

type Props = {
	title: string;
};

const Header: React.FC<Props> = ({title}) => <div className="header">{title}</div>;

export {Header};
