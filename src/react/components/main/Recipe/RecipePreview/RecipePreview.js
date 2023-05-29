import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../../../../redux/actions/recipe-actions";

class RecipePreview extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}

	render() {
		const { recipes } = this.props;

		console.log(recipes);

		if (!recipes || recipes.length === 0) {
			return <div>Chargement des recettes ...</div>;
		}

		return (
			<div>
				{recipes.map((recipe, index) => (
					<div key={index}>
						<h2>{recipe.title}</h2>
						<p>Author: {recipe.author}</p>
						<p>Rating: {recipe.rating}</p>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ recipes }) => ({
	recipes: recipes.datas,
});

export default connect(mapStateToProps, { fetchRecipes })(RecipePreview);
