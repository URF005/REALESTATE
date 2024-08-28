//INTERNAL IMPORT
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../../context";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";
const App = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      ChainId={ChainId.PolygonAmoyTestnet}
      activeChain={PolygonAmoyTestnet}
      clientId="83739712a88996e30f165fe3e3739b7d"
    >
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </ThirdwebProvider>
  );
};
export default App;
