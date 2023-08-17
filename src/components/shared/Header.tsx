import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill, BsNintendoSwitch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Badge } from "@material-tailwind/react";
const Header = (props: any) => {
  const navigate = useNavigate();
  const carts = useSelector((state: any) => state?.cart?.cartItems);
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const handleRoute = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <header className="text-gray-600  body-font shadow-lg dark:bg-night-500 dark:text-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigations.map((navigation: any) => {
              return (
                <button
                  key={navigation.name}
                  className="mr-5 hover:text-gray-900 hover:dark:text-gray-100"
                  onClick={() => handleRoute(navigation?.path)}
                >
                  {navigation?.name}
                </button>
              );
            })}
          </nav>
          <p className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-800 dark:text-gray-300 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 dark:text-gray-800 bg-primaryy-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">E-commerce</span>
          </p>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button
              onClick={() => handleRoute("/add-product")}
              className="text-white bg-primaryy-500 border-0 py-2 px-6 focus:outline-none hover:bg-primaryy-700 rounded mr-2"
            >
              Add Product
            </button>
            <BsNintendoSwitch
              onClick={props.setDarkMode}
              size={30}
              className="cursor-pointer text-primaryy-500 mt-[5px] mr-2"
            />
            <button onClick={() => handleRoute("/cart")} className="flex">
              <Badge content={carts?.length}>
                <BsFillCartFill
                  size={30}
                  className="text-primaryy-500 mt-[5px]"
                />
              </Badge>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
