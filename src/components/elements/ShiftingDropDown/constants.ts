import Products from "./TabContent/Products";
import Authentication from "./TabContent/Authentication";
import Blog from "./TabContent/Blog";

export const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Authentication",
    Component: Authentication,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
