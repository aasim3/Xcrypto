import React, { useEffect, useState } from 'react';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=aed184174eee4e37bafef9b097d22cb9");
        const result = await response.json();
        console.log(result);
    console.log(result.articles);
        setArticles(result.articles);
      } catch (error) {
        console.error(error);
     
      }
    };
   

    fetchArticles();
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {articles.map((a) => (
        <div key={a.url} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={a.urlToImage} alt="BTC NEWS"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{a.title}</div>
            <p className="text-gray-700 text-base">
              {a.description}
            </p>
            <a className="font-bold text-xl" href={a.url}>Read more</a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Crypto</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BitCoin</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Trends</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
