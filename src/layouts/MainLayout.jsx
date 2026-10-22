import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";

function MainLayout() {
  return (
    <>
      <a className="skip-link" href="#konten-utama">
        Lewati ke konten
      </a>
      <Navbar />
      <div id="konten-utama">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
