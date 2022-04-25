import { Box, Grid, GridItem, Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,} from '@chakra-ui/react'
import Chart from '../graphicAccount/graphic';
import Graphic from '../graphicTransact/graphic';
import {
    
    FiChevronDown,
    
  } from 'react-icons/fi';

const GridCard = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    return(
        <>
        <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        m='15'
        >
            <GridItem 
            colSpan={3} 
            bg='white' 
            h="370px" 
            w='100%'
            borderRadius='15px'
            >
                <Box display='flex' justifyContent='space-between' m='15px'>
                    <Box m='2'>
                        <Text fontWeight='bold' fontSize="25px">Transações</Text>
                        <Text fontWeight='light'>Volume Mensal</Text>

                    
                    </Box>
                    <Menu >
                        <MenuButton
                            px={4}
                            py={4}
                            m='2'
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            bg='#F3F7FA'
                            _hover={{ bg: 'gray.400' }}
                            _expanded={{ bg: 'blue.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            <Box display='flex' justifyContent='center' alignItems='center'>
                            <Text display='flex'>Trimestrial  </Text>
                            <FiChevronDown display='flex' fontSize='22px'/>

                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>New File</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuDivider />
                            <MenuItem>Open...</MenuItem>
                            <MenuItem>Save File</MenuItem>
                        </MenuList>
                        </Menu>
  

                </Box>

                <Box>
                    <Graphic/>
                </Box>

            </GridItem>
            <GridItem 
            colSpan={2} 
            h="370px"   
            bg='white' 
            borderRadius='15px' >

            <Chart></Chart>

            </GridItem>
            
            <GridItem colSpan={3} h="250px"  bg='white' borderRadius='15px' />
            
            <GridItem colSpan={2} h="250px"   bg='white' borderRadius='15px' />
           
            </Grid>
        </>
    )
}


export default GridCard
