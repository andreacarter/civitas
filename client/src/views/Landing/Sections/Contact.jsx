import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-section bg-black">
            <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    1180 Seven Seas Drive, Lake Buena Vista, FL
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Contact Us</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="mailto:mirtacarter@gmail.com">
                      contact@civitas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (555) 867-5309</div>
                </div>
              </div>
            </div>
          </div>

          <div className="social d-flex justify-content-center">
            <a
              href="https://twitter.com/usocc?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/mirtacarter/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/mirtacarter/civitas"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
