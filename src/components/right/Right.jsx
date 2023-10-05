import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Right.css";

export default function Right() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const styles = {
    border: "1px solid red",
  };

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.name.toLowerCase() === name.toLowerCase() &&
        data.userName.toLowerCase() === userName.toLowerCase() &&
        data.email.toLowerCase() === email.toLowerCase() &&
        data.mobile.toLowerCase() === mobile.toLowerCase()
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      userName.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      check === false
    ) {
      setError(true);
    } else {
      if (!exist) {
        formData.push({ name, userName, email, mobile });
        localStorage.setItem("formData", JSON.stringify(formData));
      }
      navigate("/category");
    }
  };

  return (
    <div className="right">
      <div className="form" onSubmit={handleSubmit}>
        <div className="titleImg-div">
          <img src="img/title.png" alt="title" />
        </div>
        <p className="form-title">Create your new account</p>
        <form className="form-div">
          <div className="name-div">
            <div>
              <input
                placeholder="Name"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={error && name.length === 0 ? styles : null}
              />
            </div>
            {error && name.length === 0 ? <label>Name required</label> : ""}
          </div>

          <div className="userName-div">
            <div>
              <input
                placeholder="UserName"
                type="text"
                className="input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={error && userName.length === 0 ? styles : null}
              />
            </div>
            {error && userName.length === 0 ? (
              <label>UserName required</label>
            ) : (
              ""
            )}
          </div>

          <div className="email-div">
            <div>
              <input
                placeholder="Email"
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={error && email.length === 0 ? styles : null}
              />
            </div>
            {error && email.length === 0 ? <label>Email required</label> : ""}
          </div>

          <div className="mobileNo-div">
            <div>
              <input
                placeholder="Mobile"
                type="text"
                className="input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={error && mobile.length === 0 ? styles : null}
              />
            </div>
            {error && mobile.length === 0 ? (
              <label>Mobile.No required</label>
            ) : (
              ""
            )}
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              value={check}
              onChange={() => setCheck(!check)}
            />
            <span className="check-msg">
              Share my registration data with Superapp
            </span>
          </div>
          {error && check === false ? (
            <label>Check this box if you want to proceed</label>
          ) : (
            ""
          )}

          <button className="sign-up-btn">SIGN UP</button>

          <p className="terms">
            By clicking on Sign up. you agree to Superapp
            <span className="mark">Terms and Conditions of Use</span>
          </p>

          <p className="policy">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="mark">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}
