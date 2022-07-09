import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {opacity: 1, scale: 1 }
}

export const Phone = (): JSX.Element => {
    const [ token ] = React.useState<any>([
        {
            name: "Ethereum", amount:  0.1 
        }, 
        {
            name: "Matic", amount:  2.6
        }, 
        {
            name: "USDC", amount:  5.7
        }
    ])
    const [total] = React.useState<any>("R 3706.60") 

    const getTotal = (amount: number) => {
        const totalAmount = 100 * amount;
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
            overflowY={'hidden'}
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
                            key={item.name}
                            initial={'hidden'}
                            animate='visible'
                            variants={variants}
                            whileHover={{scale: 1.1}}>
                            <Box
                                padding='10px'
                                marginTop='20px'
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                justifyContent='flex-start'
                                borderRadius='15px'>
                                <Box
                                    width='45px'
                                    height='45px'
                                    borderRadius='50%'
                                    background='#0DFFAC'>
                                </Box>
                                <Box
                                    marginLeft='20px'>
                                    <Heading
                                        as='h3'
                                        color='#0DFFAC'>
                                        {`R ${getTotal(Math.floor(item.amount))}`}
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