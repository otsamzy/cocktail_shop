import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Details = () => {
  const { cocktailId } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    setLoading(true);
    const response = await fetch(`${url} ${cocktailId}`);
    const recData = await response.json();

    const { drinks } = recData;

    if (drinks) {
      const {
        idDrink: id,
        strAlcoholic: type,
        strCategory: category,
        strDrink: title,
        strDrinkThumb: image,
        strGlass: glass,
        strIngredient1: ingredients,
      } = drinks[0];

      const newDrinks = {
        id,
        type,
        image,
        category,
        title,
        glass,
        ingredients,
      };

      setData(newDrinks);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [cocktailId]);

  if (loading) {
    return <LoadingPage />;
  }

  const { type, title, image, glass, category, ingredients } = data;

  return (
    <section className="section_details section">
      <Link to={"/"} className="details_home_btn">
        back to home
      </Link>
      <h2 className="title_section_header">{title}</h2>
      <article className="Details_wrapper">
        <div className="details_image_con">
          <img src={image} alt={title} />
        </div>
        <div className="details_con">
          <p className="details_text">
            <span className="caption">Name:</span>
            {title}
          </p>
          <p className="details_text">
            <span className="caption">category:</span>
            {category}
          </p>
          <p className="details_text">
            <span className="caption">info:</span>
            {type}
          </p>
          <p className="details_text">
            <span className="caption">glass:</span>
            {glass}
          </p>
          <p className="details_text">
            <span className="caption">ingredients:</span>
            {ingredients}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Details;
