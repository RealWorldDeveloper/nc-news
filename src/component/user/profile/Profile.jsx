import React, { useEffect, useState } from "react";
import "./profile.css";
import { apiClient } from "../../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../../UserContext";
function Profile() {
  const navigation = useNavigate();
  const { SetdecodeData } = useUser();

  const [user, setUser] = useState({});
  useEffect(() => {
    apiClient
      .get("/users/verify")
      .then((res) => {
        if (res.data.success) {
          navigation("/user/profile");
          SetdecodeData(res.data.decode);

          setUser(res.data.decode);
        } else {
          navigation("/user/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container mt-6">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">{user.name}</h3>
              <h6 className="theme-color lead">
                A Lead UX &amp; UI designer based in Canada
              </h6>
              <p>
                I <mark>{user.name}</mark> Love to read and write Articles
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>4th april 1998</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>UK</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>London</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>079xxxxxxx</p>
                  </div>
                  <div className="media">
                    <label>Facebok</label>
                    <p>facebook.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img
                src={user.image}
                title=""
                alt=""
                height={300}
                className="image border rounded-5"
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  500
                </h6>
                <p className="m-0px font-w-600">Like</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  150
                </h6>
                <p className="m-0px font-w-600">Articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
