import React from "react";
import Link from "next/link";
import menuData from "../utils/data/menuData";

const Menu = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 mx-auto bg-white rounded-md py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {menuData.map((item) =>
            item.path ? (
              <Link key={item.id} href={item.path} passHref>
                <div className="flex flex-col items-center justify-center h-48 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-2 rounded-full">
                    {item.icon}
                  </div>
                  <h2 className="mb-1 text-base font-bold text-gray-900 title-font">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ) : (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center h-48 p-2 border border-gray-200 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-2 rounded-full">
                  {item.icon}
                </div>
                <h2 className="mb-1 text-base font-bold text-gray-900 title-font">
                  {item.title}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
