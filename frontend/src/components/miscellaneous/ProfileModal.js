import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import { Stack, Switch, Flex } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";  

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const {
    toggle,
    settoggle,
  } = ChatState();



  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Box>
       <Flex alignItems="center">
         <FormControl display="flex" alignItems="center">
           <FormLabel htmlFor="translate-language" mb="0">
             Translate Language
           </FormLabel>
           <Switch
             id="translate-language"
             colorScheme="teal"
             isChecked={toggle}
             onChange={() => settoggle(!toggle)}
           />
         </FormControl>
         <IconButton
           ml={4} // Increased margin left for more spacing
           icon={<ViewIcon />}
           onClick={onOpen}
         />
       </Flex>
     </Box>
       )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
              objectFit="cover"
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
