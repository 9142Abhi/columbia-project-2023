import React from 'react'

import { HStack, Tooltip,Flex, Box,Image, Input } from '@chakra-ui/react'
const Heading = () => {
    const handleClick=()=>{
        console.log()
    }
  return (
    <Flex height={20} bgColor="black" color="white" alignItems={'center'} justifyContent="space-between">
    <Flex justifyContent="space-between" alignItems={"center"}  height={20} w="54%">
    
    

    <Image h={20} w="30%"  src='data:image/jpeg;base64,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' alt='Dan Abramov' />

     <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Men 
    </Tooltip>
     <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Women
    </Tooltip>
     <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Kids
    </Tooltip>
     <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Footwear
    </Tooltip>
    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Activity
    </Tooltip>
    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Featured
    </Tooltip>
    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
             Winter Sale
    </Tooltip>
    
    </Flex>
    <Flex mr={10} border="1px solid white" alignItems={'center'} borderRadius="10px" padding="1px" w={'16%'}>
    <Input placeholder='Search' border="none"/>
    <Image src='https://th.bing.com/th/id/OIP.qLuxHdfKKkG47NiLD0O_ngHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7' w={8} h={8} bgColor="white"/>
    </Flex>
    </Flex>
  )
}

export default Heading
