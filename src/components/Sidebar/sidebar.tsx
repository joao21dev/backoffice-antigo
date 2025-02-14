import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  InputLeftElement,
  Input,
  Stack,
  InputGroup,
  Link,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiBox,
  FiUser,
  FiClipboard,
  FiBriefcase,
  FiMenu,
  FiChevronDown,
  FiDisc,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  routh: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, routh: "/home" },
  { name: "Contas", icon: FiUser, routh: "/accounts" },
  { name: "Bankline", icon: FiUser, routh: "/bankline" },
  { name: "Planos", icon: FiClipboard, routh: "/plans" },
  { name: "Tarifas", icon: FiBriefcase, routh: "/fares" },
  { name: "Agências", icon: FiMessageCircle, routh: "/agencias" },
  { name: "Configurações", icon: FiMessageCircle, routh: "/settings" },
  { name: "Usuários", icon: FiMessageCircle, routh: "/users" },
  { name: "Termos", icon: FiMessageCircle, routh: "/terms" },
  { name: "Logout", icon: FiMessageCircle, routh: "/login" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8">
        <FiDisc />
        <Text ml="15px" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image src={"logo.png"} />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} routh={link.routh}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  routh: string;
}
const NavItem = ({ icon, children, routh, ...rest }: NavItemProps) => {
  return (
    <Link
      href={routh}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#5A32EA",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    var names = localStorage.getItem("user.name") ?? "";
    setUserName(names);
  }, []);
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        justifyContent={{ base: "space-between" }}
        {...rest}
      >
        <Flex>
          <Box>
            <Text fontWeight="bold" m="15">
              Olá, {userName}
            </Text>
          </Box>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <HStack spacing={{ base: "0", md: "6" }}>
          <Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Pesquisar"
                bg="white"
                borderRadius="15px"
              />
            </InputGroup>
          </Stack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Usuário</Text>
                    <Text fontSize="xs" color="gray.600">
                      Banco
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Ajustes</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
