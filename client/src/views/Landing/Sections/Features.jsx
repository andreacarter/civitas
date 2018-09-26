import React from "react";
import screenshot1 from "../../../assets/img/landing/screenshot1.jpg";
import screenshot2 from "../../../assets/img/landing/screenshot2.jpg";

class Features extends React.Component {
  render() {
    return (
      <div className="projects-section bg-light">
        <h2 className="text-center text-info mb-5" id="features">
          Why Civitas?
        </h2>
        <div className="container">
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={screenshot1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Customizable Dashboard</h4>
                    <p className="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <img className="img-fluid" src={screenshot2} alt="" />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">
                        Visualize Your Market Context
                      </h4>
                      <p className="mb-0 text-white-50">
                        Another example of a project with its respective
                        description. These sections work well responsively as
                        well, try this theme on a small screen!
                      </p>
                      <hr className="d-none d-lg-block mb-0 mr-0" />
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
}

export default Features;
