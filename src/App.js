import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      {/* pass all componen inside the context */}
      <Header />
      <main className="lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
