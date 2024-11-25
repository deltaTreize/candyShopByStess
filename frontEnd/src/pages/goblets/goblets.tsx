import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./goblets.scss";

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image_path: string;
	tags: string[];
}

export function Goblets() {
	const [products, setProducts] = useState<Product[]>([]);
	const [imageOrientations, setImageOrientations] = useState<
		Map<number, string>
	>(new Map());

	useEffect(() => {
		// Appel à l'API pour récupérer les produits de la catégorie "Goblets"
		fetch(`${process.env.REACT_APP_API_URL}/api/products/cup`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
	// Fonction pour vérifier l'orientation de l'image
	useEffect(() => {
		const orientations = new Map<number, string>();

		products.forEach((product) => {
			const img = new Image();
			img.onload = () => {
				const orientation = img.height > img.width ? "portrait" : "landscape";
				orientations.set(product.id, orientation);

				// Une fois que toutes les images ont été chargées, on met à jour l'état
				if (orientations.size === products.length) {
					setImageOrientations(new Map(orientations)); // Mettre à jour tout en une seule fois
				}
			};
			img.src = `${process.env.REACT_APP_API_URL}/${product.image_path}`;
		});
	}, [products]);

	if (products.length === 0) {
		return <div>Loading...</div>;
	}

	// Remplir les données structurées pour la liste de produits
	const structuredData = {
		"@context": "http://schema.org",
		"@type": "ItemList",
		name: "Goblets", // Nom de la catégorie
		description:
			"Découvrez notre gamme de Goblets garnis de bonbons ou de Kinder.",
		url: "https://candyshop-by-stess.fr/goblets", // L'URL de la page catégorie
		itemListElement: products.map((product, index) => ({
			"@type": "ListItem",
			position: index + 1, // Position du produit dans la liste
			item: {
				"@type": "Product",
				name: product.name,
				description: product.description,
				image: product.image_path,
				url: `https://candyshop-by-stess.fr/goblets/${product.id}`, // Lien vers la page produit
				offers: {
					"@type": "Offer",
					priceCurrency: "EUR",
					price: product.price,
				},
				keywords: Array.isArray(product.tags) ? product.tags.join(", ") : "",
			},
		})),
	};

	return (
		<>
			<Helmet>
				<title>Nos Goblets - CandyShop By Stess</title>
				<meta
					name="description"
					content="Découvrez notre gamme de Goblets chez CandyShop By Stess."
				/>
				{/* JSON-LD pour les moteurs de recherche */}
				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			</Helmet>

			<div className="goblets">
				<h1>CandyShop By Stess: Goblets garnis de bonbons ou de Kinder</h1>
				<NavLink to="/" className="homePage-link-back">
					<i className="fa-solid fa-arrow-left"></i>
					Retour
				</NavLink>
				<div className="goblets-wrapper">
					{products
						// Trier les produits en fonction de l'orientation
						.sort((a, b) => {
							const orientationA = imageOrientations.get(a.id);
							const orientationB = imageOrientations.get(b.id);

							// Place "portrait" avant "landscape"
							if (orientationA === "portrait" && orientationB !== "portrait") {
								return 1;
							}
							if (orientationA !== "portrait" && orientationB === "portrait") {
								return -1;
							}
							return 0; // Si les deux ont la même orientation, ne rien changer
						})
						.map((product) => {
							const orientation = imageOrientations.get(product.id); // Récupérer l'orientation de l'image
							return (
								<div
									key={product.id}
									className={`goblets-card ${
										orientation === "portrait" ? "vertical" : "horizontal"
									}`}
								>
									<NavLink to={`/goblets/${product.id}`}>
										<h2>{product.name}</h2>
										<img
											src={`${process.env.REACT_APP_API_URL}/${product.image_path}`}
											alt={`cup ${product.name}`}
											className="goblet-image"
										/>
									</NavLink>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}
