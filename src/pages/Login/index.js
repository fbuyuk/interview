import {
  Alert,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Image,
  Show,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import CustomInput from './Input';
import loginImage from './loginImage.jpg';
import logo from './logo.png';
import { useFormik } from 'formik';
import validationSchema from './validations';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { loginFetch } from '../../api';

export default function Login() {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values, bag) => {
      try {
        const { username, password } = values;
        const status = await loginFetch({ username, password });
        login(status);
        navigate('/equipments', { replace: true });
      } catch (err) {
        bag.setErrors({ general: err });
      }
    },
  });

  return (
    <Flex>
      <Flex
        direction={'column'}
        width={['100%', '100%', '30%', '30%']}
        minWidth={'380px'}
        overflow={'hidden'}
        color={useColorModeValue('#080808', 'white')}
        bg={useColorModeValue('white', '#080808')}
        minHeight="100vh"
        alignItems={'center'}
      >
        <Box px={12} pt={'4em'} mb={'auto'}>
          <Box textAlign="center">
            <Center>
              <Image src={logo} width={100} />
            </Center>
            <Heading mt={5} as="h1" size="xl">
              AKILLI ULAŞIM SİSTEMLERİ
            </Heading>
          </Box>
          {formik.errors?.general && (
            <Alert borderRadius={'md'} mt={5} status="error">
              {formik.errors.general}
            </Alert>
          )}
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <CustomInput
                  changeHandler={formik.handleChange}
                  value={formik.values.username}
                  name={'username'}
                  label={'KULLANICI ADI'}
                />
              </FormControl>
              <FormControl mt={5}>
                <CustomInput
                  changeHandler={formik.handleChange}
                  value={formik.values.password}
                  name={'password'}
                  label={'ŞİFRE'}
                />
              </FormControl>
              <FormControl
                mt={5}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Box
                  onClick={() => {
                    toggleColorMode();
                  }}
                  as="button"
                  color={'#373737FF'}
                  fontWeight={'bold'}
                >
                  AYARLAR
                </Box>
                <Button
                  type="submit"
                  size={'lg'}
                  disabled={!formik.isValid}
                  colorScheme="gray"
                  fontWeight="bold"
                  shadow="none!important"
                >
                  GİRİŞ
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
        <Box
          w={'full'}
          bg={'black'}
          py={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={'#FDC805FF'} fontWeight={500} fontSize="3xl">
            INTETRA
          </Text>
        </Box>
      </Flex>
      <Show breakpoint="(min-width: 48em)">
        <Box flex="1" overflow={'hidden'}>
          <Image
            w={'full'}
            height={'full'}
            src={loginImage}
            objectFit="cover"
          />
        </Box>
      </Show>
    </Flex>
  );
}
