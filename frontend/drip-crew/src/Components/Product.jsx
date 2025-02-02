import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultProductImg from "../assets/productImage.jpg";
import { FaStar, FaHeart, FaShoppingBag, FaShare } from "react-icons/fa";
import { useShare } from "./ShareContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { setSharedProduct, setRecipientUser } = useShare(); // Destructure from context
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        console.log(response);
        console.log("in product.jsx", response.data);
        setProducts(response.data); // Set all products from the response
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  const handleShareClick = (product, path) => {
    setSharedProduct(product);

    setRecipientUser({
      _id: "66901f6ef9380451dfcfd13c",
      name: "Alice Johnson",
      avatar: "../../assets/add-friend-icon.svg",
      isBdayComing: false,
      __v: 0,
    });
    navigate(path);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <div className="rating">
              <span>{product.rating}</span>
              <FaStar />
              <span>| {product.reviews}</span>
            </div>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-pricing">
              <span className="current-price">Rs. {product.currentPrice}</span>
              <span className="original-price">
                Rs. {product.originalPrice}
              </span>
              <span className="discount">({product.discount})</span>
            </div>
          </div>
          <div className="hover-buttons">
            <button className="button">
              <FaHeart /> Wishlist
            </button>
            <button className="button">
              <FaShoppingBag /> Bag
            </button>
            <button
              onClick={() => handleShareClick(product, "/users")}
              className="button"
            >
              <FaShare /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
