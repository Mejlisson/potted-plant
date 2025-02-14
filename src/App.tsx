import "./App.scss";
import Counter from "./Counter/Counter";
import Button from "./Button/Button";

function App() {
	return (
		<>
			<h1>🪴 Potted-plant 🪴</h1>
			<p>Nu gör vi interaktiva komponenter!</p>
			<Counter/>
			<Counter/>
			<Button/>
		</>
	);
}

export default App;
