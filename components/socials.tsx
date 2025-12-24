import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";

export function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="flex justify-center gap-6"
    >
      {
        personalInfo.sns.map((social) => {
          return (
            <Link
              key={social.label}
              aria-label={`Junaid Shaikh's ${social.label}`}
              href={social.url}
              target="_blank"
              className="p-3 rounded-full border hover:bg-accent transition-colors"
            >
              <social.Icon className="w-6 h-6" />
            </Link>
          )
        })
      }
    </motion.div>
  )
}

