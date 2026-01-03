import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Logo from "./logo";
import Link from "next/link";

function MainFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 ">
            {/* <Icons.logo className="icon-class w-6" /> */}
            <Logo height={200} width={200} />
          </div>
          <div className="mb-4 flex space-x-4">
            {/* <Button variant="outline" size="icon" className="rounded-full">
              <IconBrandFacebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button> */}
            <Link href="https://x.com/AppykitUI" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <IconBrandX className="h-4 w-4 text-primary" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            {/* <Button variant="outline" size="icon" className="rounded-full">
              <IconBrandInstagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button> */}
            <Link href="https://www.youtube.com/@likithabuilds" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <IconBrandYoutubeFilled className="h-4 w-4 text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
          <nav className="mb-4 flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:text-primary">
              Home
            </Link>
            <Link href="#" className="hover:text-primary">
              About
            </Link>
            {/* <Link  href="#" className="hover:text-primary">
              Services
            </Link> */}
            {/* <Link  href="#" className="hover:text-primary">
              Products
            </Link> */}
            <Link href="#" className="hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full"
                />
              </div>
              <Button type="submit" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
