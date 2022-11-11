import { Box, Heading, Link, Text,Button, Select,Image  } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
function Footer() {
    
    return <>
      
        <Box bg='#dbd9d2'>
            <Box w='70%' m='auto' p='3rem' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' >
                <Heading fontSize='22px'>Related Links:</Heading>
                <Link textDecoration='underline'>Transactional email</Link>
                <Link textDecoration='underline'>
                    MailChimp vs. GoDaddy: Website Builder Review and Comparison
                </Link>
                <Link textDecoration='underline'>
                    Transactional emails
                </Link>
            </Box>
            <hr/>
            <Box w='60%' m=' 2rem auto' display='flex' gap={20}>
                <Box  display='flex' textAlign='start' gap={55}>
                    <ol ><strong>Products</strong>
                        <ul t><Link>Why Mailchimp?</Link></ul>
                        <ul><Link>
                            Product Updates
                        </Link></ul>
                        <ul><Link>
                            Email Marketing
                        </Link></ul>
                        <ul><Link>
                            Websites
                        </Link></ul>
                        <ul><Link>
                            Transactional Email
                        </Link></ul>
                        <ul><Link>
                            How We Compare
                        </Link></ul>
                        <ul>
                        <Link>
                            GDPR Compliance
                        </Link></ul>
                        <ul><Link>
                            Security
                        </Link></ul>
                        <ul> <Link>
                            Status
                        </Link></ul>
                        <ul> <Link>
                            Mobile App
                        </Link></ul>
                    </ol>
                    <ol><strong>Resources</strong>
                        <ul><Link>
                            Marketing Library
                        </Link></ul>
                        <ul><Link>
                            Free Marketing Tools
                        </Link></ul>
                        <ul><Link>
                            Marketing Glossary
                        </Link></ul>
                        <ul><Link>
                            Integrations Directory
                        </Link></ul>
                    </ol><ol><strong>Community</strong>
                        <ul><Link>
                            Agencies & Freelancers
                        </Link></ul>
                        <ul><Link>
                            Developers
                        </Link></ul>
                        <ul><Link>
                            Events
                        </Link></ul>
                    </ol><ol><strong>Comopany</strong>
                        <ul><Link>
                            Our Story
                        </Link></ul>
                        <ul><Link>
                            Newsroom
                        </Link></ul>
                        <ul><Link>
                            Annual Report
                        </Link></ul>
                        <ul><Link>
                            Careers
                        </Link></ul>
                        <ul><Link>
                            Accessibility
                        </Link></ul>
                    </ol><ol><strong>Help</strong>
                        <ul><Link>
                            Contact Us
                        </Link></ul>
                        <ul><Link>
                            Hire an Expert
                        </Link></ul>
                        <ul><Link>
                            Help Center
                        </Link></ul>
                        <ul><Link>
                            Talk to Sales
                        </Link></ul>
                    </ol>
                </Box>
                <Box w='20%'>
                    <Text textAlign='start'><strong>MailHubb</strong> Presents</Text> 
                    <Text textAlign='start' m='1rem 0'>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</Text>
                    <Button rightIcon={<AiOutlineArrowRight fontWeight='900' fontSize={25} />} border='none' colorScheme='black' variant='outline' _hover={{ bg: "yellow", mr: '10px', borderRadius: '50px', transition: "smooth", p: '10px 25px' }}>
                        <b> Check it out</b>
                    </Button>
                    <Text textAlign='start' m='1rem 0'><strong>
                        Courier
                    </strong></Text> 
                    <Text textAlign='start' m='1rem 0'>
                        Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.
                    </Text>
                    <Button rightIcon={<AiOutlineArrowRight fontWeight='900' fontSize={25} />} border="none" colorScheme='black' variant='outline' _hover={{ bg: "yellow",mr:'10px',borderRadius:'50px',transition:"smooth",p:'10px 25px' }}>
                        <b> Learn more</b>
                    </Button>
                </Box>
            </Box>
            <hr />
            <Box width='70%' display='flex' m='1rem auto' p='4rem'>
                <Box w='80%' display='flex' p="2rem 0" gap={8}>
                    <Image w='120px' h='50px' src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80" />
                    <Image w='120px' h='50px' src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"/>
                    <Box display='flex' gap={7} fontSize='28px' p="10px 0">
                        <AiFillFacebook />
                        <AiOutlineTwitter/>
                        <AiOutlineInstagram />
                        < AiFillLinkedin />
                        <AiFillYoutube />
                        <BsPinterest/>
                </Box>
                </Box>
                <Box w='50%' gap={10}>
                    <Select  w='150px' border='2px solid black' colorScheme='black' mb='1.5rem'>
                        <option value='option1'><b>English</b></option>
                        <option value='option2'><b>Italiano</b></option>
                        <option value='option3'><b>Deutsch</b></option>
                    </Select>
                    <Text textAlign='start' fontSize={14}>Pinterest
                        This page is now available in other languages.
                        English
                        ©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <strong><Link>Privacy</Link> | <Link>Terms</Link> | <Link>Cookie Preferences</Link></strong></Text>
                </Box>
            </Box>
        </Box>
    </>
}
export default Footer;