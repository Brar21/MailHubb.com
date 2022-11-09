import { Link } from "react-router-dom";
import { Box, Text, Image, Button } from '@chakra-ui/react'
import Buttons from "./Button";

function Navbar() {

    return <>
        <Box w='100%' display='flex' justifyContent='space-between' m='1rem'>
            <Box display='flex' gap="2rem">
                <Text>Products</Text>
                <Text>Resources</Text>
                <Text>Inspiration</Text>
                <Text>Pricing</Text>
            </Box>
            
            <Box>
                <Image src="https://login.mailchimp.com/release/1.1.1f25f1d5410212a154de37493105bd1c6fdbead55/images/brand_assets/illos/art-hero-flowers.png"></Image>
            </Box>
            <Box display='flex' gap='1rem'>
                <Buttons text="Log In"/>
                
                <Buttons col='#ffe200' text="Sign Up" />
            </Box>
        </Box>
    </>
}
export default Navbar;