import { Td, Tr } from "@chakra-ui/react";
import DeletePopover from "components/Menu/components/popovers/DeletePopover";
import EditPopover from "components/Menu/components/popovers/EditPopover";

const ItemTable = ({ item }) => {
  return (
    <Tr>
      <Td pl={0}>{item.name}</Td>
      <Td pl={0}>{item.price}</Td>
      <Td pr={0} pl={0} display="flex" flexWrap="nowrap">
        <EditPopover target="item" targetObject={item} />
        <DeletePopover target="item" />
      </Td>
    </Tr>
  );
};

export default ItemTable;
