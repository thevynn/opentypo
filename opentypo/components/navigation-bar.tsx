"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/brandLogo.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const navContainer = {
  hidden: { opacity: 0, y: -70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export function NavigationBar() {
  return (
    <motion.div
      variants={navContainer}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-neutral-900 dark:text-neutral-50 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 mt-1" href="#">
          <Logo width={120} />
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-300"
            href="#"
          >
            홈
          </Link>
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-300"
            href="#"
          >
            FAQs
          </Link>
          <div className="space-x-2">
            <Link href="/signin">
              <Button
                variant="outline"
                className="bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                로그인
              </Button>
            </Link>
            <Link href="/signup">
              <Button>계정 만들기</Button>
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

function BrandLogo(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
