import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div class="w-screen h-screen text-center flex bg-[#EDE7DC]">
      <div class="font-black text-8xl block my-auto mx-auto">
        <a class="hover:text-underline" href="/about">
          404
        </a>
        <p class="text-2xl text-gray-700">You seem quite lost</p>
      </div>
    </div>
  );
}
