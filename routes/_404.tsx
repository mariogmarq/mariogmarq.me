import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div class="w-screen h-screen text-center">
      <h1 class="font-black text-4xl block">404</h1>
    </div>
  );
}
