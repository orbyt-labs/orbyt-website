import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {opacity: 1, scale: 1 }
}

export const Phone = () => {
    const [token, setToken] = React.useState<any>([
        {
            name: "Ethereum", price:  0.1 
        }, 
        {
            name: "Matic", price:  2.6
        }, 
        {
            name: "USDC", price:  5.7
        }
    ])
    const [total, setTotal] = React.useState<any>("R 3706.60") 

    const calculateTotal = () => {
    }

    const getTotal = () => {
        const totalAmount = 0.3
        return totalAmount;
    }
    

    return (
      <motion.div
        initial={'hidden'}
        animate='visible'
        variants={variants}
        whileHover={{scale: 1.1}}>
        <Box
            minWidth='300px'
            maxHeight={'500px'}
            background='white'
            max-height='650px'
            padding='10px'
            margin={10}
            overflowY={'hidden'}
            marginBottom='50px'
            border='2px solid white'
            cursor='pointer'
            borderRadius='15px'>    
            <Box
                background='black'
                borderRadius='15px'
                display='flex'
                flexDirection='column'
                alignItems='space-between'
                justifyContent='space-evenly'
                height='150px'
                padding='10px'>
                    <Heading
                        size={'sm'}
                        color='white'>
                        {`orbyt.eth`}
                    </Heading>
                    <Heading
                        color='white'>
                        {total}
                    </Heading>
                    <Box
                        width='100%'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='flex-end'
                        display='flex'>
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
                    background='#F15A24'
                    padding='10px'
                    width='45%'
                    display='flex'
                    justifyContent='center'
                    borderRadius='15px'
                    >
                    <Text
                        fontSize={'18px'}
                        fontWeight='bold'
                        color='white'>
                        {`SEND`}
                    </Text>
                </Box>
                <Box
                    background='#F15A24'
                    padding='10px'
                    width='45%'
                    display='flex'
                    justifyContent='center'
                    borderRadius='15px'
                    >
                    <Text
                        fontSize={'18px'}
                        fontWeight='bold'
                        color='white'>
                        {`RECIEVE`}
                    </Text>
                </Box>
            </Box>
            {
                token.map((item: any) => {
                    return(
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
                                        {`R ${getTotal()}`}
                                    </Heading>
                                    <Text
                                        color='#A6A6A6'>
                                        {`${item.amount} ${item.name}`}
                                    </Text>
                                </Box>
                            </Box>
                        </motion.div>
                    )
                })
            }
        </Box>
      </motion.div>
    )
};