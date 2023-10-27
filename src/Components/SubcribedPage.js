import React from "react";
import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import { useGlobalContext } from "./Contex";

const SubcribedPage = () => {
  const { subscriber } = useGlobalContext();
  return (
    <section className="section subscribed_page">
      <article className="subscribed_wrapper">
        <h1 className="subscribed_alert">
          hello{" "}
          <span className="perosn_name">
            {subscriber ? subscriber.name : ""}
          </span>
        </h1>
        <p>Thanks for subscribing</p>

        <FaCheck className="check" />
        <Link className="back_to_home" to={"/"}>
          back to home
        </Link>
      </article>
    </section>
  );
};

export default SubcribedPage;
