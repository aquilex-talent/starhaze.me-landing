import { Background } from "@/components/Background";
import { FeatureCard } from "@/features/landing/FeatureCard";
import { Section } from "@/features/landing/Section";

const Features = () => {
  return (
    <Background>
      <Section
        subtitle={"subtitle"}
        title={"title"}
        description={"description"}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={
              <svg
                className="stroke-primary-foreground stroke-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
              </svg>
            }
            title={"Card title"}
          >
            {"Card description"}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};

export { Features };
