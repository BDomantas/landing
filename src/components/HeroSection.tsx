import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-mascot.svg";
import Orb from './Background';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative">
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: 80, 
          left: 0, 
          zIndex: 1,
          pointerEvents: 'auto'
        }}
        className="group"
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={322}
          forceHoverState={false}
        />
      </div>
      <div 
        className="container mx-auto max-w-6xl relative z-20"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Never miss an update.<br />
            Act 100x faster.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Trigger turns any website into a smart alert system. <br/> Get notified about any change, exactly when you want it.
          </p>
          <Button 
            variant="gradient" 
            size="lg" 
            className="group"
          >
            Start Monitoring for Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
          <div className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-full">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              💼
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">Made simple</div>
              <div className="text-xs text-muted-foreground">to be used by anyone</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-full">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              🤖
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">Powered by AI</div>
              <div className="text-xs text-muted-foreground">to find the changes you care about</div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <img 
            src={heroImage} 
            alt="Tool Interface" 
            className="w-full h-auto rounded-3xl shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
