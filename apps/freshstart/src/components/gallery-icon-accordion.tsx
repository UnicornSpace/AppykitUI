
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LuBrain,
  LuChartPie,
  LuFolderTree,
  LuGithub,
  LuShield,
  LuSignal,
  LuSmartphone,
  LuStar,
  LuTarget,
  LuCircleHelp,
} from "react-icons/lu";
import { paisaLogrFaqData } from "./gallery-bentogrid";
import { IconType } from "react-icons";

const categoryIconMap: Record<string, IconType> = {
  privacy: LuShield,
  offline: LuSignal,
  "app-details": LuSmartphone,
  benefits: LuBrain,
  insights: LuChartPie,
  organization: LuFolderTree,
  budgeting: LuTarget,
  trust: LuGithub,
  "social-proof": LuStar,
};

const items = paisaLogrFaqData.map((faq, index) => ({
  content: faq.answer,
  icon: categoryIconMap[faq.category] ?? LuCircleHelp,
  id: String(index + 1),
  title: faq.question,
}));

export default function GalleryIconAccordion() {
  return (
    <div className="space-y-4 py-8 max-w-2xl mx-auto px-4">
      <h2 className="font-bold text-xl">Paisa Logr FAQ</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              <span className="flex items-center gap-3">
                <item.icon
                  aria-hidden="true"
                  className="shrink-0 opacity-60"
                  size={16}
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="ps-7 pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
