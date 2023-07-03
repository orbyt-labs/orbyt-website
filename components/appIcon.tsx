import { Box, Button } from "@chakra-ui/react";
import GooglePlay from "../public/assets/images/google-play-light.svg";
import Image from "next/image";

export const appIcons = (): JSX.Element => {
  const goTo = (link: string) => {
    console.log(link);
    window.open(link, "_blank");
  };

  return (
    <Box
      padding={5}
      display="flex"
      flexWrap="wrap"
      justifyContent={"space-evenly"}
      cursor={"pointer"}
    >
      <Box
        onClick={() =>
          goTo(
            "https://play.google.com/store/apps/details?id=mindsgn.studio.orbyt"
          )
        }
      >
        <Image alt="google play button" src={GooglePlay} />
      </Box>
    </Box>
  );
};
