"use client";
import React from "react";
import { DownloadPageWrapper } from "./download_syle";
import { Button, Flex } from "@mantine/core";
import { useDetail } from "@/hooks/useDetails/useMovieDetails";
import { useParams } from "next/navigation";
import { icons } from "@/lib/icons/icon";

export const Download = () => {
  const { moviesId } = useParams();
  const movieDetail = useDetail(moviesId);
  const { torrents } = movieDetail;
  return (
    <DownloadPageWrapper>
        <div className="blur_box"></div>

      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        className=" text-center text-white "
      >
        <h1   className="text-white z-20 text-[1.5vw] font-bold" >select your quality</h1>

        {/* download ---------- quality */}

        <Flex justify={"center"} align={"center"} mt={50} gap={30}>
          {torrents?.map((torrent, index) => {
            return (
              <Flex key={index} direction={"column"} className="z-10">
                {/* icons */}
                <Flex
                  align={"center"}
                  justify={"center"}
                  direction={"column"}
                  className="icons relative"
                >
                  {icons.monitor}
                  <h2 className="absolute top-10 font-semibold">
                    {torrent.quality}
                  </h2>
                  <h2 className="capitalize font-bold text-[20px] text-amber-400">
                    {torrent.type}
                  </h2>
                </Flex>
                {/* Download --------------- link */}
                <div className="mt-9 w-[150px]">
                  <h2>{torrent.size}</h2>
                  <a href={torrent.url}>
                    <Button mt={5} leftSection={icons.monitir_down} style={{
                      width:"150px",
                      height:"45px",
                    }}>
                      {torrent?.quality}
                    </Button>
                  </a>
                </div>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </DownloadPageWrapper>
  );
};
