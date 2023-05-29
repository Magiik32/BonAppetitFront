import { combineReducers } from "redux";
import recipeReducers from "../reducers/recipe-reducers";

const appReducer = combineReducers({
	recipes: recipeReducers,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
