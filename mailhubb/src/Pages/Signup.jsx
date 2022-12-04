import { Box, Image, Input, Button, Text, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Checkbox } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate,Link } from 'react-router-dom';

function Signup() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const{ handleSign, handleLogin, SubmitSign, SubmitLogin, signUpdata, logindata, sign, login }=useContext(AuthContext);
    const { email, password, username } = sign;
    console.log(signUpdata, sign)
    if (signUpdata.length > 0) {
        return <Navigate to='/login'></Navigate>
    }
    return <>
        <Box width='100%' h='full' display='flex' borderRight='30rem solid #ffe200'>

            <Box>
                <Link to='/'> <Image w='400px' src="https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-6/315534644_112414675016034_348437843538408388_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=8L5rfAJryx0AX_4KJfK&_nc_ht=scontent.fluh3-2.fna&oh=00_AfAv61tMRlXYaFEXCO9ZNaWD4N1ig4jm4H0265--9jjb_w&oe=63915B3F"></Image>
                </Link>
            </Box>
            <Box display='flex' w='100%' h='full'   flexDirection='row'  >
                <Box w='50%' h='full' m='10rem auto 0'>
                    <Heading textAlign='start' fontFamily='mono' fontSize='32px'>Sign up for Mailchimp</Heading>
                    <Text display='flex' textAlign='start' mb={5}>Create a free account or <Link to="/login" ><Text color='blue' ml={2} fontWeight='500'>log in</Text></Link></Text>
                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input mb="1rem" name='email' value={email} onChange={handleSign} />
                        <FormLabel>Username</FormLabel>
                        <Input mb="1rem" name='username' value={username} onChange={handleSign}/>
                        <Box display='flex' justifyContent='space-between'>
                            <FormLabel>Password</FormLabel>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none' fontSize='20px' textAlign='center'>
                                {show ? <Text display='flex' gap='2'><IoIosEye /> Show</Text> : <Text display='flex' gap='2'><IoIosEyeOff /> Hide</Text>}
                            </Button>
                        </Box>

                        <Input type={show ? 'text' : 'password'} name='password' value={password} onChange={handleSign} mb="1rem" />
                        <Box>
                            <Checkbox size='lg' w='100%' mb='25px'> <Text pt='20px' textAlign='start' ml='10px' fontSize='15px'>I don't want to receive emails about Mailhubb and related intuit product and feature updates, marketing best practices, and promotions from Mailhubb.</Text> </Checkbox>
                            <Text textAlign='start'>By creating an account, you agree to our <Link color='blue' textDecoration='underline' href="#">Terms</Link> and have read and acknowledge the <Link color='blue' textDecoration='underline' href="#">Global Privacy Statement.</Link></Text>
                        </Box>
                        <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='solid' borderRadius='none' p='0px 42px' mt='30px' fontSize='16px' onClick={SubmitSign}>
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