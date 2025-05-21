import { Button, Container, Flex, Text, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { PlusSquareIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex
        h = {16}
        alignItems = {"center"}
        justifyContent = {"space-between"}
        flexDir = {{
            base: "column",
            sm: "row"
        }}
        >
            <Text
                bgGradient='linear(to-l,rgb(40, 202, 202),rgb(5, 77, 55))'
                bgClip='text'
                fontSize={{ base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                >
                <Link to={"/"}>Cohen Tech 🛒</Link>
            </Text>

            <HStack spacing={2} align={"center"}>
                <Link to={"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={20} />
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                </Button>
            </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar