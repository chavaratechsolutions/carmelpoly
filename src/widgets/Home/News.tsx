"use client"
import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@lib/firebase"; // Adjust import path as needed
import Link from "next/link";

interface NewsItem {
  id: string;
  text: string;
  link?: string;
  order: number;
  isActive?: boolean;
}

export default function NewsTicker() {
  const [showTicker, setShowTicker] = useState(true);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Reference to your Firebase collections
  const configRef = doc(db, "website_config", "latest_news_config");
  const newsItemsRef = collection(db, "website_config", "latest_news_config", "items");

  // Fetch news configuration and items
  useEffect(() => {
    const unsubscribeConfig = onSnapshot(configRef, (doc) => {
      if (doc.exists()) {
        setShowTicker(doc.data().showNews ?? true);
      }
    });

    const unsubscribeItems = onSnapshot(newsItemsRef, (snapshot) => {
      const items: NewsItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          text: data.text,
          link: data.link || "",
          order: data.order || 0,
          isActive: data.isActive ?? true
        });
      });
      // Sort by order and filter active items
      setNewsItems(
        items
          .filter(item => item.isActive)
          .sort((a, b) => a.order - b.order)
      );
      setLoading(false);
    });

    return () => {
      unsubscribeConfig();
      unsubscribeItems();
    };
  }, []);

  if (!showTicker || loading || newsItems.length === 0) return null;

  return (
    <div className="w-full bg-primary-100 h-[5vh] px-[5vw] flex items-center space-x-3 overflow-hidden">
      <div className="font-medium whitespace-nowrap">
        <span className="text-xs md:text-md">Latest News:</span>
      </div>
      
      <div className="marquee-container overflow-hidden flex-1">
        <div className="marquee-content flex items-center space-x-10">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {newsItems.map((item) => (
                item.link ? (
                  <Link
                    key={`${i}-${item.id}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-900 whitespace-nowrap"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span 
                    key={`${i}-${item.id}`}
                    className="text-sm text-primary-800 whitespace-nowrap"
                  >
                    {item.text}
                  </span>
                )
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => setShowTicker(false)}
        className="text-primary-800 hover:text-primary-900 ml-2"
        aria-label="Hide news ticker"
      >
        ×
      </button>
    </div>
  );
}