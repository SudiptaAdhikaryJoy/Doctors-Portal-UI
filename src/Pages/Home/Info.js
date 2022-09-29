import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
	
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-5">
			<InfoCard cardTitle="Opening Hours" img={clock} />
			<InfoCard cardTitle="Opening Hours" img={marker} />
			<InfoCard cardTitle="Opening Hours" img={phone} />
		</div>
	);
};

export default Info;