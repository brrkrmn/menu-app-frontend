import { SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../reducers/loggedInUserReducer';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <Flex width='full' justifyContent='center' gap='16px'>
      <IconButton
        icon={<AiOutlineHome />}
        bg='white'
        color='#6D8B74'
        size='lg'
        borderRadius='50%'
        boxShadow='base'
        _hover={{ boxShadow: 'lg', color:'white', bg:'#6D8B74' }}
      />
      <IconButton
        icon={<SunIcon />}
        bg='white'
        color='#6D8B74'
        size='lg'
        borderRadius='50%'
        boxShadow='base'
        _hover={{ boxShadow: 'lg', color:'white', bg:'#6D8B74' }}
      />
      <IconButton
        icon={<LuLogOut />}
        onClick={handleLogOut}
        bg='white'
        color='#6D8B74'
        size='lg'
        borderRadius='50%'
        boxShadow='base'
        _hover={{ boxShadow: 'lg', color:'white', bg:'#6D8B74' }}
        />
    </Flex>
  )
}

export default Header;
