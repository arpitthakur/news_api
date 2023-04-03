import React, { useState } from "react";
import { Button, Space } from "antd";
import { Card } from "antd";
import { Carousel } from "antd";

function News({ result }) {
  console.log(result);
  // const [newarray, setnewarray] = useState({});
  // const contentStyle = {
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };
  // const handleClick = async () => {
  //   try {
  //     const res = await fetch(
  //       ` http://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword="Bitcoin","Ethereum","Litecoin"&keywordOper=or&lang=eng&articlesSortBy=date&apiKey=27c99223-6840-49f7-a975-0dddceb7a573&includeArticleConcepts=true&articleBodyLen=300&articlesCount=10`
  //     );
  //     const data = await res.json({});
  //     setnewarray({ ...data });
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {/* <div className="heading_section">
        <div className="container">
        <div className="heading_section">
          <h3 className="news_section">Welcome to the News Section</h3>
          <p className="news_muted_text">Here you get all the news..</p>
          </div>

          <Space>
            <Button onClick={handleClick}>Get News</Button>
          </Space>

          <Carousel autoplay>
            {newarray?.articles?.results?.map((item, index) => (
              <div>
                
                <img src={item.image}className="card-image"></img>
              </div>
            ))}
          </Carousel>
          <div className="row">

          {newarray?.articles?.results?.map((item, index) => {
            return (
              <>
                <div className="col-md-6 mb-4">
                  <img src={item.image} className="card-image"></img>
                </div>

   

  <div class="col-md-6 mb-4">
    <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
    <h4><strong>{item.title}</strong></h4>
    <p class="text-muted">
    {item.body}
    </p>
    <button type="button" class="btn btn-primary">Read more</button>
  </div>
  
              </>
            );
          })}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default News;
