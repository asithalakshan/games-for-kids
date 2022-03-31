import { React, useEffect, useState } from "react";
import add from "../Images/add.jpg";
import "../Pages/Home.css";

function Home() {
  return (
    <div>
      <div className="wrapper">
        <section class="col-10 p-5 mb-4 mx-5">
          <h2 class="hed mt-5">Contact us</h2>

          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form>
                <div class="form-outline mb-1">
                  <label class="form-label" for="form4Example1">
                    Name
                  </label>
                  <input type="text" id="form4Example1" class="form-control" />
                </div>

                <div class="form-outline mb-1">
                  <label class="form-label" for="form4Example2">
                    Email address
                  </label>
                  <input type="email" id="form4Example2" class="form-control" />
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

                <button type="submit" class="p-2 btnx btn-dark ">
                  Send
                </button>
              </form>

              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>24/A Colombo 3</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 011 000 00 00</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>game4kids@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
