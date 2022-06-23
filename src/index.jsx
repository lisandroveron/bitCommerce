// Packages
import React from "react";
import ReactDOM from "react-dom/client";
// Assets
import { ReactComponent as BitcoinLogo } from "./assets/svg/bitcoin.svg";
// Components
import BitcoinPrice from "./components/BitcoinPrice.jsx";
import MyWallet from "./components/MyWallet.jsx";
// CSS files
import "./css/normalize.css";
import "./css/grid.css";
import "./css/index.css";
import "./css/responsive.css";


// ---------- CODE ---------- //
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = <>
	<header>
		<div id="logo" className="logo">
			<BitcoinLogo className="logo__B" />
			<h1 className="logo__itCommerce">itCommerce</h1>
		</div>
	</header>
	<main>
		<div className="moneyBar">
			<BitcoinPrice />
			<MyWallet />
		</div>
	</main>
	<footer>Copyright © 2022 bitCommerce</footer>
</>;

root.render(App);