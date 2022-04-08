import { Box, Button} from '@chakra-ui/react';

export const appIcons = () => {
    return(
        <Box
            padding={4}
            maxW='500px'
            display='flex'
            justifyContent='flex-start'>
                {/*<Button margin={5}>Download IOS</Button>*/}
                <Button>Download Android</Button>
        </Box>
    )
}