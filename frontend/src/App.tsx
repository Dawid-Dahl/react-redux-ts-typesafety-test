import React from "react";
import "./App.scss";
import {Header} from "./components/Header";
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import {increment1, increment5, decrement1, decrement5} from "./actions/countActions";

const App: React.FC = () => {
	const count = useSelector((state: RootState) => state.countReducer.count);

	return (
		<div className="wrapper">
			<Header title="Current State:" />
			<Display value={count} />
			<div>
				<Button title="Decrement: 5" onClick={decrement5} />
				<Button title="Decrement: 1" onClick={decrement1} />
				<Button title="Increment: 1" onClick={increment1} />
				<Button title="Increment: 5" onClick={increment5} />
			</div>
		</div>
	);
};

export default App;
