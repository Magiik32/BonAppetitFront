import { Button, Icon } from "semantic-ui-react";
import image from "../../../../images/exemple1.png";

const TrendingSlider = () => {
	return (
		<div
			className="trending-slider-container"
			style={{
				backgroundImage: `url(${image})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<p>En tendance</p>
			<h1>Le titre de la recette</h1>
			<p>Par Florent Mamprin</p>
			<div>
				<Button circular>
					<Icon name="search" />
					Consulter
				</Button>
				<Button circular icon="heart" />
			</div>
		</div>
	);
};

export default TrendingSlider;
