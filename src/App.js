import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, ResultCard } from '@appbaseio/reactivesearch';

class App extends Component {

	render() {
		return (
			<ReactiveBase
        app="deliveries"
        url="http://eslog-dc1-nl0.prod.entertainment.dc1.nl.vpgrp.io:9200"
				// other components will go here.
        >
				<div>
					Hello ReactiveSearch!
				</div>
			</ReactiveBase>
		);
	}
}

export default App;