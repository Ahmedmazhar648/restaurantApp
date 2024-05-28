import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-conta" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <span className="card-author subtle">{curElem.name}</span>
                    <h2>{curElem.name}</h2>
                    <span className="card-description subtle">
                      {curElem.description}{" "}
                    </span>
                    {/* <div className="card-read">Read</div> */}
                    <div>
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media"
                      />
                      <button className="card-order">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
