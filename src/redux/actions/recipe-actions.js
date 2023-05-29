import { toast } from "react-toastify";
import { recipe } from "../types";

export const fetchRecipes = () => {
	return async (dispatch) => {
		try {
			/* TODO: Appel à l'API ici */
			const response = [
				{
					image: "",
					title: "Test recette 1",
					author: "Florent MAMPRIN",
					rating: 3.5,
				},
				{
					image: "",
					title: "Test recette 2",
					author: "Tom Brazzat",
					rating: 2,
				},
			];

			dispatch({
				type: recipe.FETCH_RECIPES,
				payload: response,
			});
		} catch (ex) {
			console.log(ex);
			toast.error(
				"Une erreur est survenue. Impossible de récupérer la liste des recettes."
			);
		}
	};
};
