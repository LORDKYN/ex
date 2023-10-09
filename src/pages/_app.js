import "@/styles/globals.css";
import "../../assets/css/main.css";
import { StateContextProvider } from "../../Contexts/StateContext";


export default function App({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  );
}
