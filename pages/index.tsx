import React from "react";
import type { NextPage } from "next";
import { Main } from "../components";
import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";
import { appIcons as AppIcon } from "../components/appIcon";

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
      <Box width="100vw" minHeight="10px" background={"white"}>
        <AppIcon />
      </Box>
    </>
  );
};

export default Home;
