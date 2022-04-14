import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    // Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../Routes/MainRoute';

// const NavLink = ({ children }: { children: ReactNode }) => (

//     <Link
//         px={2}
//         py={1}
//         rounded={'md'}
//         _hover={{
//             textDecoration: 'none',
//             bg: useColorModeValue('gray.200', 'gray.700'),
//         }}
//         href={'#'}>
//         {children}
//     </Link>
// );

export default function Navbar() {
    const { isuser, setisUser } = useContext(userContext);
    const { colorMode, toggleColorMode } = useColorMode();
    let test = true;
    useEffect(() => {
        console.log('isuser ', isuser)
    }, [isuser])
    const handleLogout = () => {
        setisUser('')
        console.log('logout....')
    }
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Quick-Pick</Box>


                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode} mx={3}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        {false ?
                            (<Stack direction={'row'} spacing={7}>


                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>Username</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem>Your Servers</MenuItem>
                                        <MenuItem>Account Settings</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu>

                            </Stack>) :
                            (<Stack
                                flex={{ base: 1, md: 0 }}
                                justify={'flex-end'}
                                direction={'row'}
                                spacing={6}>
                                {
                                    isuser == '' ? (<>
                                        <Button
                                            as={'a'}
                                            fontSize={'sm'}
                                            fontWeight={400}
                                            variant={'link'}
                                            href={'/login'}>
                                            Sign In
                                        </Button>
                                        <Button
                                            as={'a'}
                                            display={{ base: 'none', md: 'inline-flex' }}
                                            fontSize={'sm'}
                                            fontWeight={600}
                                            color={'white'}
                                            bg={'pink.400'}
                                            href={'/signup'}
                                            _hover={{
                                                bg: 'pink.300',
                                            }}>
                                            Sign Up
                                        </Button>
                                    </>)
                                        :
                                        (
                                            <Button
                                                as={'a'}
                                                display={{ base: 'none', md: 'inline-flex' }}
                                                fontSize={'sm'}
                                                fontWeight={600}
                                                color={'white'}
                                                bg={'pink.400'}
                                                onClick={handleLogout}
                                                _hover={{
                                                    bg: 'pink.300',
                                                }}>
                                                Logout
                                            </Button>
                                        )
                                }

                            </Stack>)
                        }
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}