import React from "react";

const CardList = ({ cards }) => {
	return (
		<div className='CardList'>
			{cards.map((card) => {
				const interests = card.interest.split(",");
				return (
					<div className='Card' key={card._id}>
						<div className='CardTitle'>{card.title}</div>
						<div className='CardDesignation'>{card.designation}</div>
						<div className='CardInterest'>
							<div className='CardInterestHeading'>Interest</div>
							{interests.map((interest) => {
								return (
									<div className='CardInterestItem' key={interest}>
										{interest}
									</div>
								);
							})}
						</div>
						<div className='CardSocialIcons'>
							<button>LinkedIn</button>
							<button>Twitter</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardList;
