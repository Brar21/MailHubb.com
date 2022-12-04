import { Box, Image, Input, Button, Text, Stack, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Checkbox } from '@chakra-ui/react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate,Link } from 'react-router-dom';

function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const { handleSign, handleLogin, SubmitSign,state, SubmitLogin, signUpdata, logindata, sign, login } = useContext(AuthContext);
    const { email, password } = login;
    if (state.isAuth)
    {
        return <Navigate to='/'></Navigate>
        }
    console.log(logindata, login)
    return <>
        <Box width='100vw' h='full'  bg='yellow' display='flex'>
            <Box w='36%' h='100vh' bg='white' className='Link' borderLeft='10px solid #ffe200' >
                <Box>
                    <Link to='/'> <Image w='200px' src="https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-6/315534644_112414675016034_348437843538408388_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=8L5rfAJryx0AX_4KJfK&_nc_ht=scontent.fluh3-2.fna&oh=00_AfAv61tMRlXYaFEXCO9ZNaWD4N1ig4jm4H0265--9jjb_w&oe=63915B3F"></Image>
                    </Link>
                </Box>
                <Box w='60%' m='20% auto' display='flex' flexDirection='column' gap={3}>
                    <Heading textAlign='start' fontFamily='mono' fontSize='32px'>Log In</Heading>
                    <Text textAlign='start' display='flex' mb={5}>Need  a MailHubb account ?  <Link to="/signup"><Text color='blue' fontWeight='500' ml={2} _hover={{textDecoration:"underline"}}>Create an account</Text> </Link></Text>
                    <FormControl >
                      
                        <FormLabel>Username or Email</FormLabel>
                        <Input mb="1rem" name='email' value={email} onChange={handleLogin} />
                        <Box w='100%' display='flex' justifyContent='space-between'>
                            <FormLabel>Password</FormLabel>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none' fontSize='20px' textAlign='center'>
                                {show ? <Text display='flex' gap='2'><IoIosEyeOff /> Hide</Text> : <Text display='flex' gap='2'><IoIosEye /> Show</Text>}
                            </Button>
                        </Box>

                        <Input type={show ? 'text' : 'password'} name='password' value={password} onChange={handleLogin} mb="1rem" />
                        <Stack direction='row' spacing={4} align='center' w='100%'>
                            <Button w='100%' onClick={SubmitLogin} colorScheme='teal' variant='solid' borderRadius='none' p='0px 42px' mt='30px' fontSize='16px'>
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