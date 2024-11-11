import React from "react";
// import products from "../../produits_personnalises.json";
import "./box.scss";
import { NavLink } from "react-router-dom";

export function Box() {
	return (
		<div className="box">
			<NavLink to="/" className="homePage-link-back">
				<i className="fa-solid fa-arrow-left"></i>Retour
			</NavLink>
			<div className="box-wrapper">
				<div className="box-card">
					<img src="./assets/boite-petite.png" alt="goblet de bonbons" />
				</div>
				<div className="box-card">
					<img src="./assets/boite-grande.png" alt="goblet de bonbons" />
				</div>
				<div className="box-card">
					<img src="./assets/seau.png" alt="goblet de bonbons" />
				</div>
				<div className="box-card">
					<img src="./assets/chaudron.png" alt="goblet de bonbons" />
				</div>
			</div>
		</div>
	);
}
