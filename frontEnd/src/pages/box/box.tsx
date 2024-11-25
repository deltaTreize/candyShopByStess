import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./box.scss";

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image_path: string;
	tags: string[];
}

export function Box() {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		// Appel à l'API pour récupérer les produits de la catégorie "box"
		fetch(`${process.env.REACT_APP_API_URL}/api/products/box`)
			.then((response) => response.json())
			.then((data) => setProducts(data.reverse()));
	}, []);

	
	if (products.length === 0) {
		return <div>Loading...</div>;
	}

	// Remplir les données structurées pour la liste de produits
	const structuredData = {
		"@context": "http://schema.org",
		"@type": "ItemList",
		name: "Assortiments", // Nom de la catégorie
		description:
			"Découvrez notre gamme d'Assortiments de bonbons ou de Kinder.",
		url: "https://candyshop-by-stess.fr/boites", // L'URL de la page catégorie
		itemListElement: products.map((product, index) => ({
			"@type": "ListItem",
			position: index + 1, // Position du produit dans la liste
			item: {
				"@type": "Product",
				name: product.name,
				description: product.description,
				image: product.image_path,
				url: `https://candyshop-by-stess.fr/boites/${product.id}`, // Lien vers la page produit
				offers: {
					"@type": "Offer",
					priceCurrency: "EUR",
					price: product.price,
				},
				keywords: Array.isArray(product.tags) ? product.tags.join(", ") : "",
			},
		})),
	};
	
console.log(products);

	return (
		<>
			<Helmet>
				<title>Nos Assortiments - CandyShop By Stess</title>
				<meta
					name="description"
					content="Découvrez notre gamme d'Assortiments chez CandyShop By Stess."
				/>
				{/* JSON-LD pour les moteurs de recherche */}
				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			</Helmet>

			<div className="box">
				<h1>CandyShop By Stess: Assortiments de bonbons ou de Kinder</h1>
				<NavLink to="/" className="homePage-link-back">
					<i className="fa-solid fa-arrow-left"></i>
					Retour
				</NavLink>
				<div className="box-wrapper">
					{products.map((product) => {
							return (
								<div
									key={product.id}
									className={`box-card`}
								>
									<NavLink to={`/box/${product.id}`}>
										<h2>{product.name}</h2>
										<img
											src={`${process.env.REACT_APP_API_URL}/${product.image_path}`}
											alt={`box ${product.name}`}
											className="box-image"
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
