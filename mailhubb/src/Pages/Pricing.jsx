import Navbar from '../Components/Navbar';
import { Box, Flex, Heading, Image, Select } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Text
} from '@chakra-ui/react';
import { FaRupeeSign, FaCheck } from 'react-icons/fa';
import { Grid, GridItem } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
// import { Divider } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import Buttons from '../Components/Button';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { ImCross } from "react-icons/im";
function Pricing() {

    return (<>
        <Navbar />

        <Box w='70%' m='auto'>
            <Box w='100%' display='flex' m='auto'>
                <Text textAlign='center' p='1rem' fontSize='20px' fontWeight='500' bg='gray.200' border='1px solid gray.400' ml='20%'>How many contacts do you have? </Text>
                <Select w='20%' border='1px solid Darkgray' borderRadius='none' h='4rem' fontSize='20px' fontWeight='500' position='relative'>
                    <option value="500">500</option>
                    <option value="500">1,500</option>
                    <option value="500">2,500</option>
                    <option value="500">5,000</option>
                    <option value="500">10,00</option>
                    <option value="500">15,000</option>
                    <option value="500">20,000</option>
                    <option value="500">25,000</option>
                    <option value="500">30,000</option>
                    <option value="500">40,000</option>
                    <option value="500">50,000</option>
                    <option value="500">75,000</option>
                    <option value="500">130,000</option>
                    <option value="500">150,000</option>
                    <option value="500">200,000</option>
                    <option value="500">250,000+</option>
                </Select>
                <Select w='8%' border='none' fontSize='20px' fontWeight='700' ml='20%'>
                    <option value="inr">INR</option>
                    <option value="usd">USD</option>
                </Select>
            </Box>
            
                <Box>
                <Box w='100%' m='2rem 3rem 0rem 0rem' display='flex' flexDirection='row' position='sticky' top='6.6rem'>
                    <Box textAlign='start'w='15%' border='none'  display='flex' flexDirection='column' bg='white' p='2rem'>
</Box>
                    <Box textAlign='start' border='1px solid gray' display='flex' flexDirection='column' bg='white' p='2rem'>
                            <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Premium</Heading>
                            <Text mb='1rem'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
                            <Text>Starts at</Text>
                            <Text display='flex'><FaRupeeSign /><Heading>23,000</Heading></Text>
                        <span>/month </span>
                        <Buttons text='Buy now' col='#ffe200' m='1rem' />
<Text>*Overages apply if contact or email send limit is exceeded. Learn more</Text>
                    </Box>
                    <Box textAlign='start' border='1px solid gray' display='flex' flexDirection='column' bg='white' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Standard</Heading>
                        <Text mb='1rem'>Sell even more with personalization, optimization tools, and enhanced automations.</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>1,150</Heading></Text>
                        <span>/month </span>
                        <Buttons text='Buy now' col='#ffe200' m='1rem' />
<Text>*Overages apply if contact or email send limit is exceeded. Learn more</Text>
                    </Box>
                    <Box textAlign='start' border='1px solid gray' display='flex' flexDirection='column' bg='white' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Essentials</Heading>
                        <Text mb='1rem'>Send the right content at the right time with testing and scheduling features.</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>770</Heading></Text>
                        <span>/month </span>
                        <Buttons text='Buy now' col='#ffe200' m='1rem' />
<Text>*Overages apply if contact or email send limit is exceeded. Learn more</Text>
                    </Box>
                    <Box textAlign='start' border='1px solid gray' display='flex' flexDirection='column' bg='white' p='2rem'>
                        <Heading mb='1rem' fontSize='30px' fontFamily='monospace'>Free</Heading>
                        <Text mb='1rem'>Easily create email campaigns and learn more about your <br /> customers</Text>
                        <Text>Starts at</Text>
                        <Text display='flex'><FaRupeeSign /><Heading>0</Heading></Text>
                        <span>/month </span>
                        <Buttons text='Buy now' col='#ffe200' m='1rem' />
<Text>*Overages apply if contact or email send limit is exceeded. Learn more</Text>
                    </Box>
                </Box>
                <TableContainer w='100%'>
                    <Table variant='striped' colorScheme='teal'>
                        <Tbody>
                            <Tr>
                                <Td>Monthly Email Sends</Td>
                                <Td>150,000</Td>
                                <Td>6,000</Td>
                                <Td>5,000</Td>
                                <Td>2,500</Td>  
                            </Tr>
                            <Tr>
                                <Td>Maximum Contacts</Td>
                                <Td>Unlimited</Td>
                                <Td>100,00</Td>
                                <Td>50,000</Td>
                                <Td>500</Td>
                            </Tr>
                            <Tr>
                                <Td>Users</Td>
                                <Td>Unlimited</Td>
                                <Td>5 Seats</Td>
                                <Td>3 Seats</Td>
                                <Td>1 Seat</Td>

                            </Tr>
                            <Tr>
                                <Td>Customer Support</Td>
                                <Td>Phone & Priority Support</Td>
                                <Td>24/7 Email & Chat Support</Td>
                                <Td>24/7 Email & Chat Support</Td>
                                <Td>Email support for first 30 days</Td>
                            </Tr>
                            <Tr>
                                <Td>Pre-built Email Templates</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck /></Td>
                                <Td><FaCheck /></Td>
                                <Td><FaCheck /></Td>
                            </Tr>
                            <Tr>
                                <Td>300+ Integrations</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                            </Tr>  <Tr>
                                <Td>Basic Reporting & Analytics</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                            </Tr>  <Tr>
                                <Td>Forms & Landing Pages</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                            </Tr>  <Tr>
                                <Td>Creative Assistant</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                            </Tr>  <Tr>
                                <Td>Role-based Access</Td>
                                <Td>5 Roles</Td>
                                <Td>4 Roles</Td>
                                <Td>2 Roles</Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Remove Mailchimp Branding</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>A/B Testing</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Email Scheduling</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Automated Customer Journeys</Td>
                                <Td>Enhanced</Td>
                                <Td>Enhanced</Td>
                                <Td><FaCheck /></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Pre-built Journeys</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray' /></Td>
                            </Tr>  <Tr>
                                <Td>Custom-Coded Templates</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Predictive Segmentation</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Content Optimizer</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Send Time Optimization</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Dynamic Content</Td>
                                <Td><FaCheck/></Td>
                                <Td><FaCheck /></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>  <Tr>
                                <Td>Multivariate Testing</Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray' /></Td>
                            </Tr>  <Tr>
                                <Td>Comparative Reporting</Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>
                            <Tr>
                                <Td>Advanced Segmentation</Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>
                            <Tr>
                                <Td>Dedicated Onboarding Specialist</Td>
                                <Td><FaCheck/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                                <Td><ImCross color='gray'/></Td>
                            </Tr>
                        </Tbody>
                       
                    </Table>
                </TableContainer>
                    <Buttons text='Compare all features' col='white' m='3rem' />
                </Box>
                <Grid templateColumns='repeat(2, 1fr)' textAlign='start' gap={16} p='1rem' mb='8rem'>
                    <GridItem borderRight='2px solid' pr='1rem' >
                        <Heading fontSize='32px' fontWeight='400' >Also included: Free tools for getting your business online</Heading>
                        <Text m='1rem 0'>All Marketing plans come with Free website and commerce features, so you can build your dream online presence. But if you want more advanced tools for selling and scheduling, try combining your Marketing plan with a paid Websites & Commerce plan.</Text>
                        <Buttons text=" See Websites & Commerce plans" m="2rem 0 0" col='none' />
                    </GridItem>
                    {/* <Divider size='50px' colorScheme='facebook' display='flex' flexDirection='column'/> */}
                    <GridItem >
                        <Heading fontSize='32px' fontWeight='400'>Also included: Free tools for getting your business online</Heading>
                        <Text m='1rem 0'>Instead of paying a monthly recurring charge, you can buy email credits as needed through our Pay As You Go plan. It's best for infrequent senders.</Text>
                        <Buttons text="Learn more" m="3.5rem 0 0" col='none' />
                    </GridItem>
                    <GridItem borderRight='2px solid' >
                        <Heading fontSize='32px' fontWeight='400'>Two-factor authentication discount</Heading>
                        <Text m='1rem 0'>At Mailchimp, we’re serious about security. We offer a 10% discount for 1 month when you add two-factor authentication to your Mailchimp account with an app like Google Authenticator or SMS two-factor authentication.

                            Restrictions apply. See our full terms and conditions.</Text>
                        <Buttons text="Get started" m="2rem 0 0" col='none' />
                    </GridItem>
                    {/* <Divider size='50px' colorScheme='facebook' display='flex' flexDirection='column'/> */}
                    <GridItem >
                        <Heading fontSize='32px' fontWeight='400'>Rates for nonprofits and charities</Heading>
                        <Text m='1rem 0'>Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.</Text>
                        <Buttons text="Get started" m="2rem 0 0" col='none' />
                    </GridItem>
                </Grid>

                <Heading m='1rem' textAlign='start' fontSize='32px' fontWeight='medium'>FAQs</Heading>


                <Accordion m='2rem 0' allowMultiple>


                    <AccordionItem p='1rem'>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                        <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace' >
                                            What payment methods do you offer?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} pt="1rem" textAlign="start" fontSize='18px'>
                                    We accept all major credit cards, PayPal, and (in select countries) direct debit. We <br /> also support transactions in a range of currencies.
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
                                            How do I switch to a different plan?

                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign="start" fontSize='18px' >
                                    You can switch to a new plan at any time by going to the Billing page in your <br /> account. Select the plan you’d like to switch to and immediately start using new <br /> features.
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
                                            Can I buy credits instead?

                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign="start" fontSize='18px'>
                                    Yes. If you send emails infrequently and prefer to pay as you go, you can buy email <br /> credits as an alternative to a monthly plan.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>   <AccordionItem p='1rem'>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                        <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                            Do you have pricing for high-volume email senders?

                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign="start" w="50%" fontSize='18px'>
                                    We do indeed. If you have more than 200,000 contacts, we have a high-volume plan that can meet your needs.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>   <AccordionItem p='1rem'>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: "white", textDecoration: 'underline' }}>
                                        <Box flex='1' textAlign='left' fontSize='20px' fontFamily='monospace'>
                                            What happens if I hit my contact or sending limit?

                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign="start" fontSize='18px'>
                                    Mailchimp will automatically bill you for your overages. As long as you pay for your <br /> overages on time, we will not stop your campaigns or pause your account.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
                <Box mt='6rem'>
                    <Heading fontFamily='monospace' fontSize={48}>You’ll be in good company</Heading>
                    <Flex _hover={{ cursor: "pointer" }} direction='row' w='80%' m='5rem auto'>
                        <Image w='140px' h='18px' m='50px 55px' src="https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=260&fm=webp&q=70" />
                        <Image w='140px' h='115px' m='0 55px' src='https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=260&fm=webp&q=70' />
                        <Image w='231px' h='44px' m='40px 55px' src='https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=260&fm=webp&q=70' />
                        <Image w='231px' h='111px' m='0 55px' src='https://eep.io/images/yzco4xsimv0y/2fZXnWbDK8ugIaCW8Qus0i/1b8f1c4aa80dda874418e4bfa29b60e5/Sweat.png?w=260&fm=webp&q=70' />

                    </Flex>
                </Box>

            </Box>
            <Footer />
        </>)


}
        export default Pricing;