"use client"
//* This one is vibe coded (does it really help in SEO it's just a fluff?)
import { personalInfo, skillsContent } from "@/data/portfolio-data"
import Script from "next/script"

export function SeoJsonLd() {
  const sameAs = [
    personalInfo.github,
    personalInfo.linkedin,
    personalInfo.twitter,
    personalInfo.instagram,
  ].filter(Boolean)

  const skills = [
    ...skillsContent.categories.languages.skills,
    ...skillsContent.categories.frameworks.skills,
    ...skillsContent.categories.databases.skills,
    ...skillsContent.categories.otherTechs.skills,
  ].slice(0, 25)

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Junaid Shaikh - Full-Stack Web Developer",
    alternateName: ["zjunaidz", "Junaid Shaikh web developer"],
    url: "https://zjunaidz.me",
  }

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    alternateName: ["zjunaidz"],
    url: "https://zjunaidz.me",
    image: "https://zjunaidz.me/api/og",
    jobTitle: personalInfo.title,
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs,
    knowsAbout: skills,
  }

  return (
    <>
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Script
        id="ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </>
  )
}
