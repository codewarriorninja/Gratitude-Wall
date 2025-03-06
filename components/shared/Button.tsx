import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button"
import Link from "next/link"

export function Button() {
  return <div className="flex items-center justify-center mt-5"><InteractiveHoverButton><Link href={'/sign-in'}>Get Started</Link></InteractiveHoverButton></div>
}
