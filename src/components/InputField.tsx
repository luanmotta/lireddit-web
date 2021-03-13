import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react'

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  placeholder: string,
  name: string
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, {error}] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input {...field} id={field.name} placeholder={props.label} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
}
