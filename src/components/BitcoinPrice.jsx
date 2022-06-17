// Packages
import React, {useState, useEffect} from "react";
// Assets
import { ReactComponent as BitcoinLogo } from "../assets/svg/bitcoin.svg";
// CSS files
import "./componentStyle/BitcoinPrice.css";
// Custom Hook
import {useInterval} from "./customHooks/useInterval.jsx";

function BitcoinPrice(){
	// Initial state
	const [price, setPrice] = useState();

	// Component Update
	useInterval(() => {
		fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
				.then((response) => response.json())
				.then((data) => {
					setPrice(data.bitcoin.usd);
					console.log(data.bitcoin.usd);
				});
	}, 2000);

	// Return HTML code
	return(<>
		<div className="BitcoinPriceContainer">
			<BitcoinLogo className="BitcoinLogo" />
			<h2 className="BitcoinPrice">${price}</h2>
		</div>
	</>);
};

export default BitcoinPrice;



// Ignore the following codes, I used them when I was looking for a way to implement api's.


// --------- It works!
// class BitcoinPrice extends React.Component{
// 	componentDidMount(){
// 		let promise = client.simplePrice({ids:['bitcoin'],vs_currencies:['usd'],})
// 			.then(function(result){
// 				console.log(result.bitcoin.usd);
// 				let price = result.bitcoin.usd;
// 				console.log(price);
// 			});
// 	};

// 	render(){
// 		return(<>
// 			<h2>Hola</h2>
// 		</>);
// 	}
// };




// const div = document.querySelector("#app");
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// // sending request
// fetch(url).then((response)=>{  return response.json();  // converting byte data to json
// }).then(data=>{

//    const {title, body} = data;
//    // creating h1 and p elements
//    const h1 = document.createElement('h1');
//    const p = document.createElement('p');

//   // adding content
//   h1.textContent = title;
//   p.textContent = body;

//   // appending to div element
//   div.appendChild(h1);  div.appendChild(p);})





// import React, { useState, useEffect } from 'react'

// export default function UsersData() {
//   const [Price, fetchPrice] = useState([])

//   const getData = () => {
//     fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
//     // fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res)
//         fetchPrice(res)
//       })
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <>
//       <h2>React Fetch API Example</h2>
//       <ul>
//         {data.map((item, i) => {
//           return <li key={i}>{item.name}</li>
//         })}
//       </ul>
//     </>
//   )
// }





// import React from "react";
// import {CoinGeckoClient} from 'coingecko-api-v3';

// const client = new CoinGeckoClient({
// 	timeout: 10000,
// 	autoRetry: true,
// });

// async function BitPrice(){
// 	// let data = client.simplePrice({ids:['bitcoin'],vs_currencies:['usd'],});
// 	let data = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
// 	console.log(data);
// }

// export default BitPrice;