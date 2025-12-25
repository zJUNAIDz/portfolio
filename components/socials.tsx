import { personalInfo } from "@/data/portfolio-data";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex justify-center gap-6">
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
    </div>
  )
}

