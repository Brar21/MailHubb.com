import { AiOutlineGlobal, AiOutlineSearch } from "react-icons/ai";
import { Box, Text, Image, Link } from '@chakra-ui/react';
import Buttons from "./Button";

function Navbar() {

    return <>
        <Box w='100%' display='flex'bg='white' justifyContent='space-between' alignItems='center' p='1.5rem 3rem' position='sticky' top='0'>
            <Box display='flex' gap="2.5rem" fontWeight='600' fontSize={20}>
                <Link href='/products'>Products</Link>
                <Link href='/resources'>Resources</Link>
                <Link href='/inspiration'>Inspiration</Link>
                <Link href='/pricing'>Pricing</Link>
            </Box>
            
            <Box>
               <Link href='/'> <Image w='200px' src="https://lh3.googleusercontent.com/IY-hoFjQZjeS_jWGsL1tJMagrA4ar-tW_-Dxj2yhCUen7R6Q_hyhH7SnRRHWxUybMHoDpeJaINJjU_YhHnBWStit7KK7ucIcPeGjELazJd5dLlLvyD5HrDWLMeteDM2gOr_T0eVaX8J8W-r0AqjPg6F2qsKBjVdmDwhMgJJ0bLLyLGm--uPUbGuVUwrUVXLT0fldzZ-1FQU1VzdASyFw8yon-mbJDJPo8rdEim1RN49bpCfVk6wSaYvbL0aiPIpKbNpaCreZVTZ7xGO-zL-IXu_nriLuiePsy23hwykWPwVpdhepLMNnnxNQ6YBRWTEjaNnHvxgMurNIlCFWjImXYYISEYInEz2hYc4PPoug43FrcrrtQHWjmKId9_DNasdz-UhDaxR_MfzNBDa38naua0C1Y3hd4CB_keJwvh3nVjOsdZVcYed0P-dHThVfPcQjW7tlP2pN1IyXwnKRKfh574pe9YkFAdVXf_lRf6p0IZDjIyv60IXf-OdacnWoA0Rr44Xj6o710gdo_2ZmZmF4ZeUmmdodngSYoxJu5x_U1vXTe93JqfuHKyqWgIEMnQJmqdcmv6p_CEiONHxMRfbjlUE7-PoHyZngnlNUDDyyfGqcxmxMs0tACGmXDaaSs-E2hDupgMEM4D3VeyZFM_d30gACfQW_FBeVvX7tPJ5i8Frg1e3Uvci15lqcArRyQU7bV-ieFRPuOVhyvn22jJgm08E5QTpsqp1dizNu6Vwa_YC0JX8phXlhmQC6sh03tj2VfLcjkaqi8KNPaiBFzxb4E1eJmtiMVfkGuutBX6xVU8_svF2rTS3uwGRISPgCHwAqj6Xx2nUlspwuLCR6mM_C9eAiaCIf0GGyXRQkAsxyjsDvld80Ck7CvvAkJ_7tmT8ctiRrldwH5_j2KlZmYBciy5l8hHxYv4lI4ePFKjrz7OkjKmlw9OIScYbYk2yut9LwAAXZN-o0IKGMzd_jBOrtPV2PzGNGc0bO_hAD9Vbgx9v2kI_8nbGp8g=w356-h105-no?authuser=0"></Image>
                </Link>
            </Box>
            <Box display='flex' gap='1rem'>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Link textAlign='end' fontWeight={500}>
                    <Text>Sales:</Text>
                    <Text>+1(800) 315-5939</Text>
                </Link>
                <Link fontSize={28} m='0 1rem'>
                    <AiOutlineGlobal/>
                </Link>
                <Link fontSize={28}>
                    <AiOutlineSearch/>
                </Link>
            </Box>
            
                <Link href="/login">
                    <Buttons text="Log In" col="none" />
                </Link>
                <Link href="/signup">
                    <Buttons col='#ffe200' text="Sign Up" />

                </Link>
            </Box>
        </Box>
    </>
}
export default Navbar;