import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Game() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />

				<div className='container'>
					<div className='about'>
						<h2>Game Preview</h2>
						Will be Updated Soon!
						<br></br>
					</div>
				</div><br></br>
			</div>
			<Footer />
		</div>
	);
}

export default Game;
