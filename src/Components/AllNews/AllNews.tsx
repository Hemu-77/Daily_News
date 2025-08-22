"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useNews } from "@/Context/NewsContext";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
  content: string;
};

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const { setSelectedArticle } = useNews();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {articles.slice(0, visibleCount).map((article, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-lg mb-6 overflow-hidden"
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{article.description}</p>
            <p className="text-xs text-gray-500 mb-2">
              {article.source?.name} •{" "}
              {new Date(article.publishedAt).toLocaleString()}
            </p>

            {/* On click set context and navigate */}
            <Link
              href="/Details"
              onClick={() => setSelectedArticle(article)}
              className="text-blue-500 hover:underline text-sm"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}

      {visibleCount < articles.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
