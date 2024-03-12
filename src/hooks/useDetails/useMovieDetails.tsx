"use client";

import { apiCall } from "@/api/moviesApi/movieApi";
import { useEffect, useState } from "react";

export type detailType = {
  large_cover_image?: string;
  title?: string;
  genres?: string[];
  year?: number;
  rating?: number;
  torrents?: {
    url: string;
    quality: string;
    size: string;
    type: string;
    video_codec: string;
   
  }[];
  description_full?: string;
  summary?: string;
};

export const useDetail = (moviesId: string | string[]) => {
  const [movieDetail, setMovieDetail] = useState<detailType>({});
  const fetchingDetailApi = async () => {
    try {
      const response = await apiCall.get(
        `v2/movie_details.json?movie_id=${moviesId}`
      );
      setMovieDetail(response.data.data.movie);
    } catch (error) {
      console.log("🚀 ~ fetchingDetailApi ~ error:", error);
    }
  };
  useEffect(() => {
    fetchingDetailApi();
  }, [moviesId]);

  return movieDetail;
};
