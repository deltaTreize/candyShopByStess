const axios = require("axios");
const fs = require("fs");

// URL de base de l'API Open Food Facts
const baseUrl = "https://world.openfoodfacts.org/";

// Liste des catégories et marques à récupérer
const categories = ["candies"]; // Bonbons
const brands = ["Kinder"];

// Fonction pour récupérer les produits par catégorie
async function getProductsByCategory(category) {
    try {
        const response = await axios.get(`${baseUrl}category/${category}.json`);
        return response.data.products || [];
    } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${category}:`, error);
        return [];
    }
}

// Fonction pour récupérer les produits par marque
async function getProductsByBrand(brand) {
    try {
        const response = await axios.get(`${baseUrl}brand/${brand}.json`);
        return response.data.products || [];
    } catch (error) {
        console.error(`Erreur lors de la récupération de la marque ${brand}:`, error);
        return [];
    }
}

// Fonction principale pour générer le JSON
async function generateProductJson() {
    let products = [];

    // Récupérer les produits par catégorie
    for (const category of categories) {
        const categoryProducts = await getProductsByCategory(category);
        products = products.concat(categoryProducts);
    }

    // Récupérer les produits par marque
    for (const brand of brands) {
        const brandProducts = await getProductsByBrand(brand);
        products = products.concat(brandProducts);
    }

    // Filtrer les champs pour ne garder que ceux souhaités
    const filteredProducts = products.map((product, index) => ({
        id: index + 1,
        nom: product.product_name || "Nom non disponible",
        photo: product.image_url || "Image non disponible",
        categorie: product.categories || "Catégorie non disponible",
        marque: product.brands || "Marque non disponible",
        mots_cles: product.labels_tags || []
    }));

    // Sauvegarder dans un fichier JSON
    fs.writeFileSync("produits_personnalises.json", JSON.stringify({ produits: filteredProducts }, null, 4), "utf-8");
    console.log("Le fichier JSON personnalisé a été créé avec succès !");
}

// Exécuter la fonction
generateProductJson();
