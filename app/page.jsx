import { MDXProvider } from "@mdx-js/react";
import Content from "./content.mdx";

export default function Home() {
  return (
    <main>
      <MDXProvider components={{ h1: "h1" }}>
        <Content />
      </MDXProvider>
    </main>
  );
}
