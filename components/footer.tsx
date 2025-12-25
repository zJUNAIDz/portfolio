"use client"

import { Socials } from "./socials"

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col items-center gap-6"
        >
          <Socials />
          {/* Copyright */}
          {/* There ain't no copyrights bruh */}
        </div>
      </div>
    </footer>
  )
}
