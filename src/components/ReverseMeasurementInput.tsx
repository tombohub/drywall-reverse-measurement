import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

export default function ReverseMeasurementInput() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 0,
      max: 24,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Button {...dec}>-</Button>
      <Input {...input} maxLength={2} width={"4em"} required />
      <Button {...inc}>+</Button>
    </HStack>
  );
}
