import React from "react";

import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from "@chakra-ui/react";
import { colors } from "../../styles/colors";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

interface iInputForm {
  label: string;
  type: string;
  register: {};
  id: string;
}

export const InputForm = ({ label, type, register, id }: iInputForm) => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={2}>
        <FormControl variant="floating" id={id} isRequired>
          <Input
            {...register}
            size="lg"
            focusBorderColor={colors.black100}
            type={type}
            placeholder=""
          />

          <FormLabel>{label}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
};
