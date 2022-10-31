import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/layout.tsx";

export default function Home(props: PageProps) {
  const { url } = props;

  return (
    <Layout url={url}>
      <img
        src="profile.jpg"
        class="w-[150px] h-[150px] rounded-full inline-block"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <div class="my-6 font-sans text-xl text-left max-w-2xl">
        <p>
          Hi! I am{" "}
          <strong>Mario</strong>. I'm a spanish Computer Science and mathematics
          student from Granada, Spain. Currently I am in Aachen, Germany where I
          am doing the Erasmus+ program while taking master's courses about
          Computer Science. I am always learning new technologies and concepts.
          I also like to code stuff that can make people life easier.
        </p>

        <p class="my-4">
          Despite I am not focused yet in a specific field of computer science
          or mathemathics I have developed more interest for certains parts.
          Between those you can find Data Science, Machine Learning, DevOps,
          Software architecture and Algebra.
        </p>

        <p class="my-4">
          If you want to get in <strong>contact</strong>{" "}
          with me don't hesitate in sending me an{" "}
          <a
            href="mailto:mariogarciamarq@gmail.com"
            class="text-underline hover:text-[#CCAFA5]"
          >
            email
          </a>. Also if you want to know more about my professional trajectory
          you can checkout my{" "}
          <a
            href="/resume"
            class="text-underline hover:text-[#CCAFA5]"
          >
            resume
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/mariogmarq/"
            class="text-underline hover:text-[#CCAFA5]"
          >
            Linkedin
          </a>.
        </p>
      </div>
    </Layout>
  );
}
