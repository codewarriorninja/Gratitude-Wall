import { Button } from "@/components/ui/button"
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs"
import Link from "next/link"


const page = () => {
  return (
    <div>
     {/* <SignedOut>
      <Button>
        <Link href="/sign-in">Login</Link>
      </Button>
      </SignedOut> */}
      {/* <SignedIn>
        <UserButton afterSignOutUrl="/" showName/>
      </SignedIn> */}
      new
    </div>
  )
}

export default page