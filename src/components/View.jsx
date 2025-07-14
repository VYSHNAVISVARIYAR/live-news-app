import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
  const [news, newnews] = useState(
    
        {
  "status": "ok",
  "totalResults": 34,
  "articles": []

    }
  );

  const fetchdata=() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
        (response)=>{newnews(response.data)}
    ).catch()
  }
useEffect(()=>{fetchdata()},[])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              {news.articles.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 mt-3">
                    <div class="card">
                      <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">
                          {value.description}
                        </p>
                        {/* <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
