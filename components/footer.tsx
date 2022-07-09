import { Box, Text } from '@chakra-ui/react';

export const Footer = (): JSX.Element => {
    return (
      <Box
        maxWidth='100vw'
        minWidth='100vw'
        background='black'
        padding={5}
        display='flex'
        flexDirection={['column','column', 'column','row']}
        min-height='100px'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'>
                <Box
                    display={['none', 'none', 'flex', 'flex']}
                    width={['0%', '0%', '100%', '60%',]}>
                    <Text
                        size='sm'
                        color='gray'>
                            This web page and any other contents published on this website shall not constitute investment advice, financial advice, trading advice, or any other kind of advice, and you should not treat any of the website's content as such. You alone assume the sole responsibility of evaluating the merits and risks associated with using any information or other content on this website before making any decisions based on such information. You understand that the crypto market is characterised by high volatility, and you should be aware of the concrete possibility of losing the entirety of the funds you allocated in the crypto market. You should refrain from using funds you can't afford to lose when purchasing cryptocurrencies and other digital tokens.
                    </Text>
                </Box>
                <Box
                    padding={2}
                    marginTop={5}>
                    <Text
                        size='sm'
                        color='white'>
                        © 2022 Orbyt Labs PTY LTD. All rights reserved.
                    </Text> 
                </Box>
            </Box>
      </Box>
    )
};