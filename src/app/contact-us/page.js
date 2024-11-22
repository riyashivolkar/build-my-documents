import React from "react";

const page = () => {
  return (
    <section className="p-5 text-gray-600 sm:p-8 body-font">
      <div className="container px-5 py-4 mx-auto bg-white sm:py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-[rgb(247,148,29)]">
            Contact Us
          </h1>
          <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg w-full h-[600px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62332.94803706223!2d73.8133453!3d15.5940644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeae1e59582c9%3A0xabd8701669ec1f3c!2sSaldanha%20Towers%2C%20Duler-Marna-Siolim%20Rd%2C%20Dangui%20Colony%2C%20Mapusa%2C%20Goa%20403507!5e0!3m2!1sen!2sin!4v1695070669925!5m2!1sen!2sin"
              style={{ filter: "grayscale(0.8) contrast(1.2) opacity(0.6)" }}
            ></iframe>
            <div className="relative flex flex-col flex-wrap py-4 bg-white rounded shadow-md sm:flex-row sm:py-6 sm:space-x-6">
              <div className="w-full px-4 py-2 sm:py-0 sm:w-auto sm:flex-1">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  ADDRESS
                </h2>
                <p className="py-1 mt-1 text-xs">
                  B 403 4th Floor, Saldanha Business tower, Near court junction,
                  Mapusa, Bardez, Goa 403507
                </p>
              </div>
              <div className="w-full px-4 py-2 sm:py-0 sm:w-auto sm:flex-1">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  Phone
                </h2>
                <p className="py-1 text-xs leading-relaxed">+91 8263079329 </p>

                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 uppercase title-font">
                  Business Hours
                </h2>
                <p className="py-1 text-xs leading-relaxed">
                  Monday to Friday (09:30-17:30)
                </p>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 uppercase title-font">
                  EMAIL
                </h2>
                <a className="text-xs leading-relaxed text-orange-400">
                  buildmydocuments@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Feedback-form */}
          {/* 
            Uncomment if you want the feedback form here
          */}
        </div>
      </div>
    </section>
  );
};

export default page;
