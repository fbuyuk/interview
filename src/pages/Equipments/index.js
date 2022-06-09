import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useState, useEffect } from 'react';
import { Menu } from 'react-feather';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import data from '../../data.json';
import CustomLink from '../../components/CustomLink';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
function Equipments() {
  const { name } = useParams();
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const [toggleList, setToggleList] = useState(true);
  const [filterText, setFilterText] = useState('');

  const bgHead = useColorModeValue('white', '#1f1f1f');
  const bgList = useColorModeValue('gray.100', '#393939');
  const bgInput = useColorModeValue('gray.200', '#5D5D5D');

  const filtered = data.filter(device => {
    return (
      device['name']
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase()) ||
      device['ip'].includes(filterText.toLocaleLowerCase())
    );
  });

  useEffect(() => {
    if (name) {
      setToggleList(isMobile);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!name) setToggleList(true);
  }, [name]);

  return (
    <Flex h={'100vh'} w="full">
      <Sidebar />
      {isMobile && !toggleList ? (
        <IconButton
          pos={'absolute'}
          right={0}
          top={0}
          zIndex={999}
          _hover={{ background: 'none' }}
          shadow={'none!important'}
          icon={<Menu />}
          onClick={() => {
            setToggleList(true);
          }}
        />
      ) : (
        ''
      )}
      <Flex
        pos="sticky"
        h="100%"
        overflow={'hidden'}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        w={isMobile ? '100%' : '500px'}
        flexDir="column"
        display={isMobile ? (toggleList ? 'flex' : 'none') : 'flex'}
      >
        <Flex bg={bgHead} justifyContent={'space-between'} as="nav">
          <Heading p={5} bg={bgHead}>
            Cihazlar
          </Heading>
        </Flex>

        <Flex direction={'column'} h={'full'}>
          <Box w={'full'} bg={bgList} h={'full'}>
            <Box p={3}>
              <Input
                name={'search'}
                autoComplete={'off'}
                placeholder={'Cihazlarda ara...'}
                variant="filled"
                size="lg"
                type={'search'}
                color="white"
                borderColor="transparent"
                borderRadius={'xl'}
                bg={bgInput}
                focusBorderColor="#FDD030FF"
                onChange={e => setFilterText(e.target.value)}
              />
            </Box>
            <SimpleBar style={{ height: 'calc(100% - 155px)' }}>
              <List h="full">
                {filtered.map((device, index) => (
                  <CustomLink
                    onClick={() => {
                      setToggleList(false);
                    }}
                    key={index}
                    to={device.name}
                  >
                    {device.name}
                  </CustomLink>
                ))}
              </List>
            </SimpleBar>
          </Box>
        </Flex>
      </Flex>
      <Flex
        display={isMobile ? (toggleList ? 'none' : 'flex') : 'flex'}
        flex={1}
        bg={bgHead}
        px={5}
        pt={20}
      >
        <Outlet context={{ data }} />
      </Flex>
    </Flex>
  );
}

export function useData() {
  return useOutletContext();
}

export default Equipments;
