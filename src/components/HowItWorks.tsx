import step1Image from "@/assets/step-1-url.svg";
import step2Image from "@/assets/step-2-swipe.svg";
import step3Image from "@/assets/step-3-edit.svg";
import step4Image from "@/assets/step-4-publish.svg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Input your URL",
      description: "Drop the link to any page and Sentry's AI will begin its analysis.",
      image: step1Image,
    },
    {
      number: "02",
      title: "Describe your trigger",
      description: "Tell our AI what to watch for in plain English. e.g., \"Notify me when the price drops below $50\" or \"Alert me when a new job is posted\"",
      image: step2Image,
    },
    {
      number: "03",
      title: "Connect your channels",
      description: "Get alerts sent directly to your Email, Slack, or other integrated apps.",
      image: step3Image,
    },
    {
      number: "04",
      title: "Get instant alerts",
      description: "Act on opportunities the moment they happen, 100x faster.",
      image: step4Image,
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
          How Our AI Monitoring Tool Works
          </h2>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Vertical timeline connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-[22px] top-20 bottom-[-128px] w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
              )}

              {/* Left side - Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  {/* Number circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="bg-background rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
