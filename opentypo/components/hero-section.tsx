import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/brandLogo.svg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Rive from "@rive-app/react-canvas";

const copyContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const copyItem = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export function HeroSection() {
  return (
    <>
      <section className="w-full bg-white dark:bg-neutral-900 py-10 pb-24 border-b-2">
        <motion.ul
          className="z-10 relative flex flex-col justify-center items-center gap-2"
          variants={copyContainer}
          initial="hidden"
          animate="show"
        >
          <motion.li
            className="font-serif text-6xl text-wrap text-center leading-none	"
            variants={copyItem}
          >
            Curated Open-source Fonts
          </motion.li>
          <motion.li
            className="font-serif text-6xl text-wrap text-center leading-none	"
            variants={copyItem}
          >
            {" "}
            with <a className="font-italic leading-none	">Attractive Quality</a>
          </motion.li>
          <motion.li
            className="text-lg text-wrap text-center text-neutral-700 dark:text-neutral-400 font-medium mt-3"
            variants={copyItem}
          >
            무료이지만 퀄리티가 보장된,
            <br />
            감도높은 폰트들을 큐레이팅 해드립니다.
          </motion.li>
          <motion.li
            className="flex w-full max-w-sm items-center space-x-2 mt-4"
            variants={copyItem}
          >
            <Input
              type="email"
              placeholder="이메일을 입력해주세요."
              className="bg-white dark:bg-neutral-900"
            />
            <Button
              type="submit"
              className="font-bold bg-brandColor-500 hover:bg-brandColor-400 text-white"
            >
              구독하기
            </Button>
          </motion.li>
        </motion.ul>
      </section>
    </>
  );
}
