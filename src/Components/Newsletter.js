import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./Contex";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ name: "", email: "", phone: "" });
  const { setSubscriber } = useGlobalContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.phone) {
      return alert("fields required");
    }
    navigate("/subscribed");
    setSubscriber({ name: state.name });
    setState({ name: "", email: "", phone: "" });
  };
  return (
    <section className="section news_letter_container">
      <article className="form_component">
        <form className=" subscribeform" onSubmit={submitForm}>
          <h2 className="subscribe">Subscribe </h2>
          <div className="single_form">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="tochukwu"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className="single_form">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ttt@gmail.com"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="single_form">
            <label htmlFor="phone">phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="080999999"
              value={state.phone}
              onChange={handleChange}
            />
          </div>
          <div className="btn_con">
            <button className="submit_form_btn" type="submit">
              submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Newsletter;
