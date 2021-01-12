
function Contact() {
    return (
      <div>
        <div
          id="contact-us"
          className="block-28 space-between-blocks border-top border-bottom"
        >
          <div className="container">
            <div className="row h-100">
              <div className="col-lg-6 h-100 block-28__content-side">
                <div className="contact-info">
                  <h5 className="contact-info__title mb-3">Get in Touch</h5>
                  <p className="contact-info__paragraph mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="mb-5">
                    <h6 className="contact-info__title-2 mb-3">COLLABORATE</h6>
                    <p className="d-flex flex-column">
                      <span className="contact-info__item mb-2">
                        Support@example.com
                      </span>
                      <span className="contact-info__item">
                        Fax: (099) 453-1357
                      </span>
                    </p>
                  </div>
                  <div className="mb-5">
                    <h6 className="contact-info__title-2 mb-3">COLLABORATE</h6>
                    <p className="d-flex flex-column">
                      <span className="contact-info__item mb-2">
                        <i className="fas fa-phone"></i>
                        <span className="mx-2">Support@example.com</span>
                      </span>
                      <span className="contact-info__item">
                        <i className="fas fa-envelope"></i>
                        <span className="mx-2">Fax: (099) 453-1357</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 h-100 block-28__form-side">
                <form className="contact-form text-center">
                  {/* <form onsubmit="submitContactForm(event)" className="contact-form text-center"> */}
                  <div className="contact-form__header mb-5">
                    <h6 className="contact-form__title mb-3">Contact Us</h6>
                    <p className="contact-form__paragraph mb-0 mx-auto">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <input
                    type="text"
                    className="contact-form__input"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="contact-form__input"
                    placeholder="Email"
                  />
                  <textarea
                    className="contact-form__input"
                    placeholder="Message"
                  ></textarea>
                  <button className="btn btn-primary w-100">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact