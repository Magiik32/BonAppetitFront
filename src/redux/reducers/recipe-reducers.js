import { recipe } from "../types";

const initialState = {
	datas: [],
};

const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case recipe.FETCH_RECIPES:
			//console.log(action.payload);
			return {
				...state,
				datas: action.payload,
			};
		default:
			return state;
	}
};

export default recipesReducer;
