import img3 from "../../assets/imgs/img-3.png";

function MoreDetails() {
    return (
      <div>
        <div id="features" class="block-11 space-between-blocks">
          <div class="container">
            {/* <!-- HEADER --> */}
            <div class="block__header col-lg-8 col-xl-7 mx-auto text-center">
              <p class="block__pre-title mb-2">GET MORE DETAILS</p>
              <h1 class="block__title mb-3">
                Awesome Technical <span class="highlight">Specs</span>
              </h1>
              <p class="block__paragraph mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div class="row align-items-center justify-content-center flex-column-reverse flex-lg-row px-2">
              <div class="col-lg-4 col-xl-5 p-lg-5">
                <img class="w-100" src={img3} />
              </div>
              <div class="col-lg-8 col-xl-6">
                <div class="row">
                  <div class="col-md-6 mb-2-1rem">
                    <div class="card-1 card-1--selected text-center">
                      <span class="card-1__symbol mx-auto mb-4">
                        <i class="fas fa-camera-retro"></i>
                      </span>
                      <h3 class="card-1__title mb-2">Camera Available</h3>
                      <p class="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2-1rem">
                    <div class="card-1 text-center">
                      <span class="card-1__symbol mx-auto mb-4">
                        <i class="fas fa-leaf"></i>
                      </span>
                      <h3 class="card-1__title mb-2">Eco Friendly</h3>
                      <p class="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2-1rem">
                    <div class="card-1 text-center">
                      <span class="card-1__symbol mx-auto mb-4">
                        <i class="fas fa-cog"></i>
                      </span>
                      <h3 class="card-1__title mb-2">Readable in Sunlight</h3>
                      <p class="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2-1rem">
                    <div class="card-1 text-center">
                      <span class="card-1__symbol mx-auto mb-4">
                        <i class="fas fa-database"></i>
                      </span>
                      <h3 class="card-1__title mb-2">30 Days Battery Time</h3>
                      <p class="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MoreDetails;