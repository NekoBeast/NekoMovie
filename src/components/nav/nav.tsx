"use client";
import React, { useState } from "react";
import { NavWrapper, SearchInputs } from "./navStyle";
import { Button, Center, Flex, Image, Input } from "@mantine/core";
import { useMoviesList } from "@/hooks/useMovies/useMovies";
import Link from "next/link";
import { icons } from "@/lib/icons/icon";

export const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  // console.log("🚀 ~ Nav ~ searchInput:", searchInput);
  const moviesList = useMoviesList();
  const searchInputs = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const searchMoviesList = moviesList.filter((movie) => {
    if (
      searchInput !== "" &&
      movie.title?.toLowerCase().includes(searchInput)
    ) {
      return true;
    }
  });
  return (
    <NavWrapper>
      <Flex columnGap={30} className="nav_bar bg-black h-10" align={"center"}>
        <div className="clip_filter">
          <div className="header">
            <a href="/">
              <h2 className="mt-5">NekoBeast</h2>
            </a>
          </div>
        </div>
        <Input
          placeholder="Search"
          onChange={searchInputs}
          rightSection={icons.search_icons}
        />
      </Flex>

      <SearchInputs>
        <div className="search_scroll relative h-[108px] bottom-0 rounded-md overflow-y-scroll gap-5 bg-[#6e6e6e] mt-5">
          {searchMoviesList.map((movie, index) => {
            const { id } = movie;
            return (
              <Link
                href={`/movies_details/${id}`}
                key={index}
                className="rounded-md "
              >
                <Flex
                  columnGap={20}
                  className="bg-[#0000007d] m-1 h-[100px]  rounded-md text-white font-semibold text-[.8vw]"
                  align={"center"}
                >
                  <Image
                    src={movie.large_cover_image}
                    alt={movie.title}
                    radius={5}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <Flex direction={"column"}>
                    <h2 className="text-[1.3vw]">{movie.title}</h2>
                    <h2>{movie.genres?.map((i) => i + "/")}</h2>
                  </Flex>
                </Flex>
              </Link>
            );
          })}
        </div>
      </SearchInputs>
    </NavWrapper>
  );
};
