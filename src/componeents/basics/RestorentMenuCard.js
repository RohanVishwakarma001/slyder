import React from "react";

const RestorentMenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curEle) => {
          const { id, name, categry, image, description } = curEle;
          return (
            <>
              <div className="card-container" key={curEle.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{curEle.name}</span>
                    <h2 className="card-title">{curEle.name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        ;
      </section>
    </>
  );
};

export default RestorentMenuCard;
