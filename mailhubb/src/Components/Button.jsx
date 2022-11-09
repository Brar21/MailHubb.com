import { Button } from '@chakra-ui/react'
function Buttons(props) {
    const { text,col } = props;
    return <>
        <Button borderRadius='50px' bg={col} color='black' p='1.8rem' border='1px solid black'>{text}</Button>
    </>
}
export default Buttons;