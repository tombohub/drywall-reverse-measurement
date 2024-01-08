import { ChakraProvider } from "@chakra-ui/react";
import Content from "./components/Content";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { theme } from "./ui";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Content />
      </ChakraProvider>
    </ReduxProvider>
  );
}
