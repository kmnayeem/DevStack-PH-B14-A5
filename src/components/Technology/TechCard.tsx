import type { ITech } from "../../Types";

type TechCardProps = {
  tech: ITech;
  saved: ITech[];
  handleAddTech: (tech: ITech) => void;
};

const TechCard = ({ tech, handleAddTech, saved }: TechCardProps) => {
  const { icon, name, badge, description, category, difficulty, rating } = tech;

  const selected = saved.some((item) => item.id === tech.id);

  const badgeClass = selected
    ? "border-pink-300 bg-pink-100 text-pink-500"
    : "border-[#BAE6FD] bg-[#F0F9FF] text-[#0EA5E9]";

  const handleClick = () => {
    if (selected) {
      return;
    }

    handleAddTech(tech);
  };

  let buttonText = "+ Add to Stack";

  if (selected) {
    buttonText = "✓ Added to Stack";
  }

  return (
    <article
      className={`w-full rounded-lg border p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 md:rounded-2xl md:p-5 ${
        selected ? "border-pink-300 bg-pink-100" : "border-[#E8EDF3] bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={icon} alt={name} className="h-8 w-8 md:h-10 md:w-10" />
        </div>

        <div>
          <span
            className={`rounded-full border px-2 py-1 text-[9px] font-medium md:px-3 md:py-1 md:text-xs ${badgeClass}`}
          >
            {badge}
          </span>
        </div>
      </div>

      <div className="mt-3 md:mt-6">
        <h3 className="text-lg font-bold text-[#0F172A] md:text-2xl">{name}</h3>
      </div>

      <div className="mt-2 md:mt-3">
        <p className="text-xs leading-5 text-[#64748B] md:text-sm md:leading-normal">
          {description}
        </p>
      </div>

      <div className="mt-4 md:mt-6">
        <div>
          <hr className="border-[#EDF1F5]" />
        </div>

        <div className="mt-3 flex items-center justify-between md:mt-4">
          <div>
            <span className="rounded-md bg-[#F1F5F9] px-2 py-1.5 text-[9px] text-[#475569] md:px-3 md:py-2 md:text-xs">
              {category}
            </span>
          </div>

          <div>
            <span className="text-[9px] text-[#64748B] md:text-xs">
              {difficulty}
            </span>
          </div>

          <div>
            <span className="text-[9px] text-[#334155] md:text-xs">
              <span className="text-[#FFB51B]">★</span> {rating}
            </span>
          </div>
        </div>

        <div className="mt-3 md:mt-5">
          <button
            type="button"
            disabled={selected}
            onClick={handleClick}
            className="
              w-full
              cursor-pointer
              rounded-md
              bg-[#0A0F1D]
              py-2.5
              text-xs
              font-medium
              text-white
              hover:bg-[#1A2233]
              disabled:cursor-not-allowed
              disabled:bg-[#EEF2F6]
              disabled:text-[#94A3B8]
              md:rounded-lg
              md:py-3
              md:text-sm
            "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default TechCard;
