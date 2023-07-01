import { Box, Flex, Heading } from "@chakra-ui/react";
import AddPopover from "components/Menu/components/popovers/AddPopover";
import CategoryTable from "components/Menu/components/tables/CategoryTable";
import { menu } from "components/Menu/Menu.constants";
import { colors } from "constants/index.js";

const Menu = () => {
  const { green } = colors;
  return (
    <Box padding="20px">
      <Heading fontFamily="'Helvetica', sans-serif" color={green.dark}>
        Menu
      </Heading>
      <AddPopover target="category" />
      <Flex direction="column" flexWrap="wrap" gap="16px" alignItems="center">
        {menu.categories.map((category, index) => (
          <CategoryTable key={index} category={category} />
        ))}
      </Flex>
    </Box>
  );
};

export default Menu;
