import { FullScreen } from "@/components/full-screen"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors | Mayur Doifode",
  description: "Sponsors of Mayur Doifode",
}

export default function Page() {
  return (
    <FullScreen>
      <HoverBorderGradient
        containerClassName="rounded-[10px]"
        as="button"
        className="dark:bg-[#0d1117] bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer w-full"
      >
        {/* <iframe
          src="https://github.com/sponsors/mayur-cli/card"
          title="Sponsor mayur-cli"
          className="w-full h-full"
          style={{ border: "0" }}
        ></iframe> */}
      </HoverBorderGradient>
    </FullScreen>
  )
}
