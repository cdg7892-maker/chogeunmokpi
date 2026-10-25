import { getDiseaseGuide } from "@/lib/disease-guides";
import { absoluteSiteUrl } from "@/lib/seo";
import ProgramGuideCarousel from "./ProgramGuideCarousel";

export default function ProgramGuideLayout({ path, children }: {
  path: string; children: React.ReactNode;
}) {
  const data = getDiseaseGuide(path);
  if (!data) return children;
  // The visible cards and structured data use the same list and original images.
  const schema = {
    "@context": "https://schema.org", "@type": "ItemList",
    "@id": `${absoluteSiteUrl(data.path)}#program-guides`,
    name: `초근목피한의원 ${data.title} 진료 가이드`,
    numberOfItems: data.items.length,
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.title,
      url: absoluteSiteUrl(item.path), image: absoluteSiteUrl(item.image),
    })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ProgramGuideCarousel title={data.title} path={data.path} items={data.items.map(({ title, description, path, image }) => ({ title, description, path, image }))} />
    <div id="program-content" style={{ scrollMarginTop: "6rem" }}>{children}</div>
  </>;
}
