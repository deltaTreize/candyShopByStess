import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.scss";

export function HomePage() {
	return (
		<div className="homePage">
			<div>
			<NavLink to="/gateaux" className="homePage-link gateau" aria-label="go to cake">
			</NavLink>
				<h2>Les Gâteaux Kinder</h2>
			</div>
			<div>
			<NavLink to="/boites" className="homePage-link boite" aria-label="go to box">
			</NavLink>
				<h2>Les Assortiments</h2>
			</div>
			<div>
			<NavLink to="/goblets" className="homePage-link smoothies" aria-label="go to goblets">
			</NavLink>
				<h2>Les Goblets</h2>
			</div>
			<div>
			<NavLink to="/cones" className="homePage-link cones-homePage" aria-label="go to cones">
			</NavLink>
				<h3>Les Cornets</h3>
			</div>
			<div>
			<NavLink to="/brochettes" className="homePage-link brochette" aria-label="go to brochettes">
			</NavLink>
				<h3>Les Brochettes</h3>
			</div>
		</div>
	);
}
