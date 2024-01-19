import React, { useState }from "react";


function Pig({ hogsList }) {

    const [clickedPigs, setClickedPigs] = useState(new Array(hogsList.length).fill(false));

    function handleClick(index) {
        const newClickedPigs = [...clickedPigs];
        newClickedPigs[index] = !newClickedPigs[index];
        setClickedPigs(newClickedPigs);
      }

    return(
        <div className="ui eight wide column">
      {hogsList.map((hog, index) => (
        <div className="pigTile" key={hog.name} onClick={() => handleClick(index)}>
          <h1>{hog.name}</h1>
          <img src={hog.image} alt={hog.name} />
          {clickedPigs[index] 
            ? <ul>
                <li>{hog.specialty}</li>
                <li>{hog.weight}</li>
                <li>{hog.greased ? "Greased" : "Not Greased"}</li> 
                <li>{hog["highest medal achieved"]}</li>
            </ul> : ""}
        </div>
      ))}
    </div>
  );
}

export default Pig;



