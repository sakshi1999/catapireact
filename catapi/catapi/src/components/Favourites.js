import React, { useState, useEffect } from "react";
import "../css/Favoutires.css";
import axios from "axios";

function Favourites() {
  const [favImage, setFavImage] = useState([]);

  const deleteImage = () => { 
    axios.delete(`https://api.thecatapi.com/v1/favourites/2029608`,{
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
      },
    })
    .then((res) => {
      console.log('deleted data',res.data);
      setFavImage(res.data) 
    })
  };

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/favourites`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
        },
      })
      .then((res) => {
        console.log("favourite images", res);
        setFavImage(res.data);
      
      });
  }, []);

  return (
    <div className="favourites">
      <div className="favourites__sort">
        <label className="favourites__order">order</label>
        <select className="favourites__options">
          <option>Desc</option>
          <option>Aesc</option>
        </select>
      </div>
      <div className="favourites__images">
        {favImage.map((favImages,i) => {
          return (
            <div className="favourites__imgDiv" key={i}>
              <img
                className="favourites__imageRow"
                src={favImages.image.url}
                alt="photo"
              />
              <button className="favourites__button" onClick={deleteImage}>
                UNFAV-IT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
