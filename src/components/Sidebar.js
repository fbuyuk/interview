import { Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import { Bell, HardDrive, Map, LogOut } from 'react-feather';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../api';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Flex
      pos="sticky"
      h="100vh"
      w="75px"
      direction="column"
      justifyContent="space-between"
      bg={useColorModeValue('white', '#080808FF')}
    >
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        as={'nav'}
        w="75px"
      >
        <NavLink
          to="/equipments"
          style={({ isActive }) => {
            if (isActive) {
              return {
                color: 'orange',
              };
            }
          }}
        >
          <IconButton
            background="none"
            mt={5}
            shadow={'none!important'}
            w={'full'}
            _hover={{ background: 'none' }}
            icon={<HardDrive />}
          />
        </NavLink>
        <NavLink
          to="/map"
          style={({ isActive }) => {
            if (isActive) {
              return {
                color: 'orange',
              };
            }
          }}
        >
          <IconButton
            background="none"
            shadow={'none!important'}
            mt={5}
            w={'full'}
            _hover={{ background: 'none' }}
            icon={<Map />}
          />
        </NavLink>

        <NavLink to="">
          <IconButton
            background="none"
            shadow={'none!important'}
            mt={5}
            w={'full'}
            _hover={{ background: 'none' }}
            icon={<Bell />}
          />
        </NavLink>
      </Flex>
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <ColorModeSwitcher />
        <IconButton
          background="none"
          mt={5}
          shadow={'none!important'}
          w={'full'}
          _hover={{ background: 'none' }}
          icon={<LogOut />}
          onClick={() => {
            logout(() => {
              navigate('/login');
            });
          }}
        />
      </Flex>
    </Flex>
  );
}
