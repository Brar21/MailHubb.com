import { Button } from '@chakra-ui/react'
function Buttons(props) {
    const { text,col,w,m,onclick } = props;
    return <>
        <Button borderRadius='50px' bg={col} position="relative"fontSize={20} color='black' p='2rem' m={m} w={w} border='1px solid black'onClick={onclick} _hover={{borderBottom:"6px solid black"}}>{text}</Button>
    </>
}
export default Buttons;