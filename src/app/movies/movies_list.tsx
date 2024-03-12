"use client";
import React, { useState } from "react";
import { useMoviesList } from "@/hooks/useMovies/useMovies";
import { Flex, Grid, Image } from "@mantine/core";
import { MoviePageWrapper } from "./movieStyles";
import Link from "next/link";
import { icons } from "@/lib/icons/icon";
export const MoviesList = () => {

  const moviesList = useMoviesList();
  const [click, setClick] = React.useState(false);

  const rotate = () => {
    setClick(true);

    setTimeout(() => setClick(false), 2000);
  };
  return (
    <MoviePageWrapper>
      <h2 className="text-[2vw] font-extrabold">Latest movies</h2>
      <Grid mt={5}>
        {moviesList.map((movie, index) => {
          const { id } = movie;
          return (
            <Grid.Col
              span={1.5}
              key={index}
              aria-flowto="20px"
              onClick={rotate}
              className={click ? `animations` : null}
            >
              <Flex className="img_Wrapper">
                <Link href={`/movies_details/${id}`}>
                  <Image
                    src={movie.large_cover_image}
                    alt="images"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                  <Flex
                    direction={"column"}
                    className="text_Wrapper absolute top-0 left-0  items-center justify-center w-full h-full font-extrabold text-[1.3vw] text-white"
                  >
                    {icons.star}
                    <h2>{movie.rating}</h2>
                    <h2 className="break-words w-[150px] text-center text-[1vw]">
                      {movie.genres?.map((i) => i + "/")}
                    </h2>
                  </Flex>
                </Link>
              </Flex>
              <Flex
                justify={"space-between"}
                className="font-semibold text-[.7vw]"
              >
                <h2>{movie.title}</h2>
                <h2>{movie.year}</h2>
              </Flex>
            </Grid.Col>
          );
        })}
      </Grid>
    </MoviePageWrapper>
  );
};
