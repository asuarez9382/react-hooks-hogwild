import React from "react";
import Pig from "./Pig";


function PigList({ hogsList, setHogsList }) {

    //console.log(hogsList)

    return(
        <div className="ui grid container">
            <Pig hogsList={hogsList}/>
        </div>
    )
}

export default PigList;