import "./componentStyle/Product.css";
// Assets
import rickgun from "../assets/img/rickgun.jpg";

function Product(){
	return(<>
		<div className="Product">
			<div className="img">
				<img src={rickgun} alt="Product." />
			</div>
			<p className="productName">Rick and Morty portal gun</p>
			<input class="buy" type="button" value="Buy" />
		</div>
	</>);
};

export default Product;