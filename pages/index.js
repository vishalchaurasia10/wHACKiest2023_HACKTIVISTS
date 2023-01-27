import react from "react"
import Link from "next/link"
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import Glance from "@/components/Glance"

export default function Home() {
  return (
    <>
      <Meta/>
      <Hero />
      <Glance/>
    </>
  )
}
