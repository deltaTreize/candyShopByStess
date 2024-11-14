import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.scss";

export function HomePage() {
	return (
		<div className="homePage">
			<NavLink to="/gateaux" className="homePage-link gateau">
				<p>Les Gâteaux sur mesure</p>
			</NavLink>
			<NavLink to="/boites" className="homePage-link boite">
				<p>Les Assortiments</p>
			</NavLink>
			<NavLink to="/goblets" className="homePage-link smoothies">
				<p>Les Goblets</p>
			</NavLink>
			<NavLink to="/cones" className="homePage-link cones-homePage">
				<p>Les Cornets</p>
			</NavLink>
			<NavLink to="/brochettes" className="homePage-link brochette">
				<p>Les Brochettes</p>
			</NavLink>
		</div>
	);
}
