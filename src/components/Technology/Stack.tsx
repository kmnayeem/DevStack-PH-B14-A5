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
    <aside id="stack" className="w-full">
      <div className="flex flex-col gap-5 rounded-lg border border-[#0EA5E9] bg-[#F8FCFF] p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
              Your stack
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A]">
              Technology stack
            </h2>

            <p className="mt-1 text-xs text-[#64748B]">
              {technologies.length}{" "}
              {technologies.length === 1
                ? "technology"
                : "technologies"}{" "}
              selected
            </p>
          </div>

          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#E0F2FE] text-xs font-bold text-[#0EA5E9]">
            {technologies.length}
          </span>
        </div>

        {technologies.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-dashed border-[#BAE6FD] text-xl text-[#0EA5E9]">
              +
            </div>

            <p className="mt-4 text-sm font-bold text-[#0F172A]">
              Your stack is empty
            </p>

            <p className="mt-2 text-xs leading-5 text-[#64748B]">
              Select a technology and it will appear here.
            </p>
          </div>
        ) : (
          <div className="my-7 grid gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg bg-white p-3"
              >
                <img
                  className="h-12 w-12 object-contain"
                  src={tech.icon}
                  alt=""
                />

                <div className="min-w-0">
                  <strong className="block truncate text-xs font-bold text-[#0F172A]">
                    {tech.name}
                  </strong>

                  <span className="text-xs text-[#64748B]">
                    {tech.category}
                  </span>
                </div>

                <button
                  type="button"
                  className="ml-auto text-[#94A3B8] hover:text-[#EF4444]"
                  onClick={() => handleRemoveTech(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          disabled={technologies.length === 0}
          onClick={handleClearAll}
          className="flex min-h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#FECACA] text-xs font-bold text-[#EF4444] hover:bg-[#FEF2F2] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiTrash2 />
          Clear stack
        </button>
      </div>
    </aside>
  );
};

export default Stack;
