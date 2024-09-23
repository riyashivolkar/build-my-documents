import React from "react";

const Page = () => {
  return (
    <section className="p-8 text-gray-600 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="mb-4 text-4xl font-medium text-[rgb(247,148,29)] title-font">
            About Us
          </h1>
          <p className="text-xl ">
            Welcome to Build My Documentsyour trusted partner for hassle-free
            document solutions!
          </p>
          <p className="text-xl ">
            At Build My Documents, we understand the challenges involved in
            securing essential documents such as passports, senior citizen
            cards. Our mission is to simplify these processes, ensuring a smooth
            and efficient experience for you.
          </p>
          <br />
          <p className="text-xl ">
            <strong>Why Choose Build My Documents?</strong>
          </p>
          <br />
          <ul className="pl-5 text-xl list-none list-inside">
            <li>
              <strong>Expert Guidance:</strong> Our team consists of
              knowledgeable professionals skilled in document processing. We
              provide tailored advice to help you navigate the application
              process with ease.
            </li>
            <br />
            <li>
              <strong>Unmatched Efficiency:</strong> We value your time. At
              Build My Documents, we offer prompt and efficient services,
              working diligently to expedite your document processing and save
              you time and effort.
            </li>
            <br />
            <li>
              <strong>Comprehensive Solutions:</strong> From PAN cards and
              passports to visas and insurance policies, our extensive range of
              services covers all your document-related needs in one place.
            </li>
            <br />
            <li>
              <strong>CSC Certified:</strong> Build My Documents is registered
              and approved by the Common Service Center (CSC) – e-Governance
              Services India Limited, Government of India.
              {/* Our CSC ID:
              132254620016 attests to our reliability and trustworthiness. */}
            </li>
            <br />
            <li>
              <strong>Customer-Focused Service:</strong> Your satisfaction is
              our top priority. We take a customer-centric approach, customizing
              our services to meet your specific needs. Our dedicated customer
              support team is always available to assist you.
            </li>
            <br />
          </ul>

          <p className="text-xl ">
            Choose Build My Documents for a hassle-free and efficient experience
            in obtaining your essential documents. Let us be your trusted
            partner on your journey to a document-ready future!
          </p>
          <br />
          <p className="text-3xl text-[rgb(247,148,29)] ">
            <strong>Mission</strong>
          </p>
          <br />
          <p className="text-xl ">
            Our mission is to empower individuals by providing seamless and
            expedited services for document procurement. We strive to eliminate
            the stress and confusion often associated with government paperwork,
            allowing you to focus on what matters most.
          </p>
          <br />
          <p className="text-3xl text-[rgb(247,148,29)] ">
            <strong>Vision</strong>
          </p>
          <br />
          <p className="text-xl ">
            To create a better everyday life for many people. Our business idea
            supports this vision by offering a wide range of document services
            at prices so low that as many people as possible will be able to
            afford them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
