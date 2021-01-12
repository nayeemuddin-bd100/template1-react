import img1 from "../../assets/imgs/img-1.png";


function Heading() {
    return (
      <div>
        <div class="hero__content container mx-auto">
          <div class="row px-0 mx-0 align-items-center">
            <div class="col-lg-6 px-0">
              <h1 class="hero__title mb-3">
                OUR PRODUCT IS <span class="highlight">BETTER</span> THAN OTHER
              </h1>
              <p class="hero__paragraph mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <div class="hero__btns-container">
                <a class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
                  Get Free App
                </a>
                <a class="hero__btn btn btn-secondary mx-lg-3" href="#">
                  Go Premium
                </a>
              </div>
            </div>
            <div class="col-lg-5 mt-5 mt-lg-0 mx-0">
              <div class="hero__img-container">
                <img src={img1} class="hero__img w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Heading;