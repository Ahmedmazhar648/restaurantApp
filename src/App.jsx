import React, { useState } from "react";
import "./App.css";
import menu from "./data.json";
import MenuCard from "./menuCard.jsx";

const App = () => {
  const [menuData, setmenuData] = useState(menu);

  const filterItem = (category) => {
    const updatedlist = menu.filter((curElem) => {
      return curElem.category === category;
    });

    setmenuData(updatedlist);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group-items"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group-items"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group-items"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group-items" onClick={() => setmenuData(menu)}>
            All
          </button>
        </div>
      </nav>

      <MenuCard menuData={menuData} />
    </>
  );
};

export default App;
