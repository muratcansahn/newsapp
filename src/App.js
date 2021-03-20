import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import News from "./components/News";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=tr&apiKey=419404524fdf41ac8bc4ac0dc2353be5"
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <div className="container">
      <div className="row-flex row">
        {data.map((news) => {
          return (
            <div className="col-md-3 mb-3 ">
              <div className="content">
                <News
                  img={news.urlToImage}
                  title={news.title}
                  link={news.url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
