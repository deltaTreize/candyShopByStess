import React from "react";
import "./cake.scss";
import { NavLink } from "react-router-dom";

// import axios from "axios";


export function Cake() {
	// type Product = {
	// 	id: number;
	// 	name: string;
	// 	price: number;
	// 	image_path: string;
	// 	tags: string;
	// };
	// 	const [products, setProducts] = useState<Product[]>([]);
	
	// 	useEffect(() => {
	// 		const fetchProducts = async () => {
	// 			try {
	// 				const response = await axios.get(
	// 					"http://localhost:3001/api/products"
	// 				);
	// 				setProducts(response.data);
	// 			} catch (error) {
	// 				console.error("Error fetching products:", error);
	// 			}
	// 		};
	
	// 		fetchProducts();
	// 	}, []);

		return (
			<div className="cake">
				<NavLink to="/" className="homePage-link-back">
					<i className="fa-solid fa-arrow-left"></i>Retour
				</NavLink>
				<div className="cake-wrapper">
					<div className="cake-card">
						<img src="./assets/gateau-kinder-1.png" alt="gateau kinder" />
					</div>
					<div className="cake-card">
						<img src="./assets/gateau-kinder-2.png" alt="gateau kinder" />
					</div>
					<div className="cake-card">
						<img src="./assets/gateau-kinder-3.png" alt="gateau kinder" />
					</div>
					<div className="cake-card">
						<img src="./assets/gateau-kinder-4.png" alt="gateau kinder" />
					</div>
					{/* <div className="cake-card">
					{products.map(product => (
						<img src={product.image_path} alt={product.name} />
					))}
					</div> */}
				</div>
			</div>
		);
	};

