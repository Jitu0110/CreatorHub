import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BrushIcon className="h-6 w-6" />
          <span className="sr-only">Content Creator Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Creators
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="ml-auto">
          <Button variant="secondary">Join Now</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Connect and Collaborate with Content Creators
              </h1>
              <p className="max-w-[600px] text-lg">
                Discover and connect with talented content creators, build partnerships, and bring your ideas to life.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary">Join Now</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <img
              src="/content-creator.jpg"
              width={200}
              height={200}
              alt="Content-Creator"
              className="rounded-xl object-cover sm:w-full lg:w-1/2 lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover, Connect, and Collaborate</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to find and connect with talented content creators, build partnerships, and
                  bring your ideas to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Discover Creators</h3>
                      <p className="text-muted-foreground">
                        Browse our directory of talented content creators across various niches and industries.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Connect and Collaborate</h3>
                      <p className="text-muted-foreground">
                        Reach out to creators, build partnerships, and collaborate on exciting projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Manage Partnerships</h3>
                      <p className="text-muted-foreground">
                        Track your ongoing collaborations and manage contracts, payments, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
              src="/content-creator.jpg"
              width={200}
              height={200}
              alt="Content-Creator"
              className="rounded-xl object-cover sm:w-full lg:w-1/2 lg:aspect-square"
            />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Creators Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the creators who have found success on our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Lifestyle Vlogger</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    "The Content Creator Platform has been a game-changer for\n my business. I've connected with so many
                    amazing\n collaborators and grown my audience in ways I never\n thought possible."
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">Sarah Miller</h4>
                      <p className="text-sm text-muted-foreground">Beauty Influencer</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    "I've been using the Content Creator Platform for a few\n months now, and it's been an absolute
                    game-changer. The\n tools and resources have helped me streamline my\n collaborations and grow my
                    brand in ways I never thought\n possible."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the Content Creator Community
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today and start connecting with talented creators, building partnerships, and bringing your
                ideas to life.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Join Now</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
  <div className="container mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
    <div className="grid gap-1">
      <h3 className="font-semibold">Platform</h3>
      <Link href="#" prefetch={false}>
        Features
      </Link>
      <Link href="#" prefetch={false}>
        Pricing
      </Link>
      <Link href="#" prefetch={false}>
        Creators
      </Link>
      <Link href="#" prefetch={false}>
        Contact
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Community</h3>
      <Link href="#" prefetch={false}>
        Discord
      </Link>
      <Link href="#" prefetch={false}>
        Twitter
      </Link>
      <Link href="#" prefetch={false}>
        Instagram
      </Link>
      <Link href="#" prefetch={false}>
        YouTube
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Connect</h3>
      <div className="flex gap-2 items-center">
        <Link href="#" className="hover:text-primary" prefetch={false}>
          <TwitterIcon className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-primary" prefetch={false}>
          <InstagramIcon className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-primary" prefetch={false}>
          <YoutubeIcon className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-primary" prefetch={false}>
          <DiscIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
    </div>
    </footer>
    </div>
  )
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}