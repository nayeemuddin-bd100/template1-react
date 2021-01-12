import profile2 from "../../assets/imgs/profile-2.png";


function Pricing() {
    return (
      <div>
        <div id="pricing" class="block-17 px-4 space-between-blocks">
          <div class="container">
            <div class="block-17__header col-lg-8 col-xl-7 mx-auto text-center px-0">
              <h1 class="block__title mb-3">PRICING</h1>
              <p class="block__paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div class="block-17__card row flex-column-reverse flex-lg-row justify-content-center">
              <div class="testimonial-card-3 text-center col-lg-6 px-0 d-flex align-items-center justify-content-center">
                <div class="px-4 px-lg-5">
                  <img class="person__avatar" src={profile2} />
                  <p class="testimonial-card-3__paragraph my-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div class="flex-grow-1 d-flex flex-column mb-3">
                    <span class="person__name">Ali Boukeroui</span>
                    <span class="person__info my-1">indiehackers.com</span>
                    <span class="person__rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <span class="testimonial-card-3__quote-symbol">
                  <i class="fas fa-quote-left"></i>
                </span>
              </div>
              <div class="cta-card col-lg-5 px-0">
                <div class="plan-card text-center">
                  <h6 class="plan-card__name mb-0">Free Shipping</h6>
                  <p class="discount mt-3 mb-0 d-flex align-items-center justify-content-center">
                    <span class="discount__old-price mx-2">$300</span>
                    <span class="discount__percentage mx-2">50% off</span>
                  </p>
                  <p class="plan-card__price my-2">$149</p>
                  <span class="plan-card__duration">
                    90 Days Money Back Guarenteed
                  </span>
                  <ul class="plan-features list-unstyled mt-5 mb-0">
                    <li class="plan-features__li">
                      <span class="plan-features__li-icon mx-1">
                        <svg
                          class="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span class="mx-3">The Watch</span>
                    </li>
                    <li class="plan-features__li">
                      <span class="plan-features__li-icon mx-1">
                        <svg
                          class="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span class="mx-3">+Bonus: Accessories</span>
                    </li>
                    <li class="plan-features__li">
                      <span class="plan-features__li-icon mx-1">
                        <svg
                          class="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span class="mx-3">Lifetime Mobile App</span>
                    </li>
                    <li class="mt-5">
                      <a href="#" class="d-block btn btn-primary px-5 mx-auto">
                        Buy Now
                      </a>
                      <small class="d-block mt-2 text-center">
                        208 Left. Discount ends after 2 weeks
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Pricing