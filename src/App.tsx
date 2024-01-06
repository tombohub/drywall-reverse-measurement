import { ChakraProvider } from "@chakra-ui/react";
import Content from "./components/Content";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Content />
      </ChakraProvider>
    </ReduxProvider>
  );
}
