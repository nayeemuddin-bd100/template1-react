
function Contact() {
    return (
      <div>
        <div
          id="contact-us"
          class="block-28 space-between-blocks border-top border-bottom"
        >
          <div class="container">
            <div class="row h-100">
              <div class="col-lg-6 h-100 block-28__content-side">
                <div class="contact-info">
                  <h5 class="contact-info__title mb-3">Get in Touch</h5>
                  <p class="contact-info__paragraph mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s.
                  </p>
                  <div class="mb-5">
                    <h6 class="contact-info__title-2 mb-3">COLLABORATE</h6>
                    <p class="d-flex flex-column">
                      <span class="contact-info__item mb-2">
                        Support@example.com
                      </span>
                      <span class="contact-info__item">
                        Fax: (099) 453-1357
                      </span>
                    </p>
                  </div>
                  <div class="mb-5">
                    <h6 class="contact-info__title-2 mb-3">COLLABORATE</h6>
                    <p class="d-flex flex-column">
                      <span class="contact-info__item mb-2">
                        <i class="fas fa-phone"></i>
                        <span class="mx-2">Support@example.com</span>
                      </span>
                      <span class="contact-info__item">
                        <i class="fas fa-envelope"></i>
                        <span class="mx-2">Fax: (099) 453-1357</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 h-100 block-28__form-side">
                <form class="contact-form text-center">
                  {/* <form onsubmit="submitContactForm(event)" class="contact-form text-center"> */}
                  <div class="contact-form__header mb-5">
                    <h6 class="contact-form__title mb-3">Contact Us</h6>
                    <p class="contact-form__paragraph mb-0 mx-auto">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <input
                    type="text"
                    class="contact-form__input"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    class="contact-form__input"
                    placeholder="Email"
                  />
                  <textarea
                    class="contact-form__input"
                    placeholder="Message"
                  ></textarea>
                  <button class="btn btn-primary w-100">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact