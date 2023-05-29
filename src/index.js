import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";

import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "./App.css";
import "./react/components/main/Footer/Footer.css";
import "./react/components/main/Header/Header.css";
import "./react/components/main/TrendingSlider/TrendingSlider.css";
import "./react/components/main/Recipe/RecipePreview/RecipePreview.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
	reducer: rootReducer,
});

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
