import React, { useState } from "react";
import './OurWorkStyles.css';

const products = [
  {
    name: "Apple",
    imgSrc: "https://i.imgur.com/svsEwoG.jpg",
    hoverImgSrc: "https://imgur.com/bAg5OHD.jpg" 
  },
  {
    name: "Coca-Cola",
    imgSrc: "https://i.imgur.com/PQpkasO.jpg",
    hoverImgSrc: "https://imgur.com/GQndGjc.jpg" 
  },
  {
    name: "Nike",
    imgSrc: "https://i.imgur.com/SAoU42Y.jpg",
    hoverImgSrc: "https://imgur.com/btKqxn2.jpg" 
  }
];

const OurProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div>
      <div className="allProjects">
        {products.map((product, index) => (
          <div
            key={index}
            className="productDescription"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {hoveredProduct === index ? (
              <img src={product.hoverImgSrc} alt={`Project of ${product.name}`} />
            ) : (
              <img src={product.imgSrc} alt={`Project of ${product.name}`} />
            )}
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

