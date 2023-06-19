import { Td, Tr } from "@chakra-ui/react";
import DeletePopover from "components/Menu/components/DeletePopover";
import EditPopover from "components/Menu/components/EditPopover";

const ItemTable = ({ item }) => {
  return (
    <Tr>
      <Td pl={0}>{item.name}</Td>
      <Td pl={0}>{item.price}</Td>
      <Td pr={0}>
        <EditPopover target={item} />
        <DeletePopover text="İtemi silmek istediğinize emin misiniz?" />
      </Td>
    </Tr>
  );
};

export default ItemTable;
