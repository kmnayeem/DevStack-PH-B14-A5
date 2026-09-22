import BannerPicture from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between py-20">
        
        <div>
          <h1 className="text-5xl font-bold text-[#0F172A]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#F97316] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 w-[550px] text-lg text-[#475569]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-7 flex gap-3">
            <button
              className="cursor-pointer rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] px-4 py-3 text-sm font-semibold text-white hover:from-[#EA580C] hover:to-[#DB2777]"
            >
              Explore Technologies
            </button>

            <button
              className="cursor-pointer rounded-lg border border-gray-200 bg-white px-10 py-3 text-sm text-[#374151] hover:border-gray-300 hover:bg-gray-50 hover:text-[#111827]"
            >
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src={BannerPicture}
            alt="DevStack Banner Picture"
            className="w-[550px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
