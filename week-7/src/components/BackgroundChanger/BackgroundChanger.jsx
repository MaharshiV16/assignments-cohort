import React from "react";
import "./BackgroundChanger.css";

const colors = [
	{ id: 1, color: "blue" },
	{ id: 2, color: "red" },
	{ id: 3, color: "black" },
	{ id: 4, color: "yellow" },
	{ id: 5, color: "green" },
];

const BackgroundChanger = ({ reference }) => {
	const handleClick = (id = 1) => {
		const element = reference.current;
		const currentColor = colors.reduce((accumulator, currentValue) => {
			if (accumulator !== undefined) {
				return accumulator; // ! Return the element as it is found
			}
			// Check if the current element matches the targetValue
			if (currentValue.id == id) {
				return currentValue;
			}
			return undefined;
		}, undefined);
		element.style.backgroundColor = currentColor.color;
	};

	return (
		<div>
			<div className='buttons'>
				{colors.map((color) => {
					return (
						<button
							onClick={() => {
								handleClick(color.id);
							}}
							key={color.id}
						>
							{color.color}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default BackgroundChanger;
