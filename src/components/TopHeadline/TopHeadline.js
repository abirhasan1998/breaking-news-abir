import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import News from '../News/News';



const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    
    useEffect( () =>{
     const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=fa4228c0a9ab49b89bdd8f88212b68cc';   
     fetch(url)
     .then(res => res.json())
     .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;