import { useEffect } from "react";
import "./styles/product.css";
import Pbanner from "./components/pbanner";
import { useParams } from "react-router";

export default function ProductPage({ Slider, ProductsData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { product } = useParams();
  let currentProduct = ProductsData[product];

  return (
    <div>
      <Pbanner Slider={Slider} />
      <h1 className="producth1">{currentProduct.name}</h1>
      <div className="productltcont">
        <p className="producttxtcont">
          <a href={currentProduct.link} target="_blank">
            <img src={currentProduct.img1} alt="" className="productimgcont" />
          </a>
            {currentProduct.description1}
        </p>
      </div>
      <div className="productrtcont">
        <p className="producttxtcont">
          <img src={currentProduct.img2} alt="" className="productimgcont" />
          {currentProduct.description2}
        </p>
      </div>
      <div className="productltcont">
        <p className="producttxtcont">
          <img src={currentProduct.img3} alt="" className="productimgcont" />
          {currentProduct.description3}
        </p>
      </div>
    </div>
  );
}
