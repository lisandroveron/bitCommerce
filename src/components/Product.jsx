// CSS files
import "./componentStyle/Product.css";
// Assets
// import rickgun from "../assets/img/rickgun.jpg";

function Product(props){
	return(<>
		<div className="Product">
			<div className="img">
				<img src={props.imgsrc} alt="Product." />
			</div>
			<p className="productName">{props.productName}</p>
			<div className="buy">
				<input className="buyButton" type="button" value="Buy" />
				<div className="prices">
					<p className="prices__bitcoinPrice"><span>&#x0e3f;</span>0.1634</p>
					<p className="prices__dollarPrice">$12.15</p>
				</div>
			</div>
		</div>
	</>);
};

export default Product;