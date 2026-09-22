import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Technology from "./components/Technology/Technology";
import Stack from "./components/Technology/Stack";
import { Suspense, useState } from "react";
import type { ITech } from "./Types";
import { toast } from "react-toastify";

const fetchTechnologies = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

const App = () => {
  const [saved, setSaved] = useState<ITech[]>([]);
  const handleAddTech = (tech: ITech) => {
    const existingTech = saved.find((item) => item.category === tech.category);
    if (existingTech) {
      toast.error(
        `${existingTech.name} is already selected from this category`,
      );
      return;
    }
    setSaved([...saved, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemoveTech = (id: string) => {
    const findTech = saved.find((item) => item.id === id);
    const updatedList = saved.filter((item) => item.id !== id);
    setSaved(updatedList);
    if (findTech) {
      toast.error(`${findTech.name} removed from your stack`);
    }
  };

  const handleClearAll = () => {
    if (!saved.length) return;
    setSaved([]);
    toast.error("Your stack is cleared.");
  };

  return (
    <div>
      <Nav />
      <Banner />
      <main>
        <section className="container mx-auto my-10">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-[#0F172A]">
              Explore the{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="mt-2 text-[#64748B]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={<div>loading...</div>}>
              <Technology
                handleAddTech={handleAddTech}
                technologiesPromise={technologiesPromise}
                saved={saved}
              />
            </Suspense>
            <Stack
              technologies={saved}
              handleClearAll={handleClearAll}
              handleRemoveTech={handleRemoveTech}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
