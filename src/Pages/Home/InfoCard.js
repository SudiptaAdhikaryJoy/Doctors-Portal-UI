import React from 'react';

const InfoCard = ({img, cardTitle}) => {
    return (
			<div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
				<figure className="">
					<img src={img} alt="Album" />
				</figure>
				<div className="card-body text-white">
					<h2 className="card-title">{cardTitle}</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
				</div>
			</div>
		);
};

export default InfoCard;