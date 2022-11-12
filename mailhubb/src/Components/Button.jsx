import { Button } from '@chakra-ui/react'
function Buttons(props) {
    const { text,col,w,m } = props;
    return <>
        <Button borderRadius='50px' bg={col} position="relative"fontSize={20} color='black' p='2rem' m={m} w={w} border='1px solid black' _hover={{borderBottom:"6px solid black"}}>{text}</Button>
    </>
}
export default Buttons;