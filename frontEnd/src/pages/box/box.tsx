import React from "react";
import products from "../../produits_personnalises.json";
import "./box.scss";

export function Box() {
  return (
    <div className="box">
      <div className="box-container">
        <div className="box-content">
          <ul>
            {products.produits.map((product, index) => (
              <li key={index}>
                <h2>{product.nom}</h2>
                <img src={product.photo} alt={product.nom} />
                <p>Catégorie: {product.categorie}</p>
                <p>Marque: {product.marque}</p>
                <p>Mots-clés: {product.mots_cles.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
