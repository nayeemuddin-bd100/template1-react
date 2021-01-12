import logo from "../../assets/imgs/logo.svg";

function Nav() {
    return (
      <div>
        <nav className="hero-nav container px-4 px-lg-0 mx-auto">
          <ul className="nav w-100 list-unstyled align-items-center p-0">
            <li className="hero-nav__item">
              <img className="hero-nav__logo" src={logo} />
            </li>
            <li
              id="hero-menu"
              className="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu"
            >
              <ul className="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
                <li className="flex-grow-1">
                  <ul className="nav nav--lg-side list-unstyled align-items-center p-0">
                    <li className="hero-nav__item">
                      <a href="#contact-us" className="hero-nav__link">
                        Contact Us
                      </a>
                    </li>
                    <li className="hero-nav__item">
                      <a href="#faq" className="hero-nav__link">
                        FAQ
                      </a>
                    </li>
                    <li className="hero-nav__item">
                      <a href="#pricing" className="hero-nav__link">
                        Pricing
                      </a>
                    </li>
                    <li className="hero-nav__item">
                      <a href="#testimonials" className="hero-nav__link">
                        Testimonials
                      </a>
                    </li>
                    <li className="hero-nav__item">
                      <a href="#features" className="hero-nav__link">
                        Features
                      </a>
                    </li>
                    <li className="hero-nav__item">
                      <a href="#product" className="hero-nav__link">
                        Product
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button
                onClick="document.querySelector('#hero-menu').classNameList.toggle('ft-menu--js-show')"
                className="ft-menu__close-btn animated"
              >
                <svg
                  className="bi bi-x"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li className="d-lg-none flex-grow-1 d-flex flex-row-reverse hero-nav__item">
              <button
                onclick="document.querySelector('#hero-menu').classNameList.toggle('ft-menu--js-show')"
                className="text-center px-2"
              >
                <i className="fas fa-bars"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav