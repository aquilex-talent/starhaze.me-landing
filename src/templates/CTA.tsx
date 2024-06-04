import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { buttonVariants } from "@/components/ui/button";
import { CTABanner } from "@/features/landing/CTABanner";
import { Section } from "@/features/landing/Section";

const CTA = () => {
  return (
    <Section>
      <CTABanner
        title={"Title"}
        description={"Description"}
        buttons={
          <a
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="https://github.com/ixartz/SaaS-Boilerplate"
          >
            <GitHubLogoIcon className="mr-2 size-5" />
            {"button text"}
          </a>
        }
      />
    </Section>
  );
};

export { CTA };
