import React, { useState, useEffect } from "react";
import "../css/Images.css";
import axios from "axios";

function Images() {
  const [Images, setImages] = useState([]);


 const fetchNormal = (order) => {
    axios
    .get(`https://api.thecatapi.com/v1/images/?limit=10&page=0&order=${order}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
      },
    })
    .then((res) => {
      console.log("imagesearch", res);
      setImages(res.data);
    });
 }

 const orderData = (data) => {
     console.log(data.value);
     fetchNormal(data.value);
 }

 const breed = () => {
    // console.log(data)
    fetchNormal("AESC");
  };
  const types = () => {
    // console.log(data)
    fetchNormal("DESC");
  };
  const category = () => {
    // console.log(data)
    fetchNormal("AESC");
  };

  useEffect((order) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/?limit=10&page=0&order=${order}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
        },
      })
      .then((res) => {
        console.log("images", res);
        setImages(res.data);
      });
  }, []);

  return (
    <div className="favourites">
        <div className="images__search">
        <div className="images__search1">
        <div className="images__sort">
          <label className="images__order">order</label>
          <select className="images__options" onChange={orderData}>
            <option>Desc</option>
            <option>Aesc</option>
          </select>
        </div>
        <div className="images__sort">
          <label className="images__order">breed</label>
          <select className="images__options" onChange={breed}>
          <option>None</option>
                    <option>Abyssinian</option>
                    <option>Aegean</option>
                    <option>American Bobtail</option>
                    <option>American Curl</option>
                    <option>American Shorthair</option>
                    <option>Balinese</option>
                    <option>Bambino</option>
                    <option>perisan</option>
                    <option>serbian</option>
          </select>
        </div>
      </div>
      <div className="images__search1">
        <div className="images__sort">
          <label className="images__order">category</label>
          <select className="images__options" onChange={category}>
              <option>All</option>
            <option>sunglasses</option>
            <option>clothes</option>
          </select>
        </div>
        <div className="images__sort">
          <label className="images__order">breed</label>
          <select className="images__options" onChange={types}>
          <option>All</option>
                    <option>baby</option>
                    <option>adult</option>
                    
                  
          </select>
        </div>
      </div> 
        </div>
      

      <div className="favourites__images">
        {Images.map((Image, i) => {
          return (
            <div className="favourites__imgDiv" key={i}>
              <img
                className="favourites__imageRow"
                src={Image.url}
                alt="photo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Images;
