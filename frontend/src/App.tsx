import React from "react";
import "./App.scss";
import {Header} from "./components/Header";
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store";
import {fetchCount, setCount} from "./actions/fetchActions";

const App: React.FC = () => {
	const count = useSelector((state: RootState) => state.countReducer.count);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchCount());
	}, [count]);

	return (
		<div className="wrapper">
			<Header title="Current State:" />
			<Display count={count} />
			<div>
				<Button title="Decrement: 5" onClick={setCount} amount={-5} />
				<Button title="Decrement: 1" onClick={setCount} amount={-1} />
				<Button title="Increment: 1" onClick={setCount} amount={1} />
				<Button title="Increment: 5" onClick={setCount} amount={5} />
			</div>
		</div>
	);
};

export default App;
