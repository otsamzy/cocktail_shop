import React from "react";
import SearchComponent from "./SearchComponent";
import { useGlobalContext } from "./Contex";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const { cocktailList, loading } = useGlobalContext();

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <section className="section home">
      <SearchComponent />
      <section className="cocktail_container">
        {cocktailList.length < 1 ? (
          <div className="warning">
            <h1>no cocktail matched your search criteria</h1>
          </div>
        ) : (
          <div className="grid_container">
            {cocktailList.map((items) => {
              const { id, glass, category, title, type, image } = items;
              return (
                <article className="individual_item" key={id}>
                  <div className="image_container">
                    <img src={image} alt={title} />
                  </div>
                  <div className="details_container">
                    <h2 className="drink_title">{title}</h2>
                    <p className="glass">{glass}</p>
                    <p className="type">{type}</p>
                    <Link to={`/${id}`} className="link_btn">
                      details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </section>
  );
};

export default Home;
