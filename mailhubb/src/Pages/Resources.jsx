import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Box, Divider, Heading, Text,Image } from "@chakra-ui/react";
import Buttons from "../Components/Button";
import { BsArrowRight } from 'react-icons/bs'
function Resources() {

    return <>
        <Navbar />
        <Box w='100%' bg='white' h='400px' m='auto'>
            <Box p='4rem 0 0'>
                <Heading fontSize='58px' fontFamily='mono'>Marketing Automation</Heading>
                <Text m='3rem 0 0' fontSize={26}>Your business can be always on—even when you're off.</Text>
            </Box>
        </Box>
        <Box w='100%' bg='#d8eacc' h='700px' m='auto'>
            <Box w='70%' p='4rem' display='flex' pt='6rem' flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={777} h={517} src="https://eep.io/images/yzco4xsimv0y/5WXmSbZWmW0fIZv2Mooxs3/03a02d2b18b167fd436678a97dbe1f49/ILLO_Spot_CustomerEmpathy_AnaLeovy_1300x1300.png?w=540&fm=webp&q=80"></Image>
                <Box p={10}>
                    <Text fontSize={14} ml={19} fontWeight='500'>CASE STUDY</Text>
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>How Captar Alunos doubled its client roster with automations</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>The education marketing agency shares how they thrived during the pandemic by using automations and an empathetic message.</Text>
                    <Buttons text='Read more' col='transparent' w='200px' m='1rem' />
                </Box>
            </Box>
        </Box>
        <Box m='4rem'>
            <Box w='70%' m='auto' p='2rem' >
                <Heading display='flex' textAlign='start' fontFamily='mono' fontSize={50} >CRM Automations<Text mt='1rem' ml='1rem' _hover={{ ml: '2rem' }}><BsArrowRight fontSize={35} /></Text></Heading>
                <Divider colorScheme='blue' m='1rem' />

                <Box display='flex' textAlign='start' gap={10} m='2rem 0'>
                    <Image w='145%' src="https://eep.io/images/yzco4xsimv0y/1lxfP6GfnxG6qpYI5qh2Yv/38095eae98aa8837d388777cc342e33a/1Artboard_2-100.jpg?w=760&fm=webp&q=80"></Image>
                    <Box m='5rem 0'>
                        <Text fontSize={14} ml={19} fontWeight='500'>BUSINESS TIPS</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>How to Improve Client Retention</Heading>
                        <Text fontSize='16px'>Measuring and improving client retention is essential for scalable business success. Apply these best practices.</Text>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='row' textAlign='start' gap={10}>
                    <Box _hover={{ w: '100%', cursor: 'pointer' }} w='33%'>
                        <Image src="https://eep.io/images/yzco4xsimv0y/5gcZbQJ5L00rnFwZeAx5z3/a1a5577735db5349ef73974520b55d23/marketing-strategies-to-grow-your-audience-thumbnail_1520.png?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{ color: "black" }} mt='1rem'>TOPIC EXPLAINER</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>7 Ways to Grow Your Audience</Heading>
                        <Text fontSize='16px'>New tactics and channels can help your business expand its reach</Text>
                    </Box>
                    <Box _hover={{ w: '100%', cursor: 'pointer' }} w='33%'>
                        <Image src="https://eep.io/images/yzco4xsimv0y/2xl524dsvaAWS80mIm0Aum/3ff230e0f986956b771b345f11c0f6ad/Thumbnail-Article.png?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{ color: "black" }} mt='1rem'>NEWS</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>
                            19 Tips to Grow Your Business in 2020</Heading>
                        <Text fontSize='16px'>We rounded up advice from some of our savviest customers about how to succeed in the new year.</Text>
                    </Box>
                    <Box _hover={{ w: '100%', cursor: 'pointer' }} w='33%'>
                        <Image src="https://eep.io/images/yzco4xsimv0y/601PxJtAxE032RSvcUqO6k/62acbfd953afe9fb1ff1d13d1eb42f62/wis126-thumbnail-v2.png?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{ color: "black" }} mt='1rem'>SUCCESS STORIES</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>Make a Connection in Real Life with Postcards</Heading>
                        <Text fontSize='16px'>How Onward Reserve stays true to their brand and meets their audience where they are.</Text>
                    </Box>

                </Box>
            </Box>
        </Box>
        <Box w='100%' bg='#c5dbf2' h='600px' m='auto'>
            <Box w='70%' p='4rem' display='flex' pt='6rem' flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={477} h={317} src="https://eep.io/images/yzco4xsimv0y/yJTtJNbrrMIi6OaC8igGm/7c04d938f6ef7aec40cbaa158301ae55/hero-image-for-the-big-prize-a-case-study-in-automation.jpg?w=540&fm=webp&q=80"></Image>
               <Box p={3}>
                    <Text fontSize={14} ml={19} fontWeight='500'>CASE STUDY</Text>
                <Heading fontSize='40px' ml={19} fontFamily='mono'>The Big Prize: A Case Study in Automation</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Learn how Digital Impulse gets creative with content to help increase open rates and leverages social media tools as part of an overall marketing strategy.

                    Read more</Text>
                    <Buttons text='Read more' col='transparent' w='200px' m='1rem'  />
                </Box>
            </Box>
        </Box>
        <Box m='4rem'>
            <Box w='70%' m='auto' p='2rem' >
                <Heading display='flex' textAlign='start' fontFamily='mono' fontSize={50} >Email Automations<Text mt='1rem' ml='1rem' _hover={{ ml: '2rem' }}><BsArrowRight fontSize={35} /></Text></Heading>
                <Divider colorScheme='blue' m='1rem' />

                <Box display='flex' textAlign='start' gap={10} m='2rem 0'>
                    <Image w='145%' src="https://eep.io/images/yzco4xsimv0y/5o2W9zYCaxtlvzOzOO6tyT/3488d0667797905c3acb282324fc8f04/QuyCup_Meta.png?w=760&fm=webp&q=80"></Image>
                    <Box m='5rem 0'>
                        <Heading _hover={{textDecoration:"underline",cursor:"pointer"}} m='2rem 0' fontSize='24px'>How QuyCup Welcomed New E-Commerce Customers</Heading>
                        <Text fontSize='16px'>With expert help, a well-defined strategy, and timely communication, this sustainable drinkware brand got their online sales off the ground.</Text>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='row' textAlign='start' gap={10}>
                    <Box _hover={{w:'100%',cursor:'pointer'}} w='33%'>
                        <Image src="https://eep.io/images/yzco4xsimv0y/2LH0q5Kz3LrYQJYBJAQrnu/e0e0b10b540ad355a1b8881d7fda7c2c/SCC_SocialCard_Image-wCopy-1200x630.png?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{color:"black"}} mt='1rem'>EMAIL AUTOMATION</Text>
                        <Heading  _hover={{textDecoration:"underline",cursor:"pointer"}} m='2rem 0' fontSize='24px'>How Steel City Collectibles Became a Leader in Sports Memorabilia</Heading>
                        <Text fontSize='16px'>The sports collectibles retailer uses Mailchimp’s tools to help them build connections with their audience.</Text>
                    </Box>
                    <Box _hover={{ w: '100%',cursor:'pointer' }} w='33%'>
                        <Image  src="https://eep.io/images/yzco4xsimv0y/5FpHQq2zLwnyPmlV56Ju7o/f7484f3c1fe6e149913d177047b3b00e/Paid_newsletters_homepage_16_9.jpg?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{color:"black"}} mt='1rem'>BUSINESS TIPS</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>
                            Is this a model for success? Paid newsletters</Heading>
                        <Text fontSize='16px'>There are now specialist newsletters for topics ranging from cryptocurrency and the climate to compostable tote bags (that one might be made up). Independent and member supported, the paid newsletter has established itself as a growing media stream.</Text>
                    </Box>
                    <Box _hover={{ w: '100%',cursor:'pointer' }} w='33%'>
                        <Image src="https://eep.io/images/yzco4xsimv0y/4rbTNHXv6uK9LPuLFr12YR/213f9344ec571aeb100309e520c7f1e3/How_to_Create_a_Successful_Promotional_Strategy_that_Maximizes_Sales_Potential_THUMBNAIL_1520.png?w=760&fm=webp&q=80"></Image>
                        <Text fontWeight='600' color='gray.500' _hover={{color:"black"}} mt='1rem'>TOPIC EXPLAINER</Text>
                        <Heading _hover={{ textDecoration: "underline", cursor: "pointer" }} m='2rem 0' fontSize='24px'>How to Create a Successful Promotional Strategy that Maximizes Sales Potential</Heading>
                        <Text fontSize='16px'>Promotions can boost sales and build loyalty—here’s how to make the most of them.</Text>
                    </Box>

                </Box>
            </Box>
        </Box>
        <Box w='100%' bg='#ffe01b' h='500px' m='auto'>
            <Box p='4rem'>
                <Heading fontSize='58px' fontFamily='mono'>It's easy to get started</Heading>
                <Text m='3rem 0' fontSize={26}>And it's free. Two things that everyone loves.</Text>
                <Buttons text='Sign Up Free' col='#ffe01b' w='200px' m='3rem' />
            </Box>
        </Box>
        <Footer/>
    </>
}
export default Resources;