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
          min-h-[240px]
          w-full
          rounded-[20px]
          border
          border-[#E8EEF5]
          bg-white
          px-[22px]
          pt-[24px]
          pb-[24px]
          shadow-sm
        "
      >
        <h2
          className="
            m-0
            text-[24px]
            font-bold
            text-[#0F172A]
          "
        >
          Your Stack
        </h2>

        <p
          className="
            mt-[11px]
            mb-0
            text-[14px]
            font-normal
            text-[#94A7C2]
          "
        >
          {technologies.length === 0
            ? "No technologies selected yet."
            : `${technologies.length} ${
                technologies.length === 1
                  ? "technology"
                  : "technologies"
              } selected.`}
        </p>

        {technologies.length === 0 ? (
          <div
            className="
              mt-[20px]
              flex
              h-[78px]
              w-full
              items-center
              justify-center
              rounded-[15px]
              border-2
              border-dashed
              border-[#DFE7F1]
              text-center
            "
          >
            <span
              className="
                text-[14px]
                font-normal
                text-[#94A7C2]
              "
            >
              Your stack is empty.
            </span>
          </div>
        ) : (
          <>
            <div className="mt-[20px] grid gap-2">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#E8EEF5]
                    bg-white
                    p-2
                  "
                >
                  <img
                    className="h-8 w-8"
                    src={tech.icon}
                    alt={tech.name}
                  />

                  <div className="min-w-0">
                    <strong
                      className="
                        block
                        text-[11px]
                        font-bold
                        text-[#0F172A]
                      "
                    >
                      {tech.name}
                    </strong>

                    <span className="text-[10px] text-[#64748B]">
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
                mt-4
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
                text-[11px]
                font-bold
                text-[#EF4444]
                transition-colors
                hover:bg-[#FEF2F2]
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

