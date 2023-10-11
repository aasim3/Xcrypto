import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Avatarsrc ='https://wallpaperaccess.com/full/788614.jpg'

const Footer = () => {
  return (
<Box 
bgColor={"blackAlpha.900"} 
color={"whiteAlpha.700"} 
minH={"48"} 
px={"16"}
py={["16","8"]}
 >
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"} >
    <VStack w={"full"} alignItems={["center","flex-start"]} >
     <Text fontWeight={"bold"} >About Us</Text>   
     <Text letterSpacing={"widest"}
     textAlign={["center","left"]} 
     >GOW.Inc@contact.com</Text>
     <Text textAlign={"end"}>Not Your Keys, Not Your Coins</Text>
    </VStack>
    <VStack>
    <Avatar boxSize={"28"} mt={["3","0"]} src={Avatarsrc}/>
    <Text textColor={"red.600"}>GOW Inc.</Text>
       
    </VStack>
    </Stack>
 </Box>
    )
}

export default Footer