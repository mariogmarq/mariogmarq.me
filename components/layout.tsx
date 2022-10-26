import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import NavBar from "./navbar.tsx";
import Footer from "./footer.tsx";
import { FunctionComponent } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";

const Layout: FunctionComponent<{ url: URL }> = ({ url, children }) => {
  return (
    <>
      <Head>
        <title>mariogmarq</title>
      </Head>
      <main class="h-screen">
        <NavBar url={url} />
        <div class="text-center">
          <div class="p-4 mx-auto max-w-screen-md">
            {children}
          </div>
          <Footer class="pt-10" />
        </div>
      </main>
    </>
  );
};

export default Layout;
