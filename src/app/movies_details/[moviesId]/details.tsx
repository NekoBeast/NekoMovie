"use client";
import React, { useState } from "react";
import { useDetail } from "@/hooks/useDetails/useMovieDetails";
import { useMoviesList } from "@/hooks/useMovies/useMovies";
import { Button, Flex, Image, Rating } from "@mantine/core";
import { useParams } from "next/navigation";
import { DetailPageWrapper } from "./detaiStyel";
import Link from "next/link";
import { icons } from "@/lib/icons/icon";
import { PageWrapper } from "@/lib/styled/pageWrapper";
import { Download } from "@/components/download/download";

export const Details = () => {
  // onClick event
  const [click, setclicked] = useState(false);
  console.log("🚀 ~ Details ~ click:", click);

  const { moviesId } = useParams();
  const movieDetail = useDetail(moviesId);
  const moviesList = useMoviesList();
  // const genres = moviesList;
  const { torrents } = movieDetail;
  // console.log("🚀 ~ Details ~ random:", random);

  const show = () => {
    setclicked(!click);
  };

  return (
    <PageWrapper>
      <DetailPageWrapper>
        <Flex columnGap={40}>
          <Flex direction={"column"} rowGap={10}>
            <Image
              src={movieDetail?.large_cover_image}
              alt={movieDetail?.title}
              w={"300px"}
              style={{
                borderRadius: "10px",
              }}
            />

            {/* ------------------------ Button-Section------------------- */}
            <Button onClick={show}>
              <Flex columnGap={10} align={"center"} justify={"center"}>
                <h2>{icons.monitir_down}</h2>
                <h2 className="text-[1vw]">Download</h2>
              </Flex>
            </Button>

            {/* Download -------------------- section */}

            {click && (
              <div className="onStart absolute w-screen h-screen flex flex-col items-center justify-center left-0 z-10 top-0">
                 <h2>neko</h2>
                <Download />
              </div>
            )}
          </Flex>

          <Flex direction={"column"} className="space-y-5 w-[700px]">
            <h2 className="text-[2.5vw] font-extrabold overflow-hidden break-words w-[]">
              {movieDetail?.title}
            </h2>
            <div className="text-[1.5vw] font-extrabold ">
              <h2>{movieDetail?.year}</h2>
              <h2>{movieDetail.genres?.map((i) => i + "/" + " ")}</h2>
            </div>
            <Flex direction={"column"} rowGap={5}>
              <Flex columnGap={20} className="items-center">
                <h2 className="font-extrabold text-[1.2vw]">Available in:</h2>
                {torrents?.map((torrent, index) => (
                  <a href={torrent.url} key={index}>
                    <Button>
                      <h2>{torrent.quality}</h2>
                      <h2>.{torrent.type}</h2>
                      <h2>{torrent.video_codec}</h2>
                    </Button>
                  </a>
                ))}
              </Flex>
              <Flex columnGap={10}>
                {icons.star}
                <h2 className="font-medium">{movieDetail.rating}</h2>
              </Flex>
            </Flex>
            {/* <Rating defaultValue={movieDetail.rating}/> */}
            {/* {Math.floor(Math.random() * movieDetail?.year)} */}
          </Flex>

          {/* ///////////////////////////-------------------------- */}
          <div className=" absolute flex flex-wrap w-[480px]  h-[650px] overflow-hidden gap-5 p-5 right-12">
            {moviesList.map((movie, index) => {
              const { id } = movie;
              return (
                <Flex className="img_Wrapper relative" key={index}>
                  <Link href={`/movies_details/${id}`}>
                    <Image
                      src={movie.large_cover_image}
                      alt={movie.title}
                      w={"200px"}
                      style={{
                        borderRadius: "5px",
                      }}
                    />
                    <Flex
                      direction={"column"}
                      className="text_Wrapper absolute top-0 left-0  items-center justify-center w-full h-full font-extrabold text-[1.5vw] text-white"
                    >
                      {icons.star}
                      <h2>{movie.rating}</h2>
                      <h2 className="break-words overflow-hidden w-[150px] text-center text-[1.3vw]">
                        {movie.genres?.map((i) => i + "/")}
                      </h2>
                    </Flex>
                  </Link>
                </Flex>
              );
            })}
          </div>
        </Flex>
        <div className="description font-semibold mt-5">
          <p className="w-[65%] overflow-hidden break-words">
            {movieDetail.description_full}
          </p>
        </div>
        <Flex></Flex>
      </DetailPageWrapper>
    </PageWrapper>
  );
};
