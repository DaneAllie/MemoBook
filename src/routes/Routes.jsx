import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllRouteList } from "./AllRoutesListed";

class Routing extends Component {
	render() {
		return (
			<Router>
				<Routes>
					{AllRouteList.map((value) => (
						<Route key={value.name} exact path={value.path} element={value.comp} />
					))}
				</Routes>
			</Router>
		);
	}
}

export default Routing;
