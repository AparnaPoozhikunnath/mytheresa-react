import React from "react";
import "./styles/Card.scss";

const Card = (prop) => {
  return (
    <section>
      <div className="card">
        <img src={prop.imageUrl} />     
        { prop.label == undefined ? (
 <p>{prop.alt_label}</p>) :
 (<p>{prop.label}</p>)
        } 
        
      </div>

      </section>
  );
};

export default Card;