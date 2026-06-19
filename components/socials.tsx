import { personalInfo } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {personalInfo.sns.map((social) => (
        <Link
          key={social.label}
          aria-label={`Junaid Shaikh's ${social.label}`}
          href={social.url}
          target="_blank"
          className="border hairline p-2.5 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
        >
          <social.Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
