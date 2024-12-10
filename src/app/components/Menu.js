import Link from "next/link";
import menuData from "../utils/data/menuData";

const Menu = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 mx-auto bg-gray-200 rounded-t-lg py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          {menuData.map((item) =>
            item.path ? (
              <Link key={item.id} href={item.path} passHref>
                <div className="flex flex-col items-center justify-center p-2 transition-all transform bg-white border border-gray-200 rounded-lg shadow-xl cursor-pointer h-44 sm:h-56 sm:p-4 hover:bg-gradient-to-r hover:text-white hover:shadow-lg hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-3 text-indigo-500 bg-gray-100 rounded-full sm:w-24 sm:h-24">
                    {item.icon}
                  </div>
                  <h2 className="text-xs text-gray-900 sm:text-lg">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ) : (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center h-56 p-4 transition-all transform border border-gray-200 rounded-lg hover:bg-gray-100 hover:shadow-lg hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 mb-3 text-indigo-500 bg-gray-100 rounded-full">
                  {item.icon}
                </div>
                <h2 className="text-base font-bold text-gray-900 sm:text-lg">
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
