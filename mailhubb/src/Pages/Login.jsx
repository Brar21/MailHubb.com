import { Box, Image, Input, Button, Text, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Checkbox } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'

function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return <>
        <Box width='100vw' h='full'  bg='yellow' display='flex'>
            <Box w='36%' h='100vh' bg='white' className='Link' borderLeft='10px solid #ffe200' >
                <Link href='/'> <Image w='200px' p='2rem' src="https://lh3.googleusercontent.com/IY-hoFjQZjeS_jWGsL1tJMagrA4ar-tW_-Dxj2yhCUen7R6Q_hyhH7SnRRHWxUybMHoDpeJaINJjU_YhHnBWStit7KK7ucIcPeGjELazJd5dLlLvyD5HrDWLMeteDM2gOr_T0eVaX8J8W-r0AqjPg6F2qsKBjVdmDwhMgJJ0bLLyLGm--uPUbGuVUwrUVXLT0fldzZ-1FQU1VzdASyFw8yon-mbJDJPo8rdEim1RN49bpCfVk6wSaYvbL0aiPIpKbNpaCreZVTZ7xGO-zL-IXu_nriLuiePsy23hwykWPwVpdhepLMNnnxNQ6YBRWTEjaNnHvxgMurNIlCFWjImXYYISEYInEz2hYc4PPoug43FrcrrtQHWjmKId9_DNasdz-UhDaxR_MfzNBDa38naua0C1Y3hd4CB_keJwvh3nVjOsdZVcYed0P-dHThVfPcQjW7tlP2pN1IyXwnKRKfh574pe9YkFAdVXf_lRf6p0IZDjIyv60IXf-OdacnWoA0Rr44Xj6o710gdo_2ZmZmF4ZeUmmdodngSYoxJu5x_U1vXTe93JqfuHKyqWgIEMnQJmqdcmv6p_CEiONHxMRfbjlUE7-PoHyZngnlNUDDyyfGqcxmxMs0tACGmXDaaSs-E2hDupgMEM4D3VeyZFM_d30gACfQW_FBeVvX7tPJ5i8Frg1e3Uvci15lqcArRyQU7bV-ieFRPuOVhyvn22jJgm08E5QTpsqp1dizNu6Vwa_YC0JX8phXlhmQC6sh03tj2VfLcjkaqi8KNPaiBFzxb4E1eJmtiMVfkGuutBX6xVU8_svF2rTS3uwGRISPgCHwAqj6Xx2nUlspwuLCR6mM_C9eAiaCIf0GGyXRQkAsxyjsDvld80Ck7CvvAkJ_7tmT8ctiRrldwH5_j2KlZmYBciy5l8hHxYv4lI4ePFKjrz7OkjKmlw9OIScYbYk2yut9LwAAXZN-o0IKGMzd_jBOrtPV2PzGNGc0bO_hAD9Vbgx9v2kI_8nbGp8g=w356-h105-no?authuser=0"></Image>
                </Link>
                <Box w='60%' m='20% auto' display='flex' flexDirection='column' gap={3}>
                    <Heading textAlign='start' fontFamily='mono' fontSize='32px'>Log In</Heading>
                    <Text textAlign='start' mb={5}>Need  a MailHubb account ?  <Link color='blue' className='Link' href="/signup" sx={{
                        '.Link:hover &': {
                            color: 'green.500',
                        },
                    }}>Create an account</Link></Text>
                    <FormControl >
                      
                        <FormLabel>Username or Email</FormLabel>
                        <Input mb="1rem" />
                        <Box w='100%' display='flex' justifyContent='space-between'>
                            <FormLabel>Password</FormLabel>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none' fontSize='20px' textAlign='center'>
                                {show ? <Text display='flex' gap='2'><IoIosEyeOff /> Hide</Text> : <Text display='flex' gap='2'><IoIosEye /> Show</Text>}
                            </Button>
                        </Box>

                        <Input type={show ? 'text' : 'password'} mb="1rem" />
                        <Stack direction='row' spacing={4} align='center' w='100%'>
                            <Button w='100%' colorScheme='teal' variant='solid' borderRadius='none' p='0px 42px' mt='30px' fontSize='16px'>
                                Log In
                            </Button>
                        </Stack>
                        <Box w='100%' m='2rem 6rem' textAlign='center'>
                            <Checkbox size='lg' w='100%' mb='25px'> <Text pt='1px' textAlign='center' ml='5px' fontSize='15px'><b>Keep me logged in</b></Text> </Checkbox>
                        </Box>
                        <Link color='blue' textDecoration='underline' href="#">Forget username?</Link> . <Link color='blue' textDecoration='underline' href="#">Forget password?</Link><br /><Link color='blue' textDecoration='underline' href="#">Can't Log in ?</Link> 
                    </FormControl>

                </Box>
                <Box mt="5%">
                    <Text fontSize={13} textAlign="start" color="gray.500">©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC.</Text>
                    <Text fontSize={13} textAlign="start" color="gray.500"><Link color='blue' textDecoration='underline' href="#">Cookie Preferences</Link> , <Link color='blue' textDecoration='underline' href="#">Privacy</Link> and <Link color='blue' textDecoration='underline' href="#">Terms</Link></Text>
                </Box>
            </Box>
            <Box w='70%' >
                <Image h='full' w='100%'  src='https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg'/>
            </Box>
        </Box>
    </>
}
export default Login;