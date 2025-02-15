import { Theme, ThemePanel } from "@radix-ui/themes";
import App from "./App";
import "./radix-theme.css";

export default function Component() {
  return (
    <Theme
      scaling="95%"
      // appearance="dark"
    >
      <App />
      <ThemePanel defaultOpen={false} />
    </Theme>
  );
}
