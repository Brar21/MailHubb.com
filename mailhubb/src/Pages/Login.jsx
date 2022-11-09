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
        <Box width='100vw' h='100vh' bg='yellow' display='flex'>
            <Box w='30%' h='100%' bg='white' pr='6rem'  display='flex' className='Link'borderLeft='10px solid yellow' >
                <Link className='Link' href='/'>
                    <Image w='105px' h='105px' src='https://lh3.googleusercontent.com/ep0W-AqQRFlDsvJppYegbZb09v7qmuXPSJRnokB6QZDM9K1hW6wxhYuHbFd5_ffDX3301tHC_y5pJVFlNK5U0APG5qFIG3hdFOTTOYlmSUkDPrE1wI24780s8jPA-UV9NbRmaxwmOhyiBF4byU_qg6SxJ-f4UrY0sHbmUTJILW8Wj9wr94CJzgxWZz-TqYb9JMdgmOS7mWuUXnhaOp6ZK4KjYrtN-3hGLHeWvRLQo598ofKzUaRj-YA7z0sZP_lh9VGHr9yW1PQ530TlW2NXV2d-UrXQCEkHm0m8PfSTKf0uJcM_xuoSxGHZN1sAZZ4zALSX_4InItRVLyyaw01Wg2iSuyZJbwhylxqGKFBj5jHK2tgNVlN-KFEPEX-rciN9MLzww7fzDHka7SVlQhKuLI29koUsXA12Bbu4d9OD3R3YskZTojLwDURY1Mbw3eBU2A8U9jwAzGw64mYP58BorjkkTlMNqE8YyfL3gTAk4lUTAbED8gs-jcInuQpAKB9HgB2ZjeSN1cGI5UCiw348LpmeSUesq7VuLjR5hrW3TrgqPeSNVh_fWUFM7eGVKS1z4d8o-RxznAtFe6fJuD3LBEfdvWVy1KQXCE_dU38R7aF9blPFuTiU5FstbqffP16-sjab094R88QKuWkXLZV3hSua9ZihQm73xC0zPEus3Hi3Cej2SU71j5OqL8uVJzKLaLoEg2EYBaJVZMxnksxdUUP2sugDkf_2K6A7TTAV8BipUttorpEMHKf0DakEPOifYiTuTQAYc1nZQZLc3cTxXViSvypqnTFtEmqUHMtwapCDq2bq3jUAM-VBc7g4965fQG1FZ-zIbCuKlHod_EK2nfeyJ-5pUvLk5_G7iYiIOUiuBI2E62xJtxyPdxIjaYPUWhgOMwnGQshYw4y6qc3rKLZvqTlfT3AGSHOjyIH3_GeM_bYV8TpBabBQ1JyA5VGLYc3UgdgaMytd-B-YxtmFScfnb6ry9GR0TvrWZFEiFhS1cDRjvNvr7g=s500-no?authuser=0'></Image>
                </Link>
                <Box w='70%' m='auto' display='flex' flexDirection='column' gap={3}>
                    <Heading textAlign='start' fontFamily='mono' fontSize='32px'>Log In</Heading>
                    <Text textAlign='start' mb={5}>Need  a MailHubb account ?  <Link color='blue' className='Link' href="/login" sx={{
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
                        <Box w='100%' m='auto' textAlign='center'>
                            <Checkbox size='lg' w='100%' mb='25px'> <Text pt='1px' textAlign='center' ml='5px' fontSize='15px'><b>Keep me logged in</b></Text> </Checkbox>
                        </Box>
                        <Link color='blue' textDecoration='underline' href="#">Forget username?</Link> . <Link color='blue' textDecoration='underline' href="#">Forget password?</Link><br /><Link color='blue' textDecoration='underline' href="#">Can't Log in ?</Link> 
                    </FormControl>

                </Box>
            </Box>
            <Box w='70%' h='100vh'>
                <Image h='100vh' w='100%'  src='https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg'/>
            </Box>
        </Box>
    </>
}
export default Login;