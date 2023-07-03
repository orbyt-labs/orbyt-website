import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Phone } from "./phone";

export const Main = (): JSX.Element => {
  return (
    <Box
      zIndex={0}
      paddingTop={20}
      background="black"
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
      width="100vw"
      flexWrap={["nowrap", "nowrap", "nowrap", "wrap"]}
      overflowX="hidden"
      height={["40vh", "40vh", "60vh", "90vh"]}
      alignItems={["center", "center", "center", "center"]}
      justifyContent={["center", "center", "center", "center"]}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        margin="0px auto"
        minW={["90%", "90%", "90%", "50%"]}
      >
        <Box
          display={["none", "none", "none", "flex"]}
          minHeight={["150px", "100px", "100px", "100px"]}
          width={["100%", "100%", "100%", "200px"]}
        />
        <Box
          width={["100%", "100%", "100%", "50%"]}
          display="flex"
          flexDirection="column"
          alignItems={["flex-end", "flex-end", "flex-end", "flex-end"]}
          cursor="pointer"
          justifyContent={["flex-start", "center", "center", "center"]}
        >
          <Heading
            className="gradient-text"
            maxWidth="800px"
            fontFamily="SF-PRO-ROUNDED-HEAVY"
            fontSize={["50px", "60px", "90px", "100px"]}
          >
            OPEN SOURCE WALLET
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};
