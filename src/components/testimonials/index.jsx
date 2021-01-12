
import profile2 from "../../assets/imgs/profile-2.png";


function Testimonials() {
    return (
      <div>
        <div id="testimonials" className="block-20 space-between-blocks">
          <div className="container">
            <div className="block__header col-lg-8 col-xl-7 mx-auto text-center px-0">
              <h1 className="block__title mb-3">What Buyers Says About Us</h1>
              <p className="block__paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div className="row px-2 pt-4">
              <div className="col-lg-4">
                <div className="testimonial-card-1 mb-5">
                  <p className="testimonial-card-1__paragraph mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen.
                  </p>
                  <div className="block-20__person">
                    <div className="mb-2">
                      <img className="block-20__person-avatar" src={profile2} />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column">
                      <span className="block-20__person-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="block-20__person-name my-1">
                        Ali Boukeroui
                      </span>
                      <span className="block-20__person-info">
                        indiehackers.com
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-card-1__quote-symbol">
                    <i className="fas fa-quote-left"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-card-1 mb-5">
                  <p className="testimonial-card-1__paragraph mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen.
                  </p>
                  <div className="block-20__person">
                    <div className="mb-2">
                      <img className="block-20__person-avatar" src={profile2} />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column">
                      <span className="block-20__person-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="block-20__person-name my-1">
                        Ali Boukeroui
                      </span>
                      <span className="block-20__person-info">
                        indiehackers.com
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-card-1__quote-symbol">
                    <i className="fas fa-quote-left"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-card-1 mb-5">
                  <p className="testimonial-card-1__paragraph mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen.
                  </p>
                  <div className="block-20__person">
                    <div className="mb-2">
                      <img className="block-20__person-avatar" src={profile2} />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column">
                      <span className="block-20__person-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="block-20__person-name my-1">
                        Ali Boukeroui
                      </span>
                      <span className="block-20__person-info">
                        indiehackers.com
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-card-1__quote-symbol">
                    <i className="fas fa-quote-left"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;