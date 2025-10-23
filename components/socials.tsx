import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MailIcon } from "lucide-react";
import Link from "next/link";
import { SVGAttributes } from "react";

export function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="flex justify-center gap-6"
    >
      <Link
        aria-label="Junaid Shaikh's GitHub"
        href={personalInfo.github}
        target="_blank"
        className="p-3 rounded-full border hover:bg-accent transition-colors"
      >
        <Github className="w-6 h-6" />
      </Link>
      <Link
        aria-label="Junaid Shaikh's LeetCode"
        href={personalInfo.leetcode}
        target="_blank"
        className="p-3 rounded-full border hover:bg-accent transition-colors"
      >
        <LeetcodeIcon />
      </Link>
      <Link
        aria-label="Junaid Shaikh's LinkedIn"
        href={personalInfo.linkedin}
        target="_blank"
        className="p-3 rounded-full border hover:bg-accent transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link
        aria-label="Junaid Shaikh's Email"
        href={`mailto:${personalInfo.email}`}

        target="_blank"
        className="p-3 rounded-full border hover:bg-accent transition-colors"
      >
        <MailIcon className="w-6 h-6" />
      </Link>
    </motion.div>
  )
}

function LeetcodeIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
      fill={"currentColor"} viewBox="0 0 24 24" {...props} >
      {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
      <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path><path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
    </svg>
  );
} 