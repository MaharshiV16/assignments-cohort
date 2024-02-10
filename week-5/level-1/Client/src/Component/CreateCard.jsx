import React, { useState } from "react";

const CreateCard = ({ getCards }) => {
	const [title, setTitle] = useState("");
	const [designation, setDesignation] = useState("");
	const [interest, setInterest] = useState("");

	const handleClick = async () => {
		const response = await fetch(`http://localhost:3000/cards`, {
			method: "POST",
			body: JSON.stringify({
				title: title,
				designation: designation,
				interest: interest,
			}),
			headers: {
				"Content-type": "application/json",
			},
		});
		const json = response.json();
		alert(json.message);

		setTitle("");
		setDesignation("");
		setInterest("");
		getCards();
	};

	return (
		<div className='CreateCard'>
			<input
				type='text'
				name='titel'
				id='title'
				className='CardInput'
				placeholder='Name'
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<input
				type='text'
				name='designation'
				id='designation'
				className='CardInput'
				placeholder='Designation'
				value={designation}
				onChange={(e) => {
					setDesignation(e.target.value);
				}}
			/>
			<input
				type='text'
				name='interest'
				id='interest'
				className='CardInput'
				placeholder="Interest (Seperated by ',' -> Example :- 'football,cricket,coding')"
				value={interest}
				onChange={(e) => {
					setInterest(e.target.value);
				}}
			/>
			<button onClick={handleClick}>Generate Card</button>
		</div>
	);
};

export default CreateCard;
