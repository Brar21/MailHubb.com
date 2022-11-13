import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Box, Heading, Image, Text } from '@chakra-ui/react';

function Inspiration() {

    return <>
        <Navbar />
        <Box w='40%' display='flex' m='auto' textAlign='center' flexDirection='row'>
            <Image w={250} h={250} src="https://images.ctfassets.net/l893v89mix1e/E863899QTMWekZgeXOIrB/b9afe95f31c8522210f157c1e5c95d89/Courier-Workshop.png?w=460&h=460&q=80&fm=webp" />
            <Box m='1rem 0'>
                <Heading fontSize={100} fontWeight='800'>
                    Workshop
                </Heading>
                <Text fontSize={22}>
                    Case studies, how-tos and expert insights to take you from startup to scale-up and beyond.
                </Text>
            </Box>
        </Box>

        <Box width='45%' m='2rem auto'>
            <Image src="https://images.ctfassets.net/l893v89mix1e/59RVYZJWvJnieR6tkghfRq/d39b374cc74e74d9cc6bb3d5fd284afa/Build_a_budget_16x9_Hero.jpg?w=1920&h=1080&q=80&fm=webp" w={874} h={412} />
            <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                <Text fontWeight='500' color='red'>
                    Workshop
                </Text>
                <Heading fontSize={26}>How to build a budget for your business</Heading>
            </Box>
        </Box>
        <Box w='47%' display='flex' flexDirection='row' m='auto'>
            <Box width='45%' m='auto'mr='-15px'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/3Gu9iOmuXMbtlP0aaB69Qv/022f1f129956f2052d7728e3533c2fd1/Beat-the-bank_1x1_Homepage.png?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>Beat the bank: making sense of high interest rates
                    </Heading>
                </Box>
            </Box>
            <Box width='45%' m='auto' mr='5rem'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/6Z2SA6zicqkExU1j7IjOuG/edf48655fa0ab2d59a19b11142526242/Set_your_own_salary_1x1_Homepage.jpg?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>How to set your own salary</Heading>
                </Box>
            </Box>
        </Box>
        <Box width='45%' m=' 2rem auto'>
            <Image src="https://images.ctfassets.net/l893v89mix1e/R9eNBYmbbbaT1fKCT7rWJ/f5a391f537976304d72559af3811a8b1/A_House_Called_Hue_16x9_Homepage.jpg?w=1920&h=1080&q=80&fm=webp" w={874} h={412} />
            <Box position='absolute' mt='-6.3%' w={350} textAlign='start' bg='white' p={2}>
                <Text fontWeight='500' color='red'>
                    Workshop
                </Text>
                <Heading fontSize={26}>Startup diary: Lessons on growth with A House Called Hue
                </Heading>
            </Box>
        </Box>
        <Box w='47%' display='flex' flexDirection='row' m='auto'>
            <Box width='45%' m='auto' mr='-15px'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/3pGw1gq4aTg3nr8m27WKGn/4331c2db88366c60802510554b5f511d/Accountant_1x1_Homepage.jpg?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>How to find and work with an accountant
                    </Heading>
                </Box>
            </Box>
            <Box width='45%' m='auto' mr='5rem'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/2ReXa0xxrvVUiIbJ3c69NC/4d1d0e4683825d31e04fb26428f4282f/Expanding_overseas_1x1_Homepage.jpg?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>
                        How – and when – to expand overseas</Heading>
                </Box>
            </Box>
        </Box>
        <Box width='45%' m='2rem auto'>
            <Image src="https://images.ctfassets.net/l893v89mix1e/30yOavkFiHHmQjIZXh2Sys/0eb6baf326b845dacd5b8b39f0136f2e/Why_you_need_to_find_a_lawyer_16x9_Homepage.jpg?w=1920&h=1080&q=80&fm=webp" w={874} h={412} />
            <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                <Text fontWeight='500' color='red'>
                    Workshop
                </Text>
                <Heading fontSize={26}>
                    Why you need to find a lawyer
                </Heading>
            </Box>
        </Box>
        <Box w='47%' display='flex' flexDirection='row' m='2rem auto'>
            <Box width='45%' m='auto' mr='-15px'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/77XGSUzDLdvhj87DTm4kKz/d4e3cff00fb4044855748dcf13e8a77b/The_toolbox_1x1_Homepage.jpg?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>The toolbox: level up your personal finances
                    </Heading>
                </Box>
            </Box>
            <Box width='45%' m='auto' mr='5rem'>
                <Image src="https://images.ctfassets.net/l893v89mix1e/3QhKGKuk0LtHp7VLyhhXmz/367a25ba20311324454f7ffe540e6f30/Build_a_waitlist_before_launch_1x1_Homepage.jpg?w=1600&h=1600&q=80&fm=webp" w={426} h={412} />
                <Box position='absolute' mt='-4.8%' w={350} textAlign='start' bg='white' p={2}>
                    <Text fontWeight='500' color='red'>
                        Workshop
                    </Text>
                    <Heading fontSize={26}>
                        How to... build a waitlist before launch
                       </Heading>
                </Box>
            </Box>
        </Box>
        <Footer />
    </>
    // How to build a budget for your business
}
export default Inspiration;