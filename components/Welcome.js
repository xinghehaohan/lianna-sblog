import siteMetadata from "@/data/siteMetadata";
import Icon from "@/components/icons";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function Welcome() {
  // previously had <> </> but that was causing a warning
  return (
    <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8">
        <Image
          src={siteMetadata.image}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="flex space-x-3 pt-6 hover:text-primary-600 dark:hover:text-primary-400">
          <Icon kind="twitter" href={siteMetadata.twitter} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="github" href={siteMetadata.github} />
        </div>
      </div>
      <div className=" prose pt-8 pb-8 dark:prose-dark xl:col-span-2">
        <h2>Hey, I am Lianna</h2>

        <p>
          I am a frontend engineer based in Dublin. In my free time, I enjoy
          working on side projects and learning software development and design.
          Occasionally, I write essays on calm life, exploration, experiments
          and making sense of the world. My
          <a href="lianna1993su@gmail.com"> Email</a> always open.
        </p>
      </div>
    </div>
  );
}
