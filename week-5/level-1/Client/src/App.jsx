import { useEffect, useState } from "react";
import "./App.css";
import CreateCard from "./Component/CreateCard";
import CardList from "./Component/CardList";

function App() {
	const [cards, setCards] = useState([]);

	const getCards = async () => {
		const response = await fetch(`http://localhost:3000/cards`);
		const json = await response.json();
		setCards(json.cards);
	};

	useEffect(() => {
		getCards();
	}, []);

	return (
		<div className='Container'>
			<CreateCard getCards={getCards} />
			<CardList cards={cards} />
		</div>
	);
}

export default App;
