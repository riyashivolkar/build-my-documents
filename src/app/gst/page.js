import Image from "next/image";
import Link from "next/link";
import GstForm from "../components/gst/GstForm";

const Page = () => {
  const listItems = [
    {
      id: 1,
      text: (
        <>
          GST Application filing at{" "}
          <span className="text-gray-500 line-through">₹899</span>
          <strong> ₹599</strong>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          Simple process for{" "}
          <strong>new GST registration, application status tracking,</strong>{" "}
          and <strong> filing for clarifications</strong>
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Tailored GST services for{" "}
          <strong>citizens, eCommerce sellers,</strong> and{" "}
          <strong> government offices</strong>
        </>
      ),
    },
    {
      id: 4,
      text: (
        <>
          Simplify GST compliance:{" "}
          <strong>
            CA-assisted online document submission, GST filing, GSTIN
            registration
          </strong>
        </>
      ),
    },
  ];

  return (
    <div className="overflow-x-hidden text-gray-600 bg-repeat body-font animate-bg-scrolling-reverse">
      <div className="flex flex-wrap items-start px-5 py-5 sm:px-24">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 lg:flex-shrink-0">
          <div className="bg-white">
            {/* Breadcrumb */}
            <div className="py-2 space-x-2 text-sm font-semibold text-gray-700 title-font">
              <a className="underline" href="/">
                Home
              </a>
              <span>&gt;</span>
              <span className="text-gray-800">GST</span>
            </div>

            {/* Title */}
            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl title-font">
              GST Registration Online
            </h1>

            {/* List */}
            <ul className="mt-5 space-y-3 text-sm leading-relaxed sm:space-y-8 sm:text-base">
              {listItems.map((item) => (
                <li key={item.id} className="flex items-start">
                  <Image
                    src="/correct.svg"
                    alt="Check mark"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2 sm:w-6 sm:h-6"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GstForm - Right side for large devices */}
        <div className="flex flex-col w-full mt-10 rounded-lg lg:w-2/5 md:w-1/2 ">
          <GstForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
