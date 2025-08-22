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
  const [visibleCount, setVisibleCount] = useState(12); // 3x4 grid
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
    <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Top Headlines</h1>
      {/* Grid Layout: 3 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.slice(0, visibleCount).map((article, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-base font-semibold mb-2 line-clamp-2">
                {article.title}
              </h2>

              {/* Navigate and set context */}
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
      </div>

      {/* Load More Button */}
      {visibleCount < articles.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
