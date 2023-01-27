import React from 'react'
import { HStack, Icon, Text, StackProps, Box } from '@chakra-ui/react'
import { MoneyBackGuaranteeIcon, noSetupFunction, NoMonthlySubscription } from '../icons/Icon'

interface FeatureProps extends StackProps {
    icon: ElementType
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props
    return (
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px' />
            <Text fontSize={'18px'} fontWeight='700' textAlign='left' color={'black'}>{children}</Text>
        </HStack>
    )
}

export function Features() {
    return (
        <Box w={'1024px'} m='auto' pt='60px' pb='32px' bgColor='white'>
            <HStack px='48px' spacing={'20px'}>
                <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
                <Feature icon={noSetupFunction}>No setup fees 100% hassle-free</Feature>
                <Feature icon={NoMonthlySubscription}>No monthly subscription Pay once and for all</Feature>
            </HStack>
        </Box>
    )
}