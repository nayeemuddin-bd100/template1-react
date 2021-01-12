import img2 from "../../assets/imgs/img-2.png";

function Features() {
    return (
      <div>
        <div id="product" className="block-5 space-between-blocks">
          <div className="container">
            {/* <!-- HEADER --> */}
            <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
              <p className="block__pre-title mb-2">WHY CHOOSING US</p>
              <h1 className="block__title mb-3">
                Easy Process With <span className="highlight">Best Features</span>
              </h1>
              <p className="block__paragraph mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div className="row align-items-center flex-column-reverse flex-lg-row px-2">
              {/* <!-- LEFT CONTENT --> */}
              <div className="col-lg-4">
                <div className="card-2 d-flex flex-row flex-lg-row-reverse">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-heartbeat"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Heart Rate Monitor</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="card-2 d-flex flex-row flex-lg-row-reverse">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-briefcase-medical"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Blood Pressure Manager</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="card-2 d-flex flex-row flex-lg-row-reverse">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-bell"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Alarm Alert</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- IMAGE --> */}
              <div className="col-lg-4 my-5 text-center">
                <img src={img2} className="w-75" />
              </div>
              {/* <!-- RIGHT CONTENT --> */}
              <div className="col-lg-4">
                <div className="card-2 d-flex">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Location Finder</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="card-2 d-flex">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Fingerprint Lock</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="card-2 d-flex">
                  <div>
                    <span className="card-2__symbol mx-auto">
                      <i className="fas fa-mobile"></i>
                    </span>
                  </div>
                  <div className="px-2"></div>
                  <div>
                    <h3 className="card-2__title mb-2">Camera and Bluetooth</h3>
                    <p className="card-2__paragraph">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Features;