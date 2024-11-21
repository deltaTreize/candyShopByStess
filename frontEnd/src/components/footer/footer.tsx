import React from "react";

import "./footer.scss";

export function Footer() {
	return (
		<div className="footer">
			<nav>
				<ul>
					<li>
						<a
							className="footer-link-facebook"
							href="https://www.facebook.com/groups/873342194522465"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fa-brands fa-facebook"></i>
							candyshop by stess
						</a>
					</li>
					<li>
						<a
							className="footer-link-insta"
							href="https://www.instagram.com/candyshop_by_stess/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fa-brands fa-instagram"></i>
							candyshop_by_stess
						</a>
					</li>
					<li>
						<a
							className="footer-link-mail"
							href="mailto:candyshopbystess@outlook.fr"
						>
							<i className="fa-solid fa-envelope"></i>
							candyshopbystess@outlook.fr
						</a>
					</li>
					<li>
					<a
							className="footer-link-phone"
							href="tel:+33663691486"
						>
							<i className="fa-solid fa-phone"></i>
							06.63.69.14.86
						</a>

					</li>
					<li>
					<a
							className="footer-link-location"
							href="https://www.google.com/maps/dir/?api=1&destination=mairie+Rue+du+11+Novembre%2C+86360+Chasseneuil-du-Poitou"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fa-solid fa-location-dot"></i>
							86360 Chasseneuil-du-Poitou 
						</a>

					</li>
					<li>
						<h1>SIRET: 934 990 615 00015</h1>
					</li>
				</ul>
			</nav>
		</div>
	);
}
