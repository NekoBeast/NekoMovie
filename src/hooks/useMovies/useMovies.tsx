"use client";
import React, { useEffect, useState } from "react";
import { apiCall } from "@/api/moviesApi/movieApi";

export type moviesType = {
  id: number;
  title?: string;
  large_cover_image?: string;
  genres?: [];
  year: number;
  rating: number;
};

export const useMoviesList = () => {
  const [moviesList, setMoviesList] = useState<moviesType[]>([]);

  const fetchingMoviesApi = async () => {
    try {
      const response = await apiCall.get("v2/list_movies.json");
      setMoviesList(response.data.data.movies);
      console.log("🚀 ~ fetchingMoviesApi ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ fetchingMoviesApi ~ error:", error);
    }
  };

  useEffect(() => {
    fetchingMoviesApi();
  }, []);

  return moviesList;
};
