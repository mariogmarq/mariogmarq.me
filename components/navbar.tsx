const SECTIONS = [
  { name: "About me", url: "/about" },
  { name: "Resume", url: "/resume" },
  { name: "Works", url: "/works" },
];

export default function NavBar({ url }: { url: URL }) {
  return (
    <div class="sticky">
      <div class="flex justify-center">
        <h1 class="font-mono font-bold mt-3 text-lg hover:text-[#0284c7] hover:cursor-pointer">
          <a href={"/about"}>
          mariogmarq
          </a>
        </h1>
      </div>

      <div class="flex md:w-screen justify-center text-base bg-white">
        <ul class="my-5 block">
          {SECTIONS.map((s) => (
            <li
              class={`inline-block hover:border-b-2 border-gray-500 hover:cursor-pointer pb-0 mx-2 
              ${
                url.pathname === s.url
                  ? "border-[#0284c7] border-b-2"
                  : ""
              }`}
            >
              <a href={s.url}>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}