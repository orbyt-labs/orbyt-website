import { Box, Text, Heading } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { appIcons as AppIcon } from './appIcon';

export const Footer = () => {
    const goTo = (link: string) => {
        window.open(link);
    }

    return (
      <Box
        maxWidth='100vw'
        minWidth='100vw'
        background='gray'
        padding={5}
        display='flex'
        flexDirection='row'
        min-height='100px'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'>
            <Box   
                margin={5}
                display='flex'
                flexDirection='column'
                justifyContent='center'>
                <Text
                    color='white'>
                    made with ❤️ from Africa
                </Text>
                <AppIcon />
            </Box>
            <Box
                display='flex'
                flex-direction='row'>
                <Box
                    cursor="pointer"
                    padding={2}
                    onClick={() => {
                        goTo("https://twitter.com")
                    }}>
                    <FaTwitter
                        size={35} />
                </Box>    
                <Box
                    cursor="pointer"
                    padding={2}
                    onClick={() => {
                        goTo("https://discord.gg/H49fTDDX")
                    }}>
                    <FaDiscord
                        size={35} />
                </Box>
                <Box
                    cursor="pointer"
                    padding={2}
                    onClick={() => {
                        goTo("https://github.com/orbytDAO")
                    }}>
                    <FaGithub
                        size={35} />
                </Box>
            </Box>
      </Box>
    )
};