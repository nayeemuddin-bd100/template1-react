import logo from "../../assets/imgs/logo.svg";


function Footer() {
    return (
      <div>
        <div className="block-44 py-5">
          <div className="container">
            <div className="row px-0 mx-0 justify-content-center align-items-center">
              <div className="block-44__logo-container">
                <img className="block-44__logo" src={logo} />
              </div>
              <ul className="block-44__list list-unstyled justify-content-center mb-0">
                <li className="block-44__li-1">
                  <a href="#" className="block-44__link">
                    Affiliate
                  </a>
                </li>
                <li className="block-44__li-1">
                  <a href="#" className="block-44__link">
                    Entreprise
                  </a>
                </li>
                <li className="block-44__li-1">
                  <a href="#" className="block-44__link">
                    Products
                  </a>
                </li>
                <li className="block-44__li-1">
                  <a href="#" className="block-44__link">
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="block-44__divider" />
          <div className="container">
            <div className="row flex-column flex-md-row px-2 justify-content-center">
              <div className="flex-grow-1">
                <ul className="block-44__extra-links d-flex list-unstyled p-0">
                  <li className="mx-2">
                    <a href="#" className="block-44__link m-0">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="block-44__link m-0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="block-44__link m-0">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="block-41__copyrights">
                &copy; 2021 ❤️ With Nayeem. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer