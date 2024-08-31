"use client";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const items = {
  hidden: (i) => ({
    opacity: 0,
    y: i % 2 === 0 ? 20 : -20,
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: i * 0.3 },
  }),
};

export default function Card({ result, index }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={items}
      whileHover={{ scale: 1.05 }}
      custom={index}
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200"
    >
      <Link href={`/movie/${result.id}`}>
        {isLoading && (
          <img
            src="/images/loading.png"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "1.78 / 1",
              objectFit: "cover",
            }}
          />
        )}
        <Image
          priority
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster
          }`}
          width={500}
          height={300}
          alt={result.title || result.name}
          className={`sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 ${
            isLoading ? "hidden" : "block"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />

        <div className="p-2">
          <p className="line-clamp-2 font-medium">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
