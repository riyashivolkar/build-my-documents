import React from "react";

const page = () => {
  return (
    <section className="p-5 text-gray-600 sm:p-8 body-font">
      <div className="container px-5 py-4 mx-auto bg-white sm:py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className=" sm:text-4xl text-xl font-medium title-font mb-4  text-[rgb(247,148,29)] ">
            Contact Us
          </h1>
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62332.94803706223!2d73.8133453!3d15.5940644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeae1e59582c9%3A0xabd8701669ec1f3c!2sSaldanha%20Towers%2C%20Duler-Marna-Siolim%20Rd%2C%20Dangui%20Colony%2C%20Mapusa%2C%20Goa%20403507!5e0!3m2!1sen!2sin!4v1695070669925!5m2!1sen!2sin"
              style={{ filter: "grayscale(0.8) contrast(1.2) opacity(0.6)" }}
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1 text-xs my-2">
                  B 403 4th Floor, Saldanha Business tower, Near court junction,
                  Mapusa, Bardez, Goa 403507
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-orange-400 text-xs leading-relaxed">
                  buildmydocuments@email.com
                </a>
                <h2 class="title-font uppercase font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  Business Hours
                </h2>
                <p class="leading-relaxed text-xs my-2">
                  Monday to Friday (09:30-17:30)
                </p>
              </div>
            </div>
          </div>

          {/* //Feedback-form */}
          {/* <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default page;
