import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import conesImage from "../..//assets/cones-bonbon.png";
import gateauImage from "../..//assets/gateau-kinder-2.png";
import gobletsImage from "../..//assets/goblets-smoothies.png";
import boiteImage from "../../assets/boite-grande-homePage.png";
import brochetteImage from "../../assets/brochette-1.png";
import "./homePage.scss";

export function HomePage() {
	return (
		<>
 <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Gâteaux",
                  "url": "https://candyshop-by-stess.fr/gateaux"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Boîtes",
                  "url": "https://candyshop-by-stess.fr/boites"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Goblets",
                  "url": "https://candyshop-by-stess.fr/goblets"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Cônes",
                  "url": "https://candyshop-by-stess.fr/cones"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Brochettes",
                  "url": "https://candyshop-by-stess.fr/brochettes"
                }
              ]
            }
          `}
        </script>
      </Helmet>
			<div className="homePage">
				<h1>CandyShop By Stess: créations sucrées artisanales</h1>
				<div>
					<NavLink
						to="/gateaux"
						className="homePage-link gateau"
						aria-labelledby="gateau-title"
					>
						<img
							src={gateauImage}
							alt="CandyShop By Stess: Découvrez nos gâteaux Kinder faits maison."
						/>
					</NavLink>
					<h2 id="gateau-title">Les Gâteaux Kinder</h2>
				</div>
				<div>
					<NavLink
						to="/boites"
						className="homePage-link boite"
						aria-labelledby="boite-title"
					>
						<img
							src={boiteImage}
							alt="CandyShop By Stess: Assortiments gourmands de bonbons et chocolats."
						/>
					</NavLink>
					<h2 id="boite-title">Les Assortiments</h2>
				</div>
				<div>
					<NavLink
						to="/goblets"
						className="homePage-link smoothies"
						aria-labelledby="smoothies-title"
					>
						<img
							src={gobletsImage}
							alt="CandyShop By Stess: Goblets colorés et délicieux pour tous les goûts."
						/>
					</NavLink>
					<h2 id="smoothies-title">Les Goblets</h2>
				</div>
				<div>
					<NavLink
						to="/cones"
						className="homePage-link cones-homePage"
						aria-labelledby="cones-title"
					>
						<img
							src={conesImage}
							alt="CandyShop By Stess: Cornets de bonbons artisanaux pour toutes les occasions."
						/>
					</NavLink>
					<h3 id="cones-title">Les Cornets</h3>
				</div>
				<div>
					<NavLink
						to="/brochettes"
						className="homePage-link brochette"
						aria-labelledby="brochette-title"
					>
						<img
							src={brochetteImage}
							alt="CandyShop By Stess: Brochettes de bonbons faits main."
						/>
					</NavLink>
					<h3 id="brochette-title">Les Brochettes</h3>
				</div>
			</div>
		</>
	);
}
