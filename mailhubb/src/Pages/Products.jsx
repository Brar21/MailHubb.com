
import { Box,Heading,Image } from "@chakra-ui/react";
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
import { Link } from 'react-router-dom';
function Products() {

    return <>
        <Navbar />
        <Box w='100%'   m='auto'>
            <Box w='100%'  display='flex'  flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Box p='10rem 7rem'>
                    <Text fontSize={14} ml={19} fontWeight='500'>Digital Marketing Storage</Text>
                    <Heading fontSize='48px' ml={19} fontFamily='mono'>On brand marketing assets, every time</Heading>
                    <Text m='3rem 0' ml={19} fontSize={28}>Use content studio to sync and manage digital assets including photos, graphics and other marketing files so your campaigns are consistent.</Text>
                    <Buttons text='Start Building Content' col='#ffe01b'  m='1rem' />
                </Box>
                <Image w={1130} h={910} src="https://eep.io/images/yzco4xsimv0y/2Qk5spMGPk6pKEZ7QZftjS/5ee1b1974245cdedd663375d61f1585c/Mailchimp-Content-Studio-Hero.png?w=1520&fm=webp&q=70"></Image>
            </Box>
        </Box>
        <Box w='100%' bg='#e7b75f'  m='6rem auto 0'>
            <Box w='100%' p='4rem' display='flex' pt='6rem' flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={1040} h={663} src="https://eep.io/images/yzco4xsimv0y/Hpaa3qth7QfgWM98yjalY/7379aefe6d76b6e09079e660fbe2401e/Mailchimp-Content-Studio-AUI.png?w=842&fm=webp&q=80"></Image>
                <Box p='12rem'>
                  
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Digital asset management for marketers</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Upload or sync your digital marketing assets, edit them directly in the content studio, and then use them across all of your marketing campaigns.</Text>
                   
                </Box>
            </Box>
        </Box>
        <Box bg='#efeeea' >
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
            <Link to='/pricing'><Buttons col="#ffe200" m="2rem" text="See all plan details" /></Link> 
        </Box>
        <Box w='100%'  m='6rem auto 0'>
            <Box w='100%' p='4rem' display='flex'  flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Box p='10rem'>

                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Bring all your work together</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Organize all your creative digital assets in one Mailchimp account, so you’ll always have access to the files you need. When you're ready to launch a new campaign, our marketing storage platform will have your back.</Text>

                </Box>
                <Image w={1040} h={663} src="https://eep.io/images/yzco4xsimv0y/2faWyLgdDHto0Q2u5zWAYk/5a81ff0c272a594dc75879c3504a3032/Mailchimp-Content-Studio-Bring-All-Your-Work-Together.png?w=842&fm=webp&q=80"></Image>

            </Box>
        </Box>
        <Box w='100%' m='1rem auto 0rem'>
            <Box w='100%' p='4rem' display='flex'  flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Box p='6rem'>

                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Storage and editing tools at your fingertips</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Customize the look of your marketing assets with beautiful graphics and designs that bring your brand to life. Our content studio includes a built-in photo editor so you can resize your images, add filters and text, adjust brightness and contrast, and a whole lot more.</Text>

                </Box>
                <Image w={1040} h={663} src="https://eep.io/images/yzco4xsimv0y/652KXmSRG9792xwyYEnQI/0328f29c99aefd0a0260143f0f4633de/Mailchimp-Content-Studio-Storage-and-Editing-Tools.png?w=842&fm=webp&q=80"></Image>

            </Box>
        </Box>
        <Box w='60%' m='auto' textAlign='start'>
            <Heading fontSize={48} fontWeight='500' fontFamily='mono'>Content Studio - Benefits</Heading>
        </Box>
        <Box w='100%' m='6rem auto 0'>
            <Box w='90%' p='0 4rem'  display='flex'  flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={840} h={563} src="https://eep.io/images/yzco4xsimv0y/2kj7g03Cnm7RnQs96r72YE/5ff511445b5bbdaabc5e97fb7f97960b/Mailchimp-Content-Studio-Manage-All-Your-Assets.png?fm=webp&q=80"></Image>
                <Box p='8rem'>
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Manage all your digital marketing assets</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Storage in marketing is important. Easily store your photos, documents, and other campaign files in one convenient location, so you’ll always be able to find exactly what you're looking for. And when you connect your store and social media accounts, we'll pull in all of your product images for you, too.</Text>
                </Box>
            </Box>
        </Box>
        <Box w='100%' m='0 auto 1rem'>
            <Box w='90%' p='4rem' display='flex'  flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={740} h={463} src="https://eep.io/images/yzco4xsimv0y/57XYC7DpZlPKFlj4Z8CRiO/88565f2afb408a95932b02e3c9e278cf/Mailchimp-Content-Studio-Cohesive-Brand-Experience.png?fm=webp&q=80"></Image>
                <Box p='8rem'>
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Create a cohesive brand experience</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>Set a default logo to include in each marketing campaign, then re‑use your digital assets to keep all your marketing—across multiple channels—consistent and on‑brand.</Text>
                </Box>
            </Box>
        </Box>
        <Box w='100%' m='0rem auto 1rem'>
            <Box w='90%' p='4rem' display='flex' flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={740} h={463} src="https://eep.io/images/yzco4xsimv0y/4knnhC5s4ZIXHY7PHTpYQo/5819a182a87e08d0348b92d99c918e3a/Mailchimp-Content-Studio-From-Concept-to-Publish-Quickly.png?fm=webp&q=80"></Image>
                <Box p='8rem'>
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Quickly go from concept to publish</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>When you upload your images and other creative assets to our marketing asset management software, you can add them to any campaign in just a few clicks.</Text>
                </Box>
            </Box>
        </Box>
        <Box w='100%' m='0rem auto 1rem'>
            <Box w='90%' p='4rem' display='flex' flexDirection='row' m='auto' textAlign='start' gap={10}>
                <Image w={740} h={463} src="https://eep.io/images/yzco4xsimv0y/oPmNynO3mkJUaKS7GlLGZ/c8e131e83e3742e84e3dfc95eae09f40/Mailchimp-Content-Studio-Collaborate-With-Your-Team.png?fm=webp&q=80"></Image>
                <Box p='8rem'>
                    <Heading fontSize='40px' ml={19} fontFamily='mono'>Collaborate with your whole team</Heading>
                    <Text m='3rem 0' ml={19} fontSize={24}>The content studio makes it easy to find, share, and repurpose content, so your team can work on campaigns together—and everyone stays on the same page.</Text>
                </Box>
            </Box>
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