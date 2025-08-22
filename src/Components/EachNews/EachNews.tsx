"use client";

import { useNews } from "@/Context/NewsContext";

export default function NewsDetails() {
  const { selectedArticle } = useNews();

  if (!selectedArticle) {
    return <div className="p-6">No article selected.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {selectedArticle.urlToImage && (
        <img
          src={selectedArticle.urlToImage}
          alt={selectedArticle.title}
          className="w-full h-72 object-cover rounded-lg mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-4">{selectedArticle.title}</h1>
      <p className="text-gray-600 mb-4">{selectedArticle.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        {selectedArticle.source?.name} •{" "}
        {new Date(selectedArticle.publishedAt).toLocaleString()}
      </p>
      <p className="text-gray-700">{selectedArticle.content}</p>
    </div>
  );
}
