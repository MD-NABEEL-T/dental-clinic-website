import { useEffect } from "react";
import "./style.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Herosection from "./component/Herosection";
import Servicesection from "./component/Servicesection"; 
import Aboutsection from "./component/Aboutsection";
import Doctorsection from "./component/Doctorsection";
import CTAsection from "./component/CTAsection";
import Blogsection from "./component/Blogsection";
function App() {
  useEffect(() => {
    // Helper function
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    };

    // Navbar toggle
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");

    const toggleNav = function () {
      navbar.classList.toggle("active");
      navbarToggler.classList.toggle("active");
    };

    addEventOnElem(navbarToggler, "click", toggleNav);

    const closeNav = function () {
      navbar.classList.remove("active");
      navbarToggler.classList.remove("active");
    };

    addEventOnElem(navbarLinks, "click", closeNav);

    // Header active
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const onScroll = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
    <Header /> 
    <main>
      <article>
        <Herosection />
        <Servicesection/>
        <Aboutsection />
        <Doctorsection />
        <CTAsection />
        <Blogsection />
      </article>
    </main>
    <Footer/>
    </>
  );
}

export default App;