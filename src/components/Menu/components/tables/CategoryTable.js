import { Box, Flex, Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import AddPopover from "components/Menu/components/popovers/AddPopover";
import DeletePopover from "components/Menu/components/popovers/DeletePopover";
import EditPopover from "components/Menu/components/popovers/EditPopover";
import ItemTable from "components/Menu/components/tables/ItemTable";

const CategoryTable = ({ category }) => {
  return (
    <Flex>
      <Box padding="20px 40px" boxShadow="base" borderRadius="20px" transition="0.3s" _hover={{ boxShadow: "xl" }}>
        <Table size="md">
          <Thead>
            <Flex>
              <TableCaption as="label" fontSize="2xl" color="#6D8B74" margin={0} pl={0}>
                {category.name}
              </TableCaption>
            </Flex>
            <Tr>
              <Th pl={0} w="3xs">
                Ürün
              </Th>
              <Th pl={0} w="3xs">
                Fiyat
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {category.items.map((item, index) => (
              <ItemTable key={index} item={item} />
            ))}
          </Tbody>
        </Table>
      </Box>
      <Flex direction="column" mt="8px" gap="2px">
        <AddPopover target="item" />
        <EditPopover target="category" targetObject={category} />
        <DeletePopover target="category" />
      </Flex>
    </Flex>
  );
};

export default CategoryTable;
