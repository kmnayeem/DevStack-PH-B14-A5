import { use } from "react";
import type { ITech } from "../../Types";
import TechCard from "./TechCard";

interface TechnologyProps {
  technologiesPromise: Promise<ITech[]>;
  handleAddTech: (tech: ITech) => void;
  saved: ITech[];
}

const Technology = ({
  technologiesPromise,
  handleAddTech,
  saved,
}: TechnologyProps) => {
  const allTechnologies = use(technologiesPromise);

  return (
    <div className="grid grid-cols-3 gap-5">
      {allTechnologies.length === 0 ? (
        <p>No technologies found</p>
      ) : (
        allTechnologies.map((singleTech) => (
          <TechCard
            key={singleTech.id}
            tech={singleTech}
            handleAddTech={handleAddTech}
            saved={saved}
          />
        ))
      )}
    </div>
  );
};

export default Technology;
