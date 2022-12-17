import { RoutesDefault as Routes } from "./routes/RoutesDefault";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./styles/globalStyles";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";
import { DashboardProvider } from "./contexts/DashboardContext";

function App() {
  return (
    <>
      <UserProvider>
        <ChakraProvider>
          <GlobalStyle />
          <Toaster />
          <DashboardProvider>
            <Routes />
          </DashboardProvider>
        </ChakraProvider>
      </UserProvider>
    </>
  );
}

export default App;
