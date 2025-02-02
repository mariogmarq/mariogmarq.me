import { PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import Layout from "../components/layout.tsx";

export default function Works({ url }: PageProps) {
    return (
        <Layout url={url}>
            <div class="my-6 font-sans text-xl text-left max-w-2xl">
                Here is a list of some of my works:
            </div>
        </Layout>
    )
}