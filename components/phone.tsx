import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {opacity: 1, scale: 1 }
}

export const Phone = () => {
    return (
      <motion.div
        initial={'hidden'}
        animate='visible'
        variants={variants}
        whileHover={{scale: 1.1}}>
        <Box
            maxWidth='300px'
            background='black'
            max-height='650px'
            padding='10px'
            marginBottom='50px'
            border='2px solid white'
            cursor='pointer'
            borderRadius='15px'>
            <Box
                background='white'
                borderRadius='15px'
                display='flex'
                flexDirection='column'
                alignItems='space-between'
                justifyContent='space-evenly'
                height='150px'
                padding='10px'>
                    <Heading
                        color='#0DFFAC'>
                        {`R 3706.60`}
                    </Heading>
                    <Box
                        width='100%'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-between'
                        display='flex'
                        >
                            <Text
                                color='#0DFFAC'>
                                {`0x65r..9ixs6`}
                            </Text>
                            <Box
                                minWidth='50px'
                                minHeight='50px'
                                borderRadius='50%'
                                background='#0DFFAC'>
                            </Box>
                    </Box>
            </Box>
            <Box
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                display='flex'
                marginTop='20px'>
                <Box
                    background='#0E3665'
                    padding='10px'
                    width='45%'
                    display='flex'
                    justifyContent='center'
                    borderRadius='15px'
                    >
                    <Text
                        fontSize={'18px'}
                        fontWeight='bold'
                        color='#0DFFAC'>
                        {`SEND`}
                    </Text>
                </Box>
                <Box
                    background='gray'
                    padding='10px'
                    width='45%'
                    display='flex'
                    justifyContent='center'
                    borderRadius='15px'
                    >
                    <Text
                        fontSize={'18px'}
                        fontWeight='bold'
                        color='#0DFFAC'>
                        {`RECIEVE`}
                    </Text>
                </Box>
            </Box>
            <motion.div
                initial={'hidden'}
                animate='visible'
                variants={variants}
                whileHover={{scale: 1.5}}>
                <Box
                    background='#0E3665'
                    padding='10px'
                    marginTop='20px'
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    borderRadius='15px'>
                    <Box
                        width='25px'
                        height='25px'
                        borderRadius='50%'
                        background='#0DFFAC'>
                    </Box>
                    <Box
                        marginLeft='20px'>
                        <Heading
                            as='h3'
                            color='#0DFFAC'>
                            {`R 8.57`}
                        </Heading>
                        <Text
                            color='#A6A6A6'>
                            {`0.35 Matic`}
                        </Text>
                    </Box>
                </Box>
            </motion.div>
            <Box
                background='#0E3665'
                padding='10px'
                marginTop='20px'
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='flex-start'
                borderRadius='15px'>
                    <Box
                        width='25px'
                        height='25px'
                        borderRadius='50%'
                        background='#0DFFAC'>
                    </Box>
                    <Box
                        marginLeft='20px'>
                        <Heading
                            as='h3'
                            color='#0DFFAC'>
                            {`R 7800.57`}
                        </Heading>
                        <Text
                            color='#A6A6A6'>
                            {`667.35 RIC`}
                        </Text>
                    </Box>
            </Box>
        </Box>
      </motion.div>
    )
};