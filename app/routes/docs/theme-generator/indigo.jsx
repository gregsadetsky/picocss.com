import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/indigo.css";
import cssCode from "~/data/code-snippets/indigo.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Indigo";

export const meta = () => ({
  title: themeTitle(colorName),
  description: themeDescription(colorName),
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
