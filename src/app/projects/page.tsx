import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Projects | Mayur Doifode",
  description:
    "Explore the projects built by Mayur Doifode - fullstack developer with experience in modern JavaScript frameworks.",
  keywords: [
    "Mayur Doifode",
    "Projects",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Projects | Mayur Doifode",
    description:
      "Discover the projects and applications built by Mayur Doifode.",
    url: "https://mayur.live/projects",
    siteName: "Mayur Doifode",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://mayur.live/images/seo/projects-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Mayur Doifode Projects Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mayur Doifode",
    description:
      "Check out Mayur Doifode's past work and achievements in frontend development.",
    // images: ["https://mayur.live/images/seo/projects-og-image.png"],
  },
  alternates: {
    canonical: "https://mayur.live/projects",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="Projects" />
}
