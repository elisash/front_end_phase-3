import React, { useState } from "react";


function FilterBtns({ setFilterValue }) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="filter-buttons">
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='all' >All</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value="goalie">Goalie</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='attackers'>Attacker</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='mid-field'>Mid-Field</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='defender'>Defender</button>
    </div>
  );
}

export default FilterBtns;