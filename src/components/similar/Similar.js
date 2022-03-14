import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Similar.css";

function Similar({ similarContent }) {
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original/"
  );
  const navigate = useNavigate();
  return (
    <div className="similar-wrapper">
      <h4 className="similar__title">More like this</h4>
      <div className="similar__media-container">
        {similarContent.slice(0, 10).map((item) => {
          return (
            <div className="similar__media" key={item.id}>
              <img
                src={`${imageURL}${item.poster_path}`}
                alt=""
                className="similar__media-poster"
                onClick={() => {
                  navigate(`/tv/${item.id}`);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Similar;
