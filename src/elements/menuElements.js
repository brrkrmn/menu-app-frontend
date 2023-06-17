import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
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
import useField from "../hooks/useField.js";

export const CategoryTable = ({ category }) => {
  return (
    <Flex>
      <Box padding="20px 40px" boxShadow="base" borderRadius="20px" transition="0.3s" _hover={{ boxShadow: "xl" }}>
        <Table size="md">
          <Thead>
            <Flex>
              <TableCaption as="label" fontSize="2xl" color="#6D8B74" margin={0} pl={0}>
                {category.categoryName}
              </TableCaption>
            </Flex>
            <Tr>
              <Th pl={0} w="3xs">
                Item
              </Th>
              <Th pl={0} w="3xs">
                Fiyat
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {category.items.map((item, index) => {
              return <ItemTable key={index} item={item} />;
            })}
          </Tbody>
        </Table>
      </Box>
      <Flex direction="column" mt="8px" gap="2px">
        <EditPopover target={category} />
        <DeletePopover text="Kategoriyi silmek istediğinize emin misiniz?" />
      </Flex>
    </Flex>
  );
};

export const ItemTable = ({ item }) => {
  return (
    <Tr>
      <Td pl={0}>{item.itemName}</Td>
      <Td pl={0}>{item.itemPrice}</Td>
      <Td pr={0}>
        <EditPopover target={item} />
        <DeletePopover text="İtemi silmek istediğinize emin misiniz?" />
      </Td>
    </Tr>
  );
};

export const CircleIconButton = React.forwardRef(({ icon, label, ...rest }, ref) => {
  return (
    <IconButton
      ref={ref}
      aria-label={label}
      icon={icon}
      size="md"
      color="#6D8B74"
      bg="none"
      borderRadius="8px"
      _hover={{ border: "1px solid #6D8B74" }}
      _focus={{ color: "white", bg: "#6D8B74" }}
      {...rest}
    />
  );
});

export const NewCategoryForm = ({ initialName }) => {
  const categoryName = useField("text", initialName);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="categoryName"
        type={categoryName.type}
        value={categoryName.value}
        onChange={categoryName.onChange}
        placeholder="Kategori İsmi"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};

export const NewItemForm = ({ initialName, initialPrice }) => {
  const itemName = useField("text", initialName);
  const itemPrice = useField("text", initialPrice);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="itemName"
        type={itemName.type}
        value={itemName.value}
        onChange={itemName.onChange}
        placeholder="İtem ismi"
        focusBorderColor="#6D8B74"
      />
      <Input
        id="itemPrice"
        type={itemPrice.type}
        value={itemPrice.value}
        onChange={itemPrice.onChange}
        placeholder="İtem fiyatı"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};

export const EditPopover = ({ target }) => {
  const initRef = React.useRef();
  let targetType = "";
  if (target.categoryName) {
    targetType = "category";
  } else if (target.itemName) {
    targetType = "item";
  }
  return (
    <Popover initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <CircleIconButton label={"edit"} icon={<EditIcon />} />
          </PopoverTrigger>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            <PopoverHeader fontSize="sm">
              {targetType === "category" ? "Kategoriyi düzenleyin" : "İtemi düzenleyin"}
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody display="flex" flexDirection="column" justifyContent="center" gap="12px">
              {targetType === "category" ? (
                <NewCategoryForm initialName={target.categoryName} />
              ) : (
                <NewItemForm initialName={target.itemName} initialPrice={target.itemPrice} />
              )}
              <Box display="flex" justifyContent="center" gap="8px">
                <ApproveButton />
                <CancelButton onClick={onClose} ref={initRef} />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
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
            <PopoverBody display="flex" justifyContent="center" gap="8px">
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
    <Button
      bg="none"
      flexGrow="1"
      border="1px solid #6D8B74"
      color="#6D8B74"
      _hover={{ bg: "#6D8B74", color: "white" }}
      size="sm"
    >
      {text ? text : "Onayla"}
    </Button>
  );
};

export const CancelButton = ({ onClick }) => {
  return (
    <Button
      flexGrow="1"
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