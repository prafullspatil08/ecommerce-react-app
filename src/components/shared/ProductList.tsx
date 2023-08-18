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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:grid-cols-2 ">
            {products?.map((product: any) => {
              const { id, title, price, category, image } = product;
              return (
                <button
                  onClick={() => handleRoute(`/product/${id}`)}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                <p className="block relative h-48 my-[20px]">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </p>

                  <header className="p-[10px] text-left">
                    <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-800 dark:text-gray-300 truncate title-font text-lg font-medium">
                      {title}
                    </h2>
                  </header>
                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-md font-semibold">${price}</p>
                  </footer>
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
