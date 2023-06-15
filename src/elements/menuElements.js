import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export const CategoryTable = ({ category }) => {
  return (
    <Table>
      <Thead>
        <Flex>
          <TableCaption as="label" fontSize="2xl" color="#6D8B74">
            {category.categoryName}
            <EditPopover />
            <DeletePopover text="Kategoriyi silmek istediğinize emin misiniz?" />
            {/* <IconButton icon={<EditIcon />} size='md' bg='none' color='white' _hover={{ color: 'black' }} _focus={{ bg:'none'}} /> */}
          </TableCaption>
        </Flex>
        <Tr>
          <Th>Item</Th>
          <Th>Fiyat</Th>
        </Tr>
      </Thead>
      <Tbody>
        {category.items.map((item, index) => {
          return <ItemTable key={index} item={item} />;
        })}
      </Tbody>
    </Table>
  );
};

export const ItemTable = ({ item }) => {
  return (
    <Tr>
      <Td>{item.itemName}</Td>
      <Td>{item.itemPrice}</Td>
      <EditPopover />
      <DeletePopover text="İtemi silmek istediğinize emin misiniz?" />
    </Tr>
  );
};

export const CircleIconButton = React.forwardRef(({ icon, label, ...rest }, ref) => {
  return (
    <IconButton
      ref={ref}
      aria-label={label}
      icon={icon}
      color="#6D8B74"
      bg="none"
      borderRadius="50%"
      _hover={{ border: "1px solid #6D8B74" }}
      _focus={{ color: "white", bg: "#6D8B74" }}
      {...rest}
    />
  );
});
export const EditPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <CircleIconButton label={"edit"} icon={<EditIcon />} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody></PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const DeletePopover = ({ text }) => {
  const initRef = React.useRef();
  return (
    <Popover initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <CircleIconButton label={"delete"} icon={<DeleteIcon />} />
          </PopoverTrigger>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            <PopoverHeader w="fit-content" fontSize="sm">
              {text}
            </PopoverHeader>
            <PopoverBody display="flex" justifyContent="center" gap="12px">
              <ApproveButton />
              <CancelButton onClick={onClose} ref={initRef} />
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export const ApproveButton = ({ text }) => {
  return (
    <Button bg="none" border="1px solid #6D8B74" color="#6D8B74" _hover={{ bg: "#6D8B74", color: "white" }} size="sm">
      {text ? text : "Onayla"}
    </Button>
  );
};

export const CancelButton = ({ onClick }) => {
  return (
    <Button
      bg="none"
      border="1px solid #C0392B"
      color="#C0392B"
      _hover={{ bg: "#C0392B", color: "white" }}
      onClick={onClick}
      size="sm"
    >
      Vazgeç
    </Button>
  );
};