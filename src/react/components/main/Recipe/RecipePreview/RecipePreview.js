import { Button, Rating } from "semantic-ui-react";
import recipe from "../../../../../images/exemple1.png";
import { toast } from "react-toastify";

let RecipePreview = () => {
	return (
		<div className="recipe-view-container">
			<img id="recipe" src={recipe} alt="recipe" />
			<h2>Bruchetta italian snack</h2>
			<p>By Tom Brazzat</p>
			<Rating icon="star" defaultRating={2} maxRating={10} disabled />
			<Button>test</Button>
			<button className="ui button" onClick={() => ShowToast()}>
				test
			</button>
		</div>
	);
};

function ShowToast() {
	toast.error("test");
}

export default RecipePreview;
