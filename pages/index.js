import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Carousel } from "antd";
import { Button, Space } from "antd";
import { Card } from "antd";
import styles from "@/styles/Home.module.css";
import Pagination from "../Components/Pagination";
import { paginate } from "@/Helper/paginate";
import UsescrollTop from "@/Components/UsescrollTop";

import News from "../Components/News";
function index({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [currentPage]);

  console.log(result, currentPage, pageSize);
  const paginatedPosts = paginate(result, currentPage, pageSize);
  console.log(paginatedPosts, "test");
  return (
    <>
      <div className="heading_section">
        <div className="header_section">
          <div className="row">
            <div className="col-md-6">
              <img
                src="news_logo.png"
                alt="news_logo_img"
                className="news_logo_image"
              ></img>
            </div>
            <div className="col-md-6">
              <h4 className="news_header_text">THE TIMES OF EARTH</h4>
              <p className="header_muted_text">
                International Edition | Since 1999
              </p>
            </div>
          </div>
        </div>
        <div className="container">
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
            <div className="pagination_section">
              {paginatedPosts.map((item) => {
                return (
                  <>
                    <div className="row">
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
                              <h3 className="item_author">
                                Author:&nbsp;{item1.name}
                              </h3>
                            </>
                          );
                        })}
                        <h5 className="item_time">
                          Dated at:&nbsp;{item.date}
                        </h5>
                        <button type="button" class="btn btn-primary">
                          <a href={item.url} className="item_url">
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <News />
      <div className="footer_section">
        <p>
          Page: <span style={{ color: "red" }}>{currentPage}</span>
        </p>

        <Pagination
          items={result?.articles?.results?.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
        <UsescrollTop />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `http://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword="Bitcoin","Ethereum","Litecoin"&keywordOper=or&lang=eng&articlesSortBy=date&apiKey=27c99223-6840-49f7-a975-0dddceb7a573&includeArticleConcepts=true&articleBodyLen=300&articlesCount=100`
  );
  console.log(res);
  const result = await res.json();
  console.log(result);
  return { props: { result } };
}
export default index;
