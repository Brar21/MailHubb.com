import { Heading, Box, Text, Image, Link } from "@chakra-ui/react";
import Buttons from "../Components/Button";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im"
function Home() {

    return <>
        <Navbar />
        <Box>
            <Box bg='white' width='100%' m='4rem auto' display='flex' flexDirection='column' gap={10}>
                <Heading fontSize='48px' fontFamily='monospace'>Turn Emails into Revenue</Heading>
                <Text fontSize='24px' fontFamily='monospace'>
                    Win new customers with the #1 email marketing and automations brand* that <br /> recommends ways to get more opens, clicks, and sales.
                </Text>
                <Buttons col="#ffe200" w="8%" m=" auto " text="Sign Up" />
            </Box>
            <Box w='100%' display='flex' flexDirection='row' flexWrap='nowrap'>
                <Box textAlign='center'>
                    <Link position='absolute' fontSize='24px'>Convert with Automations</Link>
                    <Image h='77%' src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80" />
                    <Box h='20vh' bg='#d99536'>
                        <Text fontSize='20px' textAlign='start'>Send the right message at right time to convert more customers.</Text>
                        <Buttons text="Learn more" m="2rem 5rem 0rem -15rem" col="none" />
                    </Box>
                </Box>
                <Box>
                    <Link fontSize='24px' position='absolute'>Optimize with AI & Analytics</Link>
                    <Image h='77%' src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80" />
                    <Box h='20vh' bg='#e7b75f'>
                        <Text fontSize='20px' textAlign='start'>Get AI-assisted suggestions to help make your content more engaging.</Text>
                        <Buttons text="Learn more" m="2rem 5rem 0rem -15rem" col="none" />
                    </Box>
                </Box>
                <Box>
                    <Link position='absolute' mr='20rem' fontSize='24px'>Target with Segmentation</Link>
                    <Image h='77%' src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80" />
                    <Box h='20vh' bg='#efeeea' m='auto'>
                        <Text fontSize='20px' textAlign='start'>
                            Boost customer loyalty by predicting the right ones to target.</Text>
                        <Buttons text="Learn more" m="2rem 5rem 0rem -15rem" col="none" />
                    </Box>
                </Box>
                <Box>
                    <Link position='absolute' fontSize='24px'>Sync with Integrations</Link>
                    <Image h='77%' src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80" />
                    <Box h='20vh' bg='#fdf8ea'>
                        <Text fontSize='20px' textAlign='start'>Connect more tools, get more data, save time, and make better decisions.</Text>
                        <Buttons text="Learn more" m="2rem 5rem 1rem -15rem" col="none" />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Heading fontSize='48px' m='2.5rem' fontFamily='monospace'>Find the right plan</Heading>
                <Box w='80%' m='auto' display='flex'flexDirection='row'>
                    <Box textAlign='start' border='1px solid black' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Premium</Heading>
                        <Text mb='1rem'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
                    <Text>Starts at</Text>
                    <Text display='flex'><FaRupeeSign /><Heading>23,000</Heading></Text>
                        <span>/month based on 10,000 contacts*</span>
                        <Box display='flex' flexDirection='column' m='2rem 0 1rem' gap='1rem'>
                            <Text display='flex' gap={5}>
                                <BsCheckLg /><span>Phone & Priority Support</span>  
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Max Contacts: Unlimited
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Custom-Coded and Pre-built Email Templates
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Multivariate and A/B Testing
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg /> Enhanced Automated Customer Journeys
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Predictive Segmentation
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                 <BsCheckLg />  Dedicated Onboarding Specialist
                            </Text >
                        </Box>
                    </Box>
                    <Box textAlign='start' border='1px solid black' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Standard</Heading>
                        <Text mb='1rem'>Sell even more with personalization, optimization tools, and enhanced automations.</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>1,150</Heading></Text>
                        <span >/month based on 500 contacts*</span>
                        <Box display='flex' flexDirection='column' m='2rem 0 1rem' gap='1rem'>
                        <Text display='flex' gap={5}>
                                <BsCheckLg />  24/7 Email & Chat Support
                            </Text>
                            <hr />
                        <Text display='flex' gap={5}>
                                <BsCheckLg />  Max Contacts: 100,000
                            </Text>
                            <hr />
                        <Text display='flex' gap={5}>
                                <BsCheckLg />  Custom-Coded and Pre-built Email Templates
                            </Text>
                            <hr />
                        <Text display='flex' gap={5}>
                                <BsCheckLg />   A/B Testing
                            </Text>
                            <hr />
                        <Text display='flex' gap={5}>
                                <BsCheckLg />   Enhanced Automated Customer Journeys
                            </Text>
                            <hr />
                        <Text display='flex' gap={5}>
                                <BsCheckLg />  Predictive Segmentation
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />   Dedicated Onboarding Specialist
                            </Text >
                        </Box>
                    </Box>
                    <Box textAlign='start' border='1px solid black' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Essentials</Heading>
                        <Text mb='1rem'>Send the right content at the right time with testing and scheduling features.</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>770</Heading></Text>
                        <span>/month based on 500 contacts*</span>
                        <Box display='flex' flexDirection='column'm='2rem 0 1rem' gap='1rem'>
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  24/7 Email & Chat Support
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Max Contacts: 50,000
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Custom-Coded and Pre-built Email Templates
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />   A/B Testing
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Basic Automated Customer Journeys
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />  Predictive Segmentation
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />   Dedicated Onboarding Specialist
                            </Text >
                        </Box>
                    </Box>
                    <Box textAlign='start' border='1px solid black' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Free</Heading>
                        <Text mb='1rem'>Easily create email campaigns and learn more about your customers.</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>0</Heading></Text>
                        <span>/month based on 500 contacts*</span>
                        <Box display='flex' flexDirection='column' m='2rem 0 1rem' gap='1rem'>
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Email support for first 30 days
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Max Contacts: 500
                            </Text>
                            <hr />
                            <Text display='flex' gap={5}>
                                <BsCheckLg />  Custom-Coded and Pre-built Email Templates
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />    A/B Testing
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross /> Basic Automated Customer Journeys
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />   Predictive Segmentation
                            </Text>
                            <hr />
                            <Text display='flex' color='gray.400' gap={5}>
                                <ImCross />   Dedicated Onboarding Specialist
                            </Text >
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Footer />
    </>
}
export default Home;