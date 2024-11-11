import React from "react";

import "./cones.scss";
import { NavLink } from "react-router-dom";

export function Cones() {
	return (
		<div className="cones">
			<NavLink to="/" className="homePage-link-back">
				<i className="fa-solid fa-arrow-left"></i>Retour
			</NavLink>
			<div className="cones-wrapper">
				<div className="cones-card">
					<img
						src="./assets/cone-bleu-noel-bonbons.png"
						alt="cone de bonbons"
					/>
				</div>
				<div className="cones-card">
					<img src="./assets/cone-bleu-noel-kinder.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img
						src="./assets/cone-rose-noel-bonbons.png"
						alt="cone de bonbons"
					/>
				</div>
				<div className="cones-card">
					<img src="./assets/cone-kinder.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cone-noel-kinder.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cone-noel-malteser.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cone-rose-bonbon.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cone-rose-noel-kinder.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-noel-rennes.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-logo-3.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-logo-1.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img
						src="./assets/cones-halloween-sachets.png"
						alt="cone de bonbons"
					/>
				</div>
				<div className="cones-card">
					<img
						src="./assets/cones-halloween-cornet.png"
						alt="cone de bonbons"
					/>
				</div>
				<div className="cones-card">
					<img src="./assets/cones-logo-2.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-logo-4.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-malteser.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cones-pop-corn.png" alt="cone de bonbons" />
				</div>
				<div className="cones-card">
					<img src="./assets/cone-bleu-rose-blanc.png" alt="cone de bonbons" />
				</div>
			</div>
		</div>
	);
}
