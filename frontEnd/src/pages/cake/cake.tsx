import React, { useState } from "react";
// import {SimpleContainer} from "../../components/simple-container/simple-container";
// import {EtagesContainer} from "../../components/etages-container/etages-container";
import "./cake.scss";
import { NavLink } from "react-router-dom";

export function Cake() {
	// const [show, setShow] = useState(1);
	// const [forme, setForme] = useState<number>(0);
	// if (show > 4) {
	// 	setShow(1);
	// 	setForme(0);
	// }

	// const handleForme = (num: number) => {
	// 	setForme(num);
	// };

	// const handleShow = () => {
	// 	setShow(show + 1);
	// };

	// const handleShowImg = () => {
	// 	if (forme === 0) {
	// 		return { src: "", alt: "" };
	// 	}
	// 	if (forme === 1) {
	// 		return { src: "./assets/heart.png", alt: "coeur" };
	// 	}
	// 	if (forme === 2) {
	// 		return { src: "./assets/square.png", alt: "carré" };
	// 	}
	// 	if (forme === 3) {
	// 		return { src: "./assets/star.png", alt: "étoile" };
	// 	}
	// 	if (forme === 4) {
	// 		return { src: "./assets/triangle.png", alt: "triangle" };
	// 	}
	// 	if (forme === 5) {
	// 		return { src: "./assets/circle.png", alt: "cercle" };
	// 	}
	// 	if (forme === 6) {
	// 		return { src: "./assets/cone.png", alt: "cone" };
	// 	}
	// 	return { src: "", alt: "" };
	// };

	// const { src, alt } = handleShowImg();

	return (
		<div className="cake">
			<NavLink to="/" className="homePage-link-back">
				<i className="fa-solid fa-arrow-left"></i>Retour
			</NavLink>
			<h1 className="cake-title">PAGE EN COUR DE CONSTRUCTION!</h1>
			<img
				src="./assets/panneau-chantier.png"
				alt="panneau travaux"
				className="panneau"
			/>
		</div>
		// <div className="cake">
		// 	<div className="cake-show">
		// 		<div className="show1">
		// 			<p>Forme</p>
		// 			<img src={src} alt={alt} />
		// 		</div>
		// 		<div className="show2">
		// 			<p>Taille</p>
		// 		</div>
		// 		<div className="show3">Habillage</div>
		// 		<div className="show4">Remplissage</div>
		// 	</div>
		// 	<div className="cake-container">
		// 		<div className={`etape1 ${show === 1 ? "show" : ""}`}>
		// 			<p>Forme</p>
		// 			<div
		// 				id="forme-images"
		// 				className={`images ${show === 1 ? "show" : ""}`}
		// 			>
		// 				<img
		// 					src="./assets/heart.png"
		// 					alt="coeur"
		// 					onClick={() => handleForme(1)}
		// 					className={`${forme === 1 ? "active" : ""}`}
		// 				/>
		// 				<img
		// 					src="./assets/square.png"
		// 					alt="carré"
		// 					onClick={() => handleForme(2)}
		// 					className={`${forme === 2 ? "active" : ""}`}
		// 				/>
		// 				<img
		// 					src="./assets/star.png"
		// 					alt="étoile"
		// 					onClick={() => handleForme(3)}
		// 					className={`${forme === 3 ? "active" : ""}`}
		// 				/>
		// 				<img
		// 					src="./assets/triangle.png"
		// 					alt="triangle"
		// 					onClick={() => handleForme(4)}
		// 					className={`${forme === 4 ? "active" : ""}`}
		// 				/>
		// 				<img
		// 					src="./assets/circle.png"
		// 					alt="cercle"
		// 					onClick={() => handleForme(5)}
		// 					className={`${forme === 5 ? "active" : ""}`}
		// 				/>
		// 				<img
		// 					src="./assets/cone.png"
		// 					alt="cone"
		// 					onClick={() => handleForme(6)}
		// 					className={`${forme === 6 ? "active" : ""}`}
		// 				/>
		// 			</div>
		// 			<button
		// 				type="button"
		// 				className={`${show === 1 ? "buttonShow" : "buttonHidden"}`}
		// 				onClick={handleShow}
		// 			>
		// 				Confirmer
		// 			</button>
		// 		</div>
		// 		<div className={`etape2 ${show === 2 ? "show" : ""}`}>
		// 			<p>Taille</p>
		// 			<div className="taille-container">
		//         <SimpleContainer />
		//         <EtagesContainer />
		// 			</div>
		// 			<button
		// 				type="button"
		// 				className={`${show === 2 ? "buttonShow" : "buttonHidden"}`}
		// 				onClick={handleShow}
		// 			>
		// 				Confirmer
		// 			</button>
		// 		</div>
		// 		<div className={`etape3 ${show === 3 ? "show" : ""}`}>
		// 			<p>Habillage</p>
		// 			<button
		// 				type="button"
		// 				className={`${show === 3 ? "buttonShow" : "buttonHidden"}`}
		// 				onClick={handleShow}
		// 			>
		// 				Confirmer
		// 			</button>
		// 		</div>
		// 		<div className={`etape4 ${show === 4 ? "show" : ""}`}>
		// 			<p>Remplissage</p>
		// 			<button
		// 				type="button"
		// 				className={`${show === 4 ? "buttonShow" : "buttonHidden"}`}
		// 				onClick={handleShow}
		// 			>
		// 				Confirmer
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
	);
}