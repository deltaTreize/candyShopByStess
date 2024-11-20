import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.scss";

export function HomePage() {
	return (
		<div className="homePage">
			<div>
			<NavLink to="/gateaux" className="homePage-link gateau">
			</NavLink>
				<p>Les Gâteaux Kinder</p>
			</div>
			<div>
			<NavLink to="/boites" className="homePage-link boite">
			</NavLink>
				<p>Les Assortiments</p>
			</div>
			<div>
			<NavLink to="/goblets" className="homePage-link smoothies">
			</NavLink>
				<p>Les Goblets</p>
			</div>
			<div>
			<NavLink to="/cones" className="homePage-link cones-homePage">
			</NavLink>
				<p>Les Cornets</p>
			</div>
			<div>
			<NavLink to="/brochettes" className="homePage-link brochette">
			</NavLink>
				<p>Les Brochettes</p>
			</div>
		</div>
	);
}
