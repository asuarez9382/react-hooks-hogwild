import React from "react";


function Sort({ hogsList, setHogsList, sortCategory, setSortCategory, onSortChange }) {


    return(
        <div className="sortWrapper">
            <label htmlFor="sort">Sort:</label>
            <select id="sortCategories" value={sortCategory} onChange={onSortChange}>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )
}

export default Sort;