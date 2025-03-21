import { useEffect } from "react";
import "./styles/product.css";
import Pbanner from "./components/pbanner";
import { useParams } from "react-router";

export default function ProductPage({ Slider, ProductsData }) {
  const { product } = useParams();
  let currentProduct = ProductsData[product];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div>
      <Pbanner Slider={Slider} />
      <h1 className="producth1">{currentProduct.name}</h1>
      <div className="productltcont">
        <p className="producttxtcont">
          <a href={currentProduct.link} target="_blank">
            <img loading="lazy" src={currentProduct.img1} alt="" className="productimg" />
          </a>
          {currentProduct.description1}
        </p>
      </div>
      <div className="productrtcont">
        <p className="producttxtcont">
          <img loading="lazy" src={currentProduct.img2} alt="" className="productimg" />
          {currentProduct.description2}
        </p>
      </div>
      <div className="productltcont">
        <p className="producttxtcont">
          <img loading="lazy" src={currentProduct.img3} alt="" className="productimg" />
          {currentProduct.description3}
        </p>
      </div>
    </div>
  );
}
