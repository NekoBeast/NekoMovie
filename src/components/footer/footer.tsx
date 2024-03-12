"use client";
import React, { useState } from "react";
import { FooterWrapper } from "./footerStyle";
import { Button, Flex, Textarea } from "@mantine/core";

export const Footer = () => {
  const [state, setState] = useState();
  const [submit, setSubmit] = useState();
  console.log("🚀 ~ Footer ~ submit:", submit);

  const [mousePointer, setMousePointer] = useState({
    x: 0,
    y: 0,
  });
  console.log("🚀 ~ Footer ~ submit:", state);

  const input = (e: any) => {
    const inputValue = e.target.value.toLowerCase();
    setState(inputValue);
  };

  return (
    <FooterWrapper>
      <Flex direction={"column"}>
        <Textarea
          placeholder="Comment"
          autosize
          minRows={14}
          maxLength={1150}
          onChange={input}
          w={700}
        />

        <Flex className="comments">
          
        </Flex>
        <Button onClick={() => setSubmit(state)}>Subbmit</Button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </Flex>
    </FooterWrapper>
  );
};
