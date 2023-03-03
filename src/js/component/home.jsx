import React from "react";

import Message from './Message.jsx';
import ResetButton from './ResetButton.jsx';
import Tile from './Tile.jsx';

//create your first component
const Home = () => {
	constructor() {
		super();
		this.state = {
			gameBoard: [
				'', '', '',
				'', '', '',
				'', '', ''
			]
		}
	}

	return (
		<div className="container">
			<div className="menu">
				<h1>Tic-Tac-Toe</h1>
				<Message />
				<ResetButton/>
			</div>
			{this.state.gameBoard.map(function(value, i){
				<Tile />
			})}


		</div>
	);
};

export default Home;
