import { Box, Heading, Text } from '@chakra-ui/react';

export const Info = (): JSX.Element => {
  return (
    <Box
        padding={10}
        background='black'
        display='flex'
        flexDirection='row'
        flex-wrap='wrap'
        cursor='pointer'>
        <Box
          margin={5}
          padding={4}
          borderRadius={20}
          border='1px solid white'>
            <Box>
              <Heading
                color='white'>
                  Polygon
              </Heading>
            </Box>
            <Box>
                <Text
                  color='white'>
                  Gnosis Safe: 0x73932cc65df8865b10F339D6Ef9dE5E4830C14Ff 
                </Text>
                <Text
                  color='white'>
                    Orbyt Token: 0x73932cc65df8865b10F339D6Ef9dE5E4830C14Ff
                </Text>
                <Text
                  color='white'>
                    NFT: 0x73932cc65df8865b10F339D6Ef9dE5E4830C14Ff
                </Text>
            </Box>
        </Box>
    </Box>
  )
};