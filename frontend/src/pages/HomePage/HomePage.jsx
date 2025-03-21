import React from "react";
import { TypeProducts } from "../../components/TypeProducts/TypeProducts";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProducts,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import image1 from "../../assets/images/image1.webp";
import image2 from "../../assets/images/image2.webp";
import image3 from "../../assets/images/image3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductServices";

const HomePage = () => {
  const arr = [
    "TV",
    "Laptop",
    "Phone",
    "Tablet",
    "Watch",
    "Camera",
    "Headphone",
  ];
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res: ", res);
    return res;
  };

  const { isPending, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
  });

  console.log("data: ", products);
  return (
    <>
      <div
        style={{
          width: "1270px",
          margin: " 0 auto",
        }}
      >
        <WrapperTypeProducts>
          {arr.map((item) => {
            return <TypeProducts name={item} key={item} />;
          })}
        </WrapperTypeProducts>
      </div>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <div
          id="container"
          style={{
            backgroundColor: "#efefef",
            height: "1000px",
            width: "1270px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <SliderComponent arrImages={[image1, image2, image3]} />
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  discount={product.discount}
                  selling={product.selling}
                />
              );
            })}
          </WrapperProducts>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11, 116, 229)",
                color: "rgb(11, 116, 229)",
                height: "38px",
                width: "240px",
                borderRadius: "4px",
                fontWeight: "500",
                fontSize: "16px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
