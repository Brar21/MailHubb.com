
import { Box,Heading,Link } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Text
} from '@chakra-ui/react';
import { FaRupeeSign } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im"
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Buttons from "../Components/Button";
function Products() {

    return <>
        <Navbar />
        <Box bg='#efeeea' mt='-1.1%'>
            <Heading fontSize='48px' p='3.5rem' fontFamily='monospace'>Find the right plan</Heading>
            <Box w='80%' m='auto' display='flex' flexDirection='row'>
                <Box textAlign='start' border='1px solid black' bg='white' p='2rem'>
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
                <Box textAlign='start' border='1px solid black' bg='white' p='2rem'>
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
                <Box textAlign='start' border='1px solid black' bg='white' p='2rem'>
                    <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Essentials</Heading>
                    <Text mb='1rem'>Send the right content at the right time with testing and scheduling features.</Text>
                    <Text>Starts at</Text>
                    <Text display='flex'><FaRupeeSign /><Heading>770</Heading></Text>
                    <span>/month based on 500 contacts*</span>
                    <Box display='flex' flexDirection='column' m='2rem 0 1rem' gap='1rem'>
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
                <Box textAlign='start' border='1px solid black' bg='white' p='2rem'>
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
            <Text m='1rem'><Link>*Overages</Link> apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</Text>
            <Buttons col="#ffe200" m="2rem" text="See all plan details" />
        </Box>
        <Box width='70%' m='auto'>
            <Heading m='1rem' textAlign='start' fontSize='32px' fontWeight='medium'>FAQs</Heading>

            <Accordion m='2rem 0' allowMultiple>


                <AccordionItem p='1rem'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                    <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace' >
                                        How does digital asset management work?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} pt="1rem" textAlign="start" fontSize='18px'>
                                Using a digital asset management marketing software can make it much easier for you to store and manage digital assets. As your brand grows, you’re sure to amass more and more photos, documents, and other digital assets in your marketing campaigns. Whether you’re publishing product images on social media accounts or updating your website with unique graphics, you may end up with a lot of digital assets and no place to store them.

                                This is where digital asset management for marketing comes into play. Using Mailchimp, you can sync, store, and manage all of your digital assets in one convenient place.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem p='1rem'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                    <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                        What is content studio in Mailchimp?

                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="start" fontSize='18px' >
                                With Mailchimp’s content studio, you can store and manage all of the images, files, and other assets you’ve uploaded over time. You can also connect your store and social media accounts to automatically import and store digital assets as well.

                                In addition to storage, Mailchimp’s content studio has a range of other valuable features. For instance, you can use the Creative Assistant—an AI-powered design tool—to quickly generate sleek designs that are true to your brand. You can also edit or change your brand’s logo and easily filter through all of your brand’s digital assets.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem p='1rem'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                    <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                        What is digital asset management?

                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="start" fontSize='18px'>
                                Digital asset management describes the practice of storing and managing creative digital assets for your brand. With marketing asset management software, you can store any digital assets you use and quickly retrieve them when you need them.

                                Mailchimp’s digital asset management system is a digital marketing storage solution that doubles as a creative tool. Using our small business asset management software, you can keep track of your brand’s content in order to stay organized and strengthen future marketing campaigns.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>   <AccordionItem p='1rem'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                    <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                        What is digital asset management software?

                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="start" w="50%" fontSize='18px'>
                                Digital asset management marketing software is a system that streamlines the process of storing and organizing digital assets. Using Mailchimp's marketing asset management software, you can conveniently upload, edit, and store a wide variety of digital assets. This can make it easier to devise marketing campaigns and repurpose your brand’s content.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>   <AccordionItem p='1rem'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                    <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                        Why digital asset management?

                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="start" fontSize='18px'>
                                It’s important for any brand to engage in digital asset management for marketing. Between posting on social media, undertaking email marketing campaigns, and redesigning your company website, you’re sure to create, alter, and remove many digital assets. So where do all of those digital assets go?

                                It would be unwise to permanently delete brand assets such as product images, campaign files, and graphics that were created especially for your brand. When you store your digital assets, you are able to better understand how your brand and your marketing strategies have progressed and grown. Additionally, you may want to repurpose images, graphics, and more for future campaigns.

                                With digital marketing storage from Mailchimp, you can keep all of your digital assets in one centralized location. This way, you can stay organized and work toward creating a holistic brand image for years to come.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
        <Footer/>
    </>
}
export default Products;