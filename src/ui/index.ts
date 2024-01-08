// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
      },
    },
  },
});
