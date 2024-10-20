const Working = () => {
  return (
    <section className="w-full py-16 bg-gray-100 sm:py-24">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 font-serif text-3xl leading-snug text-gray-800 sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-sm text-gray-600 sm:text-lg">
          We have simplified the process into three easy steps. Follow along to
          get your documents ready in no time!
        </p>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 rounded-lg hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 1</h3>
            <img
              src="/s1.png"
              alt="Step 1 Icon"
              className="object-contain w-64 h-64 mb-4"
            />
            <p className="text-gray-700 text-md">
              Choose the document service you need.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 rounded-lg hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 2</h3>
            <img
              src="/s2.png"
              alt="Step 2 Icon"
              className="object-contain w-64 h-64 mb-4"
            />
            <p className="text-gray-700 text-md">
              Get end-to-end assistance from our experts.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 rounded-lg hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 3</h3>
            <img
              src="/s3.png"
              alt="Step 3 Icon"
              className="object-contain w-64 h-64 mb-4"
            />
            <p className="text-gray-700 text-md">
              Your documents are ready. Sit back and relax!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
