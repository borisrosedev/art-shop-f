import BaseContainer from "../models/base-container.models";
import navItemComponent from "../ui/components/navbar/nav-item.components";

class HomeContainer extends BaseContainer {
  constructor(onNavigate: (h: string) => void) {
    super(onNavigate);
    this.createContextualNavbar();
  }

  createContextualNavbar() {
    const navbarUl = document.getElementById("app-header-navbar-list");

    const navbarDefaultLinks = [
      {
        href: "#contact-us",
        content: "Contact us",
        context: "home"
      },
      {
        href: "#about-us",
        content: "About us",
        context: "home"
      }
    ] as { context: "home"; href: string; content: string }[];

    navbarDefaultLinks.unshift(
      {
        href: "#login",
        content: "Login",
        context: "home"
      },
      {
        href: "#register",
        content: "Register",
        context: "home"
      }
    );

    navbarDefaultLinks.forEach((link) => {
      navbarUl.insertAdjacentHTML("beforeend", navItemComponent(link));
    });
  }
}

export default HomeContainer;
