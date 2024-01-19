import React from "react";

function Filter({ hogsList, setHogsList, category, setCategory, onCategoryChange }) {


    return(
        <div className="filterWrapper">
            <label htmlFor="category">Category:</label>
            <select id="pigCategories" value={category} onChange={onCategoryChange}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;