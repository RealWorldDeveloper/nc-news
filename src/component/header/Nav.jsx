import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import { apiClient } from "../../api";
import { PiSignOutBold } from "react-icons/pi";
import { toast } from "react-toastify";
import { useUser } from "../../UserContext";

function Nav() {
  const navigation = useNavigate();
  const {
    isActive,
    setActive,
    setToken,
    profileImg,
    setProfileImg,
    SetdecodeData,
  } = useUser();

  useEffect(() => {
    apiClient.get("/users/verify").then((res) => {
      if (res.data.success) {
        setActive(true);
        setProfileImg(res.data.decode.image);
      } else {
        setProfileImg(FcBusinessman);
      }
    });
  }, [profileImg, PiSignOutBold]);

  const handleLogout = () => {
    apiClient.post("/users/logout").then((res) => {
      setActive(false);
      setToken("");
      setProfileImg("");
      SetdecodeData({});
      toast.success(res.data.msg);
      navigation("/");
    });
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ animation: "fadeIn 3s" }}
      >
        <div className="container-fluid">
          <img
            src="/logo.png"
            className="rounded-circle border border-dark-subtle p-1"
            height="60"
            loading="lazy"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li className="nav-item fs-5">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link to={"/topics"} className="nav-link">
                  Topics
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link to={"/user/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {isActive ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ animation: "fadeIn 3s" }}
                >
                  <div className="login border border-dark-subtle rounded-circle p-1">
                    <img
                      src={profileImg}
                      className="login border border-dark-subtle rounded-circle p-1"
                      width={55}
                    />
                  </div>
                  <PiSignOutBold
                    fontSize={35}
                    className="mx-2 border border-dark-subtle"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ) : (
                <Link to={"/user/login"} style={{ animation: "fadeIn 3s" }}>
                  <FcBusinessman
                    fontSize={50}
                    className="login border border-dark-subtle rounded-circle p-1"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
