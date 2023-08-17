import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const products = useSelector((state: any) => state?.product?.all_products);
  const handleRoute = (path: string) => {
    navigate(path);
  };
  if (products?.length === 0) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
            Loading............
          </div>
        </div>
      </section>
    );
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products?.map((product: any) => {
              const { id, title, price, category, image } = product;
              return (
                <button
                  key={product?.id}
                  onClick={() => handleRoute(`/product/${id}`)}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full  shadow-lg cursor-pointer rounded"
                >
                  <p className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </p>
                  <div className="mt-4">
                    <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-800 dark:text-gray-300 truncate title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1 text-md font-semibold">${price}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
