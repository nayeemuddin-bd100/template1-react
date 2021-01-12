import logo from "../../assets/imgs/logo.svg";


function Footer() {
    return (
      <div>
        <div class="block-44 py-5">
          <div class="container">
            <div class="row px-0 mx-0 justify-content-center align-items-center">
              <div class="block-44__logo-container">
                <img class="block-44__logo" src={logo} />
              </div>
              <ul class="block-44__list list-unstyled justify-content-center mb-0">
                <li class="block-44__li-1">
                  <a href="#" class="block-44__link">
                    Affiliate
                  </a>
                </li>
                <li class="block-44__li-1">
                  <a href="#" class="block-44__link">
                    Entreprise
                  </a>
                </li>
                <li class="block-44__li-1">
                  <a href="#" class="block-44__link">
                    Products
                  </a>
                </li>
                <li class="block-44__li-1">
                  <a href="#" class="block-44__link">
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="block-44__divider" />
          <div class="container">
            <div class="row flex-column flex-md-row px-2 justify-content-center">
              <div class="flex-grow-1">
                <ul class="block-44__extra-links d-flex list-unstyled p-0">
                  <li class="mx-2">
                    <a href="#" class="block-44__link m-0">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#" class="block-44__link m-0">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#" class="block-44__link m-0">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p class="block-41__copyrights">
                &copy; 2021 ❤️ With Nayeem. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer