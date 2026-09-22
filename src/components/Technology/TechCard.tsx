import type { ITech } from "../../Types";

type TechCardProps = {
  tech: ITech;
  saved: ITech[];
  handleAddTech: (tech: ITech) => void;
};

const TechCard = ({ tech, handleAddTech, saved }: TechCardProps) => {
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

  const categorySelected = saved.some(
    (item) => item.category === tech.category,
  );

  const badgeClass =
    "border-[#0EA5E9] bg-[#0EA5E9]/10 text-[#0EA5E9]";

  const handleClick = () => {
    if (selected || categorySelected) {
      return;
    }

    handleAddTech(tech);
  };

  let buttonText = "+ Add to Stack";

  if (selected) {
    buttonText = "✓ Added to Stack";
  } else if (categorySelected) {
    buttonText = "Category Selected";
  }

  return (
    <article
      className='flex min-h-[177px] w-full flex-col rounded-[11px] border border-[#E8EDF3] bg-white px-3 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
    >
      <div className='flex items-start justify-between'>
        <img
          src={icon}
          alt={name}
          className='h-7 w-7 object-contain'
        />

        <span
          className={`rounded-full border px-2 py-1 text-[8px] font-medium ${badgeClass}`}
        >
          {badge}
        </span>
      </div>

      <h3 className='mt-3 text-sm font-bold text-[#101828]'>{name}</h3>

      <p className='mt-2 line-clamp-3 min-h-[42px] text-[9px] leading-[1.45] text-[#62748F]'>
        {description}
      </p>

      <hr className='mt-auto border-[#EDF1F5]' />

      <div className='mt-2 flex items-center justify-between text-[8px] text-[#62748F]'>
        <span className='rounded bg-[#F4F6F8] px-2 py-1'>
          {category}
        </span>

        <span>{difficulty}</span>

        <span className='text-[#344054]'>
          <span className='text-[#FFB51B]'>★</span> {rating}
        </span>
      </div>

      <button
        type='button'
        disabled={selected || categorySelected}
        onClick={handleClick}
        className='mt-2 min-h-7 w-full rounded-[5px] bg-[#080D1C] text-[8px] font-medium text-white transition-colors hover:bg-[#111827] disabled:cursor-not-allowed disabled:bg-[#EEF2F6] disabled:text-[#94A3B8]'
      >
        {buttonText}
      </button>
    </article>
  );
};

export default TechCard;
