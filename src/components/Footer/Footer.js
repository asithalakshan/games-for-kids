import React from "react";
import logo from "../Images/logo.png";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Why Shoud Know ?</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img src={logo} style={{ height: "100px" }} />
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">ABOUT US</h6>
                <p>Why Choose Us?</p>
                <p>About Us</p>
                <p>Charity Foundation</p>
                <p>President</p>
                <p>Staff</p>
                <p>Blog</p>
                <p>Contact details</p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">CUSTOMER CARE</h6>
                <p>Contact Us</p>
                <p>General Questions</p>
                <p>Return Policy</p>
                <p>Extend Protection Plans</p>
                <p>Our Location</p>
                <p>Policy</p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">ASK QUESTION</h6>
                <form>
                  <div class="form-outline mb-1">
                    <label class="form-label" for="form4Example1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form4Example1"
                      class="form-control"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form4Example2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form4Example2"
                      class="form-control"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form4Example3">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="form4Example3"
                      rows="3"
                    ></textarea>
                  </div>

                  <button type="submit" class=" btnx btn-dark ">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
