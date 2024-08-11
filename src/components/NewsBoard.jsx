import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;




  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchArticles();
  }, [url,apiKey]);

  return (
    <div className="newsBoxs">
      
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            img_src={news.urlToImage}
            title={news.title}
            description={news.description}
            url={news.url }
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
