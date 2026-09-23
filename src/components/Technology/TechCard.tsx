import type { ITech } from "../../Types";

type TechCardProps = {
  tech: ITech;
  saved: ITech[];
  handleAddTech: (tech: ITech) => void;
};

const TechCard = ({
  tech,
  handleAddTech,
  saved,
}: TechCardProps) => {
  const {
    icon,
    name,
    badge,
    description,
    category,
    difficulty,
    rating,
  } = tech;

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
      className={`w-full rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-pink-300 bg-pink-100"
          : "border-[#E8EDF3] bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={icon}
            alt={name}
            className="h-10 w-10"
          />
        </div>

        <div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeClass}`}
          >
            {badge}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-[#0F172A]">
          {name}
        </h3>
      </div>

      <div className="mt-3">
        <p className="text-sm text-[#64748B]">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <div>
          <hr className="border-[#EDF1F5]" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="rounded-md bg-[#F1F5F9] px-3 py-2 text-xs text-[#475569]">
              {category}
            </span>
          </div>

          <div>
            <span className="text-xs text-[#64748B]">
              {difficulty}
            </span>
          </div>

          <div>
            <span className="text-xs text-[#334155]">
              <span className="text-[#FFB51B]">★</span>{" "}
              {rating}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="button"
            disabled={selected}
            onClick={handleClick}
            className="
              w-full
              cursor-pointer
              rounded-lg
              bg-[#0A0F1D]
              py-3
              text-sm
              font-medium
              text-white
              hover:bg-[#1A2233]
              disabled:cursor-not-allowed
              disabled:bg-[#EEF2F6]
              disabled:text-[#94A3B8]
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
