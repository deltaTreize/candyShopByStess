import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/homePage/homePage";
import { Box } from "./pages/box/box";
import { Cake } from "./pages/cake/cake";
import { Cones } from "./pages/cones/cones";
import { Goblets } from "./pages/goblets/goblets";
import { Brochettes } from "./pages/brochettes/brochettes";
import { SignIn } from "./pages/signIn/signIn";


function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/gateaux" element={<Cake/>} />
					<Route path="/boites" element={<Box/>} />
					<Route path="/cones" element={<Cones/>} />
					<Route path="/goblets" element={<Goblets/>} />
					<Route path="/brochettes" element={<Brochettes/>} />
					<Route path="/signIn" element={<SignIn/>} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
