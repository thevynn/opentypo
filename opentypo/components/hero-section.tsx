import Link from "next/link"
import Image from "next/image";
import Logo from '@/public/images/brandLogo.svg';
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion"


export function HeroSection() {
  return (
    <>
      <section className="w-full bg-white dark:bg-neutral-900 py-10">
        <motion.div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-serif text-7xl text-wrap text-center">Curated Open-source Fonts <br/> with <i>Attractive Quality</i></h1>
          <h3 className="text-lg text-wrap text-center text-neutral-700 dark:text-neutral-400">무료이지만 퀄리티가 보장된,<br/>감도높은 폰트들을 큐레이팅 해드립니다.</h3>
        </motion.div>
      </section>
    </>
  )
}
