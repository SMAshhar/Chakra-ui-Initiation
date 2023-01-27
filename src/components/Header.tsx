import React from "react"
import {Box, Heading, Text} from "@chakra-ui/react"

export function Header() {
    return(
        <Box pb='112px' as='section'>
        <Box  w='1440px' h='397px' color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198' px='32px' >
            <Heading as='b' fontWeight='800' fontSize='48px' color='#F7FAFC'>
                Simple pricing for your business</Heading>
            <Text fontFamily={'Inter'} fontWeight='500' fontSize={'24px'} color='#F7FAFC' pt='16px'>
                Plans that are carefully crafted to suit your business</Text>
        </Box>
        </Box>
    )
}