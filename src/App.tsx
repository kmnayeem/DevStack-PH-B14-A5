import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const productsProise = async()=> {
  const res = await fetch ("/data.json");
  const data = await res.json();
  return data;
};


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Footer />
    </>
  )
}

export default App
