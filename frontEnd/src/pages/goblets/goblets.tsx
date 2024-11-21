import React from "react";

import "./goblets.scss";
import { NavLink } from "react-router-dom";

export function Goblets() {
	return (
		<div className="goblets">
			<NavLink to="/" className="homePage-link-back">
				<i className="fa-solid fa-arrow-left"></i>
				<h1>Retour</h1>
			</NavLink>
			<div className="goblets-wrapper">
				<div className="goblets-card">
					<img src="./assets/goblets-smoothies.png" alt="goblet de bonbons" />
				</div>
				<div className="goblets-card">
					<img src="./assets/goblets-halloween.png" alt="goblet de bonbons" />
				</div>
				<div className="goblets-card vertical">
					<img src="./assets/boule-chamallow.png" alt="goblet de bonbons" />
				</div>
				<div className="goblets-card vertical">
					<img
						src="./assets/boule-chamallow-choco.png"
						alt="goblet de bonbons"
					/>
				</div>
				<div className="goblets-card vertical">
					<img src="./assets/boule-smarties.png" alt="goblet de bonbons" />
				</div>
			</div>
		</div>
	);
}
