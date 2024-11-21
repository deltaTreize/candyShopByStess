import React from "react";

import "./brochettes.scss";
import { NavLink } from "react-router-dom";

export function Brochettes() {
	return (
		<div className="brochettes">
			<NavLink to="/" className="homePage-link-back">
				<i className="fa-solid fa-arrow-left"></i>
				Retour
			</NavLink>

			<div className="brochettes-wrapper">
				<div className="brochettes-card">
					<img src="./assets/brochette-1.png" alt="goblet de bonbons" />
				</div>
				<div className="brochettes-card">
					<img src="./assets/brochette-2.png" alt="goblet de bonbons" />
				</div>
				<div className="brochettes-card">
					<img src="./assets/brochette-3.png" alt="goblet de bonbons" />
				</div>
			</div>
		</div>
	);
}
