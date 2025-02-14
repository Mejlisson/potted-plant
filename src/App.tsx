import "./App.scss";
import Counter from "./Counter/Counter";
import Button from "./Button/Button";
import NewCounter from "./NewCounter/NewCounter";

function App() {
	return (
		<>
			<h1>🪴 Potted-plant 🪴</h1>
			<p>Nu gör vi interaktiva komponenter!</p>
			<Counter/>
			<Counter/>
			<Button/>
			<NewCounter/>
		</>
	);
}

export default App;
