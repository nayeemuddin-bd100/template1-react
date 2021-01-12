import img3 from "../../assets/imgs/img-3.png";

function MoreDetails() {
    return (
      <div>
        <div id="features" className="block-11 space-between-blocks">
          <div className="container">
            {/* <!-- HEADER --> */}
            <div className="block__header col-lg-8 col-xl-7 mx-auto text-center">
              <p className="block__pre-title mb-2">GET MORE DETAILS</p>
              <h1 className="block__title mb-3">
                Awesome Technical <span className="highlight">Specs</span>
              </h1>
              <p className="block__paragraph mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div className="row align-items-center justify-content-center flex-column-reverse flex-lg-row px-2">
              <div className="col-lg-4 col-xl-5 p-lg-5">
                <img className="w-100" src={img3} />
              </div>
              <div className="col-lg-8 col-xl-6">
                <div className="row">
                  <div className="col-md-6 mb-2-1rem">
                    <div className="card-1 card-1--selected text-center">
                      <span className="card-1__symbol mx-auto mb-4">
                        <i className="fas fa-camera-retro"></i>
                      </span>
                      <h3 className="card-1__title mb-2">Camera Available</h3>
                      <p className="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2-1rem">
                    <div className="card-1 text-center">
                      <span className="card-1__symbol mx-auto mb-4">
                        <i className="fas fa-leaf"></i>
                      </span>
                      <h3 className="card-1__title mb-2">Eco Friendly</h3>
                      <p className="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2-1rem">
                    <div className="card-1 text-center">
                      <span className="card-1__symbol mx-auto mb-4">
                        <i className="fas fa-cog"></i>
                      </span>
                      <h3 className="card-1__title mb-2">Readable in Sunlight</h3>
                      <p className="card-1__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2-1rem">
                    <div className="card-1 text-center">
                      <span className="card-1__symbol mx-auto mb-4">
                        <i className="fas fa-database"></i>
                      </span>
                      <h3 className="card-1__title mb-2">30 Days Battery Time</h3>
                      <p className="card-1__paragraph">
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