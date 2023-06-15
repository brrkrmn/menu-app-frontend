import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryTable } from '../../elements/menuElements';
import Header from '../Header/Header';
const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('loggedInUser'))

  if (!user) {
    navigate('/login')
  }
  const menu = [
    {
      categoryName: "tatli",
      items: [
        {
          itemName: "su",
          itemPrice: "9"
        },
        {
          itemName: "lo",
          itemPrice: "1",
        }
      ]
    },
    {
      categoryName: "icecek",
      items: [
        {
          itemName: "su",
          itemPrice: "9"
        },
        {
          itemName: "lo",
          itemPrice: "1",
        }
      ]
    },

  ]

  return (
    <Flex direction='column' gap='12px'>
      <Header />
      <Divider />
      <Box>
        <Heading>Menu</Heading>
        {menu.map((category, index) => {
          return (
            <CategoryTable key={index} category={category} />
          )
        })}
      </Box>
    </Flex>
  )
}

export default Dashboard;
