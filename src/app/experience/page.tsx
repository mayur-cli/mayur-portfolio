import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Mayur Doifode",
  description:
    "Explore the professional journey of Mayur Doifode - fullstack developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Mayur Doifode",
    description:
      "Fullstack Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://mayur.live/experience",
    siteName: "Mayur Doifode",
    images: [
      // {
      //   url: "https://mayur.live/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Mayur Doifode Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Mayur Doifode",
    description:
      "Check out Mayur Doifode's past work and achievements in frontend development.",
    //   images: ["https://mayur.live/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://mayur.live/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
