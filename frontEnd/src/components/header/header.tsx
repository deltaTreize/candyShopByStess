import React from "react";
import { NavLink } from "react-router-dom";
// import { Collapse } from "../collapse/collapse";
import logo from "../../assets/icon.png";
import "./header.scss";

export function Header() {
	return (
		<div className="header">
			<div className="main-logo">
				<NavLink className="main-logo-link" aria-label="go to home" to={"/"}>
					<img
						className="main-logo-img"
						src={logo}
						alt="candyShopByStess Logo"
					/>
				</NavLink>
			</div>
			<div className="navbar">
				{/* <Collapse
					title={"Par saisons"}
					value={[
						{ text: "14 Juillet", icon: <></> },
						{ text: "Halloween", icon: <i className="fa-solid fa-ghost"></i> },
						{ text: "Noël", icon: <i className="fa-solid fa-gift"></i> },
						{
							text: "Nouvel an",
							icon: <i className="fa-solid fa-champagne-glasses"></i>,
						},
					]}
				/>
				<Collapse
					title={"Par occasions"}
					value={[
						{
							text: "Anniverssaire",
							icon: <i className="fa-solid fa-cake-candles"></i>,
						},
						{ text: "Naissance", icon: <i className="fa-solid fa-baby"></i> },
						{ text: "Mariage", icon: <></> },
						{ text: "Batème", icon: <></> },
						{ text: "Fête des mères", icon: <></> },
						{
							text: `Saint valentin`,
							icon: <i className="fa-solid fa-heart"></i>,
						},
					]}
				/> */}
				<form className="search-form" action="">
					<label htmlFor="search-input" className="visually-hidden">
						Rechercher
					</label>
					<input
						type="text"
						id="search-input"
						name="search-query"
						placeholder="Rechercher"
						className="search"
					/>
					<button type="submit" className="search-button" aria-label="search">
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
			</div>
		</div>
	);
}
