import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, ResultCard } from '@appbaseio/reactivesearch';

class App extends Component {
	render() {
		return (
				<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
					<CategorySearch
						componentId="searchbox"
						dataField="name"
						categoryField="brand.raw" // use "brand.keyword" for newly cloned datasets
						placeholder="Search for cars"
					/>
					<SingleRange
						componentId="ratingsfilter"
						title="Filter by ratings"
						dataField="rating"
						data={[
							{"start": "4", "end": "5", "label": "4 stars and up"},
							{"start": "3", "end": "5", "label": "3 stars and up"},
							{"start": "2", "end": "5", "label": "2 stars and up"},
							{"start": "1", "end": "5", "label": "see all ratings"},
						]}
						defaultSelected="4 stars and up"
					/>
					<ResultCard
						componentId="result"
						title="Results"
						dataField="name"
						from={0}
						size={5}
						pagination={true}
						react={{
							and: ["searchbox", "ratingsfilter"]
						}}
						onData={(res) => {
							return {
								image: "https://bit.do/demoimg",
								title: res.name,
								description: res.brand + " " + "★".repeat(res.rating)
							}
						}}
					/>
				</ReactiveBase>
		);
	}
}

export default App;