import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Technology from "./components/Technology/Technology";
import Stack from "./components/Technology/Stack";
import { Suspense, useState } from "react";
import type { ITech } from "./Types";
import { toast } from "react-toastify";

const fetchTechnologies = async (): Promise<ITech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

const App = () => {
  const [saved, setSaved] = useState<ITech[]>([]);

  const handleAddTech = (tech: ITech) => {
    setSaved((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemoveTech = (id: string) => {
    const findTech = saved.find((item) => item.id === id);

    setSaved((prev) => prev.filter((item) => item.id !== id));

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
    <div className="container mx-auto px-4 md:px-0">
      <Nav />

      <Banner />

      <main className="mb-16">
        <section>
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold text-[#0F172A] md:text-5xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="mt-2 text-sm text-[#64748B] md:text-base">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3">
              <Suspense
                fallback={
                  <div className="flex min-h-[400px] items-center justify-center">
                    <p className="text-lg text-[#64748B]">
                      Loading technologies...
                    </p>
                  </div>
                }
              >
                <Technology
                  handleAddTech={handleAddTech}
                  technologiesPromise={technologiesPromise}
                  saved={saved}
                />
              </Suspense>
            </div>

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
