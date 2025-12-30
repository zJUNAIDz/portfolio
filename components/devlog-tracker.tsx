"use client"

import { useEffect } from "react"

export default function DevlogPathTracker() {
  useEffect(() => {
    try {
      // store the current devlogs path so the nav can return user to last post
      if (typeof window !== "undefined") {
        sessionStorage.setItem("lastDevlog", window.location.pathname)
      }
    } catch (e) {
      // ignore storage failures
    }
  }, [])

  return null
}
