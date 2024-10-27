import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/homePage/homePage";
import { Box } from "./pages/box/box";
import { Cake } from "./pages/cake/cake";


function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/gateaux" element={<Cake/>} />
					<Route path="/boites" element={<Box/>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
