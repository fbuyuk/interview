import React, { useRef, useState } from 'react';
import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react';

export default function MuiInput({
  name,
  type,
  label,
  value,
  changeHandler,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(!!value);
  const [textFocused, setTextFocused] = useState(false);
  const inputRef = useRef(null);
  const bgInput = useColorModeValue('gray.200', '#141414');
  const toggleFocus = () => {
    if (!value) {
      setIsFocused(!isFocused);
    }
    setTextFocused(!textFocused);
  };

  return (
    <Box position="relative" w="100%">
      <Text
        transition="0.2s ease all"
        position="absolute"
        left={isFocused ? '3' : '4'}
        top={isFocused ? '2' : '5'}
        fontSize={isFocused ? '.8rem' : '1rem'}
        fontWeight={'bold'}
        color={isFocused ? '#303030' : '#707070'}
        px=".3rem"
        zIndex={1000}
        onClick={() => inputRef.current.focus()}
        borderRadius="2xl"
      >
        {label}
      </Text>
      <Input
        ref={inputRef}
        onFocus={() => toggleFocus()}
        onBlur={() => toggleFocus()}
        value={value}
        name={name}
        autoComplete={'off'}
        onChange={changeHandler}
        variant="filled"
        size="lg"
        fontWeight={'bold'}
        type={type}
        pb={isFocused ? '1.5rem' : '2.5rem'}
        pt={isFocused ? '2.5rem' : '1.5rem'}
        bgColor={
          isFocused
            ? value && !textFocused
              ? bgInput
              : 'transparent!important'
            : bgInput
        }
        borderColor="transparent"
        borderWidth={3}
        focusBorderColor="#FDD030FF"
        {...props}
      />
    </Box>
  );
}
