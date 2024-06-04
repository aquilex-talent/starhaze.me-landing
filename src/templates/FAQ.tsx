import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/features/landing/Section";

const FAQ = () => {
  return (
    <Section>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{"question"}</AccordionTrigger>
          <AccordionContent>{"answer"}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export { FAQ };
