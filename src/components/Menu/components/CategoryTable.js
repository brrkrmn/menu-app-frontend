import { Box, Flex, Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import AddPopover from "./AddPopover";
import DeletePopover from "./DeletePopover";
import EditPopover from "./EditPopover";
import ItemTable from "./ItemTable";

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
        <AddPopover target="item" />
        <EditPopover target={category} />
        <DeletePopover text="Kategoriyi silmek istediğinize emin misiniz?" />
      </Flex>
    </Flex>
  );
};

export default CategoryTable;
