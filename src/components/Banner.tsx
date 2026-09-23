import BannerPicture from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-between px-4 pt-20 pb-10 md:flex-row md:px-0 md:py-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold leading-tight text-[#0F172A] md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#F97316] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 w-full max-w-[550px] text-base leading-7 text-[#475569] md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex w-full gap-3 sm:w-auto">
            <button className="flex-1 cursor-pointer rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] px-4 py-3 text-sm font-semibold text-white hover:from-[#EA580C] hover:to-[#DB2777] sm:flex-none">
              Explore Technologies
            </button>

            <button className="flex-1 cursor-pointer rounded-lg border border-gray-200 bg-white px-10 py-3 text-sm text-[#374151] hover:border-gray-300 hover:bg-gray-50 hover:text-[#111827] sm:flex-none">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:mt-0">
          <img
            src={BannerPicture}
            alt="DevStack Banner Picture"
            className="w-[330px] sm:w-[400px] md:w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
