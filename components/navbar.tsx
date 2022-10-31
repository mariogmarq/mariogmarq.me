const SECTIONS = [
  { name: "About me", url: "/about" },
  { name: "Resume", url: "/resume" },
  { name: "Works", url: "/works" },
];

export default function NavBar({ url }: { url: URL }) {
  return (
    <div class="sticky">
      <div class="flex justify-center">
        <h1 class="font-mono font-bold mt-3 text-lg hover:text-[#CCAFA5] hover:cursor-pointer">
          <a href={"/about"}>
            Mario García Márquez
          </a>
        </h1>
      </div>

      <div class="text-base max-w-[20rem] xl:max-w-lg ml-auto mr-auto mt-3">
        <div class="flex justify-center bg-[#DCD2CC] rounded-3xl">
          <ul class="my-5 block">
            {SECTIONS.map((s) => (
              <li
                class={`inline-block hover:border-b-2 border-gray-500 hover:cursor-pointer pb-0 mx-2 
              ${url.pathname === s.url ? "border-[#CCAFA5] border-b-2" : ""}`}
              >
                <a href={s.url}>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
