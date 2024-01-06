import { Button } from "@chakra-ui/react";

interface ChoiceButtonProps {
  /**
   * reverse measurement option offered to user as an answer choice
   */
  choice: number;
}

/**
 * Answer choice option in form of a button.
 * Clicking on button user submits his answer
 */
export default function ChoiceButton(props: ChoiceButtonProps) {
  return (
    <>
      <Button>{props.choice}</Button>
    </>
  );
}
