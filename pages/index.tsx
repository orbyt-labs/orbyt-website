import React from "react";
import type { NextPage } from "next";
import { Main } from "../components";
import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="a simple wallet to send and recieve crypto"
        />
      </Head>
      <Main />
      <Box width="100vw" minHeight="10px" background={"black"}></Box>
    </>
  );
};

export default Home;
