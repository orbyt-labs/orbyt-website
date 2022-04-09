import { Box, Button} from '@chakra-ui/react';
import GooglePlay from '../public/play-store.svg'
import Image from 'next/image';

export const appIcons = () => {
    return(
        <Box
            padding={4}
            maxW='500px'
            display='flex'
            cursor={'pointer'}
            justifyContent='flex-start'>
                {/*<Button margin={5}>Download IOS</Button>*/}
                <Image 
                    src={GooglePlay}/>
        </Box>
    )
}