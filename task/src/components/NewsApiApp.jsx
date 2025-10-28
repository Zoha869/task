// src/components/NewsApiApp.jsx
import { useState, useEffect } from "react";

function NewsApiApp() {
  const [dataStatus, setDataStatus] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  const getDataFromApi = async () => {
    try {
      // ✅ Make sure your .env file has:
      // VITE_newsKey=your_api_key_here
      const apiKey = import.meta.env.VITE_newsKey;

      if (!apiKey) {
        throw new Error("API key is missing. Please check your .env file.");
      }

      const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      const response = await fetch(endpoint);

      // ✅ Check for failed request
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setDataStatus(data.status);
      setTotalResults(data.totalResults);
      setArticles(data.articles || []);
    } catch (err) {
      console.error("Failed to fetch news:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📰 Data from News API</h1>

      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <p><b>Status:</b> {dataStatus}</p>
          <p><b>Total Results:</b> {totalResults}</p>

          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="News"
                    width="300"
                    style={{ borderRadius: "8px" }}
                  />
                )}
                <h3>{article.title}</h3>
                <p><b>Author:</b> {article.author || "Unknown"}</p>
                <p><b>Published:</b> {new Date(article.publishedAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </>
      )}
    </div>
  );
}

export default NewsApiApp;