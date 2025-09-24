import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Mayur Doifode",
  description:
    "Learn more about Mayur Doifode - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Mayur Doifode",
    "About Kinh",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Mayur Doifode",
    description:
      "Discover the story and journey of Mayur Doifode in the world of web development.",
    url: "https://mayur.live/about",
    siteName: "Mayur Doifode",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://mayur.live/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Mayur Doifode About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Mayur Doifode",
    description:
      "Learn more about Mayur Doifode - Frontend Developer and tech enthusiast.",
    // images: ["https://mayur.live/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://mayur.live/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
