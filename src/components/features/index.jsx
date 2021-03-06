import img2 from "../../assets/imgs/img-2.png";
import Item from "./item";

function Features() {
    return (
      <div>
        <div id="product" className="block-5 space-between-blocks">
          <div className="container">
            {/* <!-- HEADER --> */}
            <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
              <p className="block__pre-title mb-2">WHY CHOOSING US</p>
              <h1 className="block__title mb-3">
                Easy Process With{" "}
                <span className="highlight">Best Features</span>
              </h1>
              <p className="block__paragraph mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div className="row align-items-center flex-column-reverse flex-lg-row px-2">
              {/* <!-- LEFT CONTENT --> */}
              <div className="col-lg-4">
                <Item
                  icon="fas fa-heartbeat"
                  tittle="Heart Rate Monitor"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>

                <Item
                  icon="fas fa-briefcase-medical"
                  tittle="Blood Pressure Manager"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>

                <Item
                  icon="fas fa-bell"
                  tittle="Alarm Alert"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>
              </div>
              {/* <!-- IMAGE --> */}
              <div className="col-lg-4 my-5 text-center">
                <img src={img2} className="w-75" />
              </div>
              {/* <!-- RIGHT CONTENT --> */}
              <div className="col-lg-4">
                <Item
                  icon="fas fa-map-marker-alt"
                  tittle="Location Finder"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>
               

                <Item
                  icon="fas fa-fingerprint"
                  tittle="Fingerprint Lock"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>
                <Item
                  icon="fas fa-mobile"
                  tittle="Camera and Bluetooth"
                  info="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry."
                ></Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Features;