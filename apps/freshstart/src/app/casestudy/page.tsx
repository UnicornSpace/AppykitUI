import { caseStudies } from "@/lib/source";
import CaseStudyList, { type CaseStudyCard } from "./CaseStudyList";

export default function CaseStudyPage() {
  const allCaseStudies = caseStudies.getPages();
  const publishedCaseStudies: CaseStudyCard[] = allCaseStudies
    .filter((item) => (item.data as any).isPublished === true)
    .map((item) => ({
      url: item.url,
      data: {
        title: item.data.title || "",
        description: item.data.description || "",
        thumbnail: (item.data as any).thumbnail || "/Flutter-appykit-blog-thumbnail.png",
        tags: (item.data as any).tags || [],
        company: (item.data as any).company || "",
        industry: (item.data as any).industry || "",
      },
    }));

  return <CaseStudyList items={publishedCaseStudies} />;
}
