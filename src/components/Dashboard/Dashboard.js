import { Divider, Flex } from "@chakra-ui/react";
import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    navigate("/login");
  }

  return (
    <Flex direction="column" gap="12px" paddingBottom="20px">
      <Header />
      <Divider />
      <Menu />
    </Flex>
  );
};

export default Dashboard;
