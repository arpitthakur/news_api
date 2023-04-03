import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Carousel } from "antd";
import { Button, Space } from "antd";
import { Card } from "antd";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import News from "../Components/News";
function index({ result }) {
  console.log(result);
  return (
    <>
      <div className="heading_section">
        <div className="container">
          <div className="header_section">
            <h3 className="news_section">Welcome to the News Section</h3>
            <p className="news_muted_text">Top 5 news are...</p>
          </div>
          <div className="carousel_section">
            <Carousel autoplay>
              {result?.articles?.results?.map((item, index) => (
                <div>
                  <img src={item.image} className="card-image"></img>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="row">
            {result?.articles?.results?.map((item, index) => {
              return (
                <>
                  <div className="col-md-6 mb-4">
                    <img src={item.image} className="card-image"></img>
                  </div>

                  <div class="col-md-6 mb-4">
                    <h4>
                      <strong>{item.title}</strong>
                    </h4>
                    <p class="text-muted">{item.body}</p>
                    {item?.authors?.map((item1, index1) => {
                      return (
                        <>
                          <h3 className="item_author">Author:{item1.name}</h3>
                        </>
                      );
                    })}
                    <h5 className="item_time">{item.date}</h5>
                    <button type="button" class="btn btn-primary">
                      <a href={item.url} className="item_url">
                        Read more
                      </a>
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <News />
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `http://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword="Bitcoin","Ethereum","Litecoin"&keywordOper=or&lang=eng&articlesSortBy=date&apiKey=27c99223-6840-49f7-a975-0dddceb7a573&includeArticleConcepts=true&articleBodyLen=300&articlesCount=15`
  );
  console.log(res);
  const result = await res.json();
  console.log(result);
  return { props: { result } };
}
export default index;
