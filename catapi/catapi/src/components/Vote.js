import React, { useState, useEffect } from "react";
import "../css/Vote.css";
import axios from "axios";

const Vote = () => {
  const [images, setImages] = useState([]);
  var imageId = "";

  //POST request for adding data in favourites
  const favlist = () => {
    axios
      .post(`https://api.thecatapi.com/v1/favourites`,{
        image_id: "9ccXTANkb",
        sub_id: "user",
      }, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
        },
      })
      .then((res) => {
        console.log("favlists", res);
        //setImages(res.data);
      });
    alert("Image save to favourites");
  };

  // likebtn
  const likebtn = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      console.log("likebtn", res);
      setImages(res.data);
    });
  };

  //dislikebtn
  const dislikebtn = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      console.log("dislikebtn", res);
      setImages(res.data);
    });
  };

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      console.log(res);
      setImages(res.data);
    });
  }, []);

  return (
    <div className="vote">
      <div className="vote__btn">
        <button className="vote__likebtn" onClick={likebtn}>
          Love It
        </button>
        <button className="vote__nopebtn" onClick={dislikebtn}>
          Nope It
        </button>
      </div>
      <div className="vote__randomImg">
        {images.map((image) => {
          return (
            <img
              className="vote__catImg"
              src={image.url}
              alt="catImage"
              key={image.id}
            />
          );
        })}

        <button className="vote__favit" onClick={favlist}>
          FAV IT
        </button>
      </div>
    </div>
  );
};

export default Vote;
