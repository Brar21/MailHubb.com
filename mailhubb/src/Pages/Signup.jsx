import { Box, Image, Input, Button, Text, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Checkbox } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'

function Signup() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return <>
        <Box width='100%' h='full' display='flex' borderRight='30rem solid #ffe200'>

            <Link href='/'> <Image w='200px' p='1.5rem' src="https://lh3.googleusercontent.com/IY-hoFjQZjeS_jWGsL1tJMagrA4ar-tW_-Dxj2yhCUen7R6Q_hyhH7SnRRHWxUybMHoDpeJaINJjU_YhHnBWStit7KK7ucIcPeGjELazJd5dLlLvyD5HrDWLMeteDM2gOr_T0eVaX8J8W-r0AqjPg6F2qsKBjVdmDwhMgJJ0bLLyLGm--uPUbGuVUwrUVXLT0fldzZ-1FQU1VzdASyFw8yon-mbJDJPo8rdEim1RN49bpCfVk6wSaYvbL0aiPIpKbNpaCreZVTZ7xGO-zL-IXu_nriLuiePsy23hwykWPwVpdhepLMNnnxNQ6YBRWTEjaNnHvxgMurNIlCFWjImXYYISEYInEz2hYc4PPoug43FrcrrtQHWjmKId9_DNasdz-UhDaxR_MfzNBDa38naua0C1Y3hd4CB_keJwvh3nVjOsdZVcYed0P-dHThVfPcQjW7tlP2pN1IyXwnKRKfh574pe9YkFAdVXf_lRf6p0IZDjIyv60IXf-OdacnWoA0Rr44Xj6o710gdo_2ZmZmF4ZeUmmdodngSYoxJu5x_U1vXTe93JqfuHKyqWgIEMnQJmqdcmv6p_CEiONHxMRfbjlUE7-PoHyZngnlNUDDyyfGqcxmxMs0tACGmXDaaSs-E2hDupgMEM4D3VeyZFM_d30gACfQW_FBeVvX7tPJ5i8Frg1e3Uvci15lqcArRyQU7bV-ieFRPuOVhyvn22jJgm08E5QTpsqp1dizNu6Vwa_YC0JX8phXlhmQC6sh03tj2VfLcjkaqi8KNPaiBFzxb4E1eJmtiMVfkGuutBX6xVU8_svF2rTS3uwGRISPgCHwAqj6Xx2nUlspwuLCR6mM_C9eAiaCIf0GGyXRQkAsxyjsDvld80Ck7CvvAkJ_7tmT8ctiRrldwH5_j2KlZmYBciy5l8hHxYv4lI4ePFKjrz7OkjKmlw9OIScYbYk2yut9LwAAXZN-o0IKGMzd_jBOrtPV2PzGNGc0bO_hAD9Vbgx9v2kI_8nbGp8g=w356-h105-no?authuser=0"></Image>
            </Link>
            <Box display='flex' w='100%' h='full'   flexDirection='row'  >
                <Box w='50%' h='full' m='10rem auto 0'>
                    <Heading textAlign='start' fontFamily='mono' fontSize='32px'>Sign up for Mailchimp</Heading>
                    <Text textAlign='start' mb={5}>Create a free account or <Link color='blue' className='Link' href="/login" sx={{
                        '.Link:hover &': {
                            color: 'green.500',
                        },
                    }}>log in</Link></Text>
                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input mb="1rem" />
                        <FormLabel>Username</FormLabel>
                        <Input mb="1rem" />
                        <Box display='flex' justifyContent='space-between'>
                            <FormLabel>Password</FormLabel>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none' fontSize='20px' textAlign='center'>
                                {show ? <Text display='flex' gap='2'><IoIosEye /> Show</Text> : <Text display='flex' gap='2'><IoIosEyeOff /> Hide</Text>}
                            </Button>
                        </Box>

                        <Input type={show ? 'text' : 'password'} mb="1rem" />
                        <Box>
                            <Checkbox size='lg' w='100%' mb='25px'> <Text pt='20px' textAlign='start' ml='10px' fontSize='15px'>I don't want to receive emails about Mailhubb and related intuit product and feature updates, marketing best practices, and promotions from Mailhubb.</Text> </Checkbox>
                            <Text textAlign='start'>By creating an account, you agree to our <Link color='blue' textDecoration='underline' href="#">Terms</Link> and have read and acknowledge the <Link color='blue' textDecoration='underline' href="#">Global Privacy Statement.</Link></Text>
                        </Box>
                        <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='solid' borderRadius='none' p='0px 42px' mt='30px' fontSize='16px'>
                                Sign Up
                            </Button>
                        </Stack>
                        <Text textAlign='start' mt='1rem'>Invisible reCAPTCHA by Google <Link color='blue' textDecoration='underline' href="#">Privacy Policy</Link> and <Link color='blue' textDecoration='underline' href="#">Terms of Use.</Link></Text>
                    </FormControl>
                    <Box mt="18%" ml='-53%'>
                        <Text fontSize={13} textAlign="start" color="gray.500">©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC.</Text>
                        <Text fontSize={13} textAlign="start" color="gray.500"><Link color='blue' textDecoration='underline' href="#">Cookie Preferences</Link> , <Link color='blue' textDecoration='underline' href="#">Privacy</Link> and <Link color='blue' textDecoration='underline' href="#">Terms</Link></Text>
                    </Box>
                </Box>
                <Box w='10%'>
                    <Image mt='5rem' h='700px' pl='50rem' src='https://login.mailchimp.com/release/1.1.1f25f1d5410212a154de37493105bd1c6fdbead55/images/brand_assets/illos/art-hero-flowers.png'></Image>
                </Box>
            </Box>

        </Box>
    </>
}
export default Signup;