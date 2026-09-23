import { FiTrash2, FiX } from "react-icons/fi";
import type { ITech } from "../../Types";

type StackProps = {
  technologies: ITech[];
  handleRemoveTech: (id: string) => void;
  handleClearAll: () => void;
};

const Stack = ({
  technologies,
  handleClearAll,
  handleRemoveTech,
}: StackProps) => {
  return (
    <aside id="stack" className="mx-auto w-full max-w-[380px]">
      <div
        className="
          min-h-[200px]
          w-full
          rounded-[12px]
          border
          border-[#E8EEF5]
          bg-white
          px-[14px]
          pt-[16px]
          pb-[16px]
          shadow-sm
          md:min-h-[240px]
          md:rounded-[20px]
          md:px-[22px]
          md:pt-[24px]
          md:pb-[24px]
        "
      >
        <h2
          className="
            m-0
            text-[20px]
            font-bold
            text-[#0F172A]
            md:text-[24px]
          "
        >
          Your Stack
        </h2>

        <p
          className="
            mt-[8px]
            mb-0
            text-[12px]
            font-normal
            text-[#94A7C2]
            md:mt-[11px]
            md:text-[14px]
          "
        >
          {technologies.length === 0
            ? "No technologies selected yet."
            : `${technologies.length} ${
                technologies.length === 1 ? "technology" : "technologies"
              } selected.`}
        </p>

        {technologies.length === 0 ? (
          <div
            className="
              mt-[15px]
              flex
              h-[65px]
              w-full
              items-center
              justify-center
              rounded-[10px]
              border-2
              border-dashed
              border-[#DFE7F1]
              text-center
              md:mt-[20px]
              md:h-[78px]
              md:rounded-[15px]
            "
          >
            <span
              className="
                text-[12px]
                font-normal
                text-[#94A7C2]
                md:text-[14px]
              "
            >
              Your stack is empty.
            </span>
          </div>
        ) : (
          <>
            <div className="mt-[15px] grid gap-2 md:mt-[20px]">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="
                    flex
                    min-h-[50px]
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#E8EEF5]
                    bg-white
                    p-2
                    md:min-h-[58px]
                  "
                >
                  <img
                    className="h-7 w-7 md:h-8 md:w-8"
                    src={tech.icon}
                    alt={tech.name}
                  />

                  <div className="min-w-0">
                    <strong
                      className="
                        block
                        text-[10px]
                        font-bold
                        text-[#0F172A]
                        md:text-[11px]
                      "
                    >
                      {tech.name}
                    </strong>

                    <span className="text-[9px] text-[#64748B] md:text-[10px]">
                      {tech.category}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="
                      ml-auto
                      text-[#94A3B8]
                      transition-colors
                      hover:text-[#EF4444]
                    "
                    onClick={() => handleRemoveTech(tech.id)}
                    aria-label={`Remove ${tech.name}`}
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleClearAll}
              className="
                mt-3
                flex
                min-h-8
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                border-[#FECACA]
                text-[10px]
                font-bold
                text-[#EF4444]
                transition-colors
                hover:bg-[#FEF2F2]
                md:mt-4
                md:text-[11px]
              "
            >
              <FiTrash2 size={13} />
              Clear stack
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Stack;
