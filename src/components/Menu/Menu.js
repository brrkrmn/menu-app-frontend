import { Box, Flex, Heading } from "@chakra-ui/react";
import CategoryTable from "components/Menu/components/tables/CategoryTable";
import { menu } from "components/Menu/Menu.constants";

const Menu = () => {
  return (
    <Box padding="20px">
      <Heading fontFamily="'Helvetica', sans-serif" color="#5F7161">
        Menu
      </Heading>
      <Flex direction="column" flexWrap="wrap" gap="16px" alignItems="center">
        {menu.categories.map((category, index) => (
          <CategoryTable key={index} category={category} />
        ))}
      </Flex>
    </Box>
  );
};

export default Menu;
