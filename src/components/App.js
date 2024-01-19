import React, { useState } from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import Filter from "./Filter"
import Sort from "./Sort"


import hogs from "../porkers_data";



function App() {

	const [hogsList, setHogsList] = useState(hogs)
	const [category, setCategory] = useState("All")
	const [sortCategory, setSortCategory] = useState("")

	

	function handleChange(e) {
		setCategory(e.target.value)

		if(e.target.value == "All") {
			setHogsList(hogs)
		}
		else {
			let hogsList = hogs
			let updatedHogsList = hogsList.filter(hog=>{
				if(e.target.value == "Greased") {
					return hog.greased == true
				}
				else if (e.target.value == "Not Greased") {
					return hog.greased != true
				}
				else return true
			})
			console.log(updatedHogsList)
			setHogsList(updatedHogsList)
		}

	}

	function handleSortChange(e) {
		console.log(e.target.value)

		if(e.target.value == "Weight") {
			let hogsList = hogs
			const sortedList = hogsList.slice().sort((a, b) => b.weight - a.weight);
			setHogsList(sortedList)
			setSortCategory(e.target.value)
		}
		if(e.target.value == "Name") {
			let hogsList = hogs
			const sortedListByName = hogsList.slice().sort((a, b) => a.name.localeCompare(b.name));
			setHogsList(sortedListByName)
			setSortCategory(e.target.value)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Sort 
				hogsList={hogsList} 
				setHogsList={setHogsList}
				sortCategory={sortCategory}
				setSortCategory={setSortCategory}
				onSortChange={handleSortChange}
			/>
			<Filter 
				hogsList={hogsList} 
				setHogsList={setHogsList}
				category={category}
				setCategory={setCategory}
				onCategoryChange={handleChange}
			/>
			<PigList 
				hogsList={hogsList}  
				setHogsList={setHogsList}
			/>
			
		</div>
	);
}

export default App;
