import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const CategoryTable = ({ category }) => {
  return (
    <Table>
      <Thead>
        <Flex>
          <TableCaption as='label' fontSize='2xl' color='#6D8B74'>
            {category.categoryName}
            <EditButton />
            <DeleteButton />
          {/* <IconButton icon={<EditIcon />} size='md' bg='none' color='white' _hover={{ color: 'black' }} _focus={{ bg:'none'}} /> */}
          </TableCaption>
        </Flex>
        <Tr>
          <Th>Item</Th>
          <Th>Fiyat</Th>
        </Tr>
      </Thead>
      <Tbody>
        {category.items.map(item => {
          return (
            <ItemTable item={item}  />
          )
        })}
      </Tbody>
    </Table>
  )
}

export const ItemTable = ({ item }) => {
  return (
    <Tr>
      <Td>{item.itemName}</Td>
      <Td>{item.itemPrice}</Td>
      <EditButton />
      <DeleteButton />
    </Tr>
  )
}

export const CircleIconButton = ({ icon, label }) => {
  return (
    <IconButton
      aria-label={label}
      icon={icon}
      color='#6D8B74'
      bg='none'
      borderRadius='50%'
      _hover={{ border:'1px solid #6D8B74'}}
      _focus={{ color:'white', bg:'#6D8B74'}}
    />
  )
}
export const EditButton = () => {
  return (
    <CircleIconButton label={'edit'} icon={<EditIcon />} />
  )
}

export const DeleteButton = () => {
  return (
    <CircleIconButton label={'delete'} icon={<DeleteIcon />} />
  )
}