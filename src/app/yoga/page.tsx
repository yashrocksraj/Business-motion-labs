import type { Metadata } from "next";
import IndustryPage from "../components/IndustryPage";
import { INDUSTRIES } from "../lib/site";

const data = INDUSTRIES.yoga;

export const metadata: Metadata = {
  title: `Websites, Booking & Follow-up for ${data.name} | Business Motion Labs`,
  description: data.intro,
  openGraph: {
    title: `${data.headline} ${data.headlineMuted}`,
    description: data.intro,
    images: [data.image],
  },
};

export default function Page() {
  return <IndustryPage data={data} />;
}
