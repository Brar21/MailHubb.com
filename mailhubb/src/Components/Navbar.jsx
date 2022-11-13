import { AiOutlineGlobal, AiOutlineSearch } from "react-icons/ai";
import { Box, Text, Image, Heading } from '@chakra-ui/react';
import Buttons from "./Button";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';

function Navbar() {
    const { state, Logout, logindata,login } = useContext(AuthContext);
    console.log(logindata,"Brar")
    return <>
        <Box w='100%' display='flex'bg='white' justifyContent='space-between' alignItems='center' p='1.5rem 3rem' position='sticky' top='0'>
            <Box display='flex' gap="2.5rem" fontWeight='600' fontSize={20}>
                <Link to='/products'>Products</Link>
                <Link to='/resources'>Resources</Link>
                <Link to='/inspiration'>Inspiration</Link>
                <Link to='/pricing'>Pricing</Link>
            </Box>
            
            <Box>
                <Link to='/'> <Image w='200px' src="https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-6/315534644_112414675016034_348437843538408388_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=lGynbLk3oCUAX9Kndme&_nc_ht=scontent.fluh3-2.fna&oh=00_AfA35fscErz_RYZMpfXxwY_axRHHzfvcAyT3ytS1ssZj0g&oe=6375ABBF"></Image>
                </Link>
            </Box>
            <Box display='flex' gap='1rem'>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Link textAlign='end'  >
                        <Text fontSize={20} fontWeight={500} textAlign='end'>Sales:</Text>
                        <Text fontSize={20} fontWeight={500}>+1(800) 315-5939</Text>
                </Link>
                <Link  >
                        <Text fontSize={28} m='0 1rem'><AiOutlineGlobal /></Text>
                </Link>
                <Link >
                        <Text fontSize={28}><AiOutlineSearch /></Text>
                </Link>
            </Box>
                {state.isAuth ? <Heading fontSize={30} display='flex' fontWeight='500' m={4}><Text m={0.5} fontSize='35px'><CgProfile /></Text>{logindata.login.email}</Heading> :<Link to="/signup">
                    <Buttons col='#ffe200' text="Sign Up" />
                </Link>}
                {state.isAuth ? <Buttons text="Logout" onclick={Logout} /> : <Link to="/login">
                    <Buttons text="Log In" col="none" />
                </Link>}
            </Box>
        </Box>
    </>
}
export default Navbar;