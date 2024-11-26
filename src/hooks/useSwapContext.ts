import { SwapContext } from "@contexts/SwapContext";
import { useContext } from "react";

const useSwapContext = () => {
  const context = useContext(SwapContext);

  if (!context) {
    throw new Error(
      "useSwapContext must be used within a ThemecontextProvider"
    );
  }

  const { tokens, networks, categories } = context;

  return {
    tokens,
    networks,
    categories,
  };
};
export default useSwapContext;
