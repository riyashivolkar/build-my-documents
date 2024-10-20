const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen font-sans bg-orange-500">
      <div className="relative text-center">
        <p className="text-2xl text-white sm:text-3xl">Please wait</p>
        <div className="relative w-10 h-2 mt-4">
          <div className="absolute h-2 overflow-hidden w-60">
            <span className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-wait1"></span>
            <span className="absolute w-2 h-2 bg-green-300 rounded-full animate-wait2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
