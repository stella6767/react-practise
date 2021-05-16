import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; //auto import 안 먹힘..불편
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bfc35f0de1be498185c9c5a4b48e2d50`,
        );

        console.log('resp 정보', response.data.articles); //잘 받아왔는데..?
        setArticles(response.data.articles);

        console.log('article 정보: ', articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중..</NewsListBlock>;
  }

  //아직 articles 값이 설정 안될 때
  if (!articles) {
    console.log('why');
    return null;
  }

  //articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} /> //와 이 () 괄호 때문에 aricle에 값이 안 담긴다고?
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
