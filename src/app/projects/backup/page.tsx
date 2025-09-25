import { ProjectCardsCarousel } from "./project-list"
export const metadata = {
  title: "Projects | Mayur Doifode",
  description:
    "Explore the professional journey of Mayur Doifode - fullstack developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Projects | Mayur Doifode",
    description:
      "Fullstack Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://mayur.live/projects",
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
    title: "Projects | Mayur Doifode",
    description:
      "Check out Mayur Doifode's past work and achievements in frontend development.",
    //   images: ["https://mayur.live/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://mayur.live/projects",
  },
}
export default function Page() {
  
  return (
    <div className="w-full max-w-[100vw] xl:w-[85%] mx-auto">
      <ProjectCardsCarousel />
    </div>
  )
}