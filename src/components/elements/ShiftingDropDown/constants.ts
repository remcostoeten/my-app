import { Products } from "./TabContent/Products";
import { Pricing } from "./TabContent/Pricing";
import { Blog } from "./TabContent/Blog";

export const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Pricing",
    Component: Pricing,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
