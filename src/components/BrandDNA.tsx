const BrandDNA = () => {
    const features = [
      {
        title: "Understands Your Query",
        description: "It's not about keywords. Our AI grasps the context and intent behind your request. \"Is it in stock?\" means more than just text on a page.",
        icon: "🧠",
      },
      {
        title: "Detects Meaningful Change",
        description: "It filters out the noise. Our AI knows the difference between a website's footer update and a critical pricing change.",
        icon: "🎯",
      },
      {
        title: "Learns What Matters",
        description: "The more you use it, the smarter it gets. Trigger learns your priorities to deliver high-signal alerts, not spam.",
        icon: "📊",
      },
      {
        title: "Knows Your Use Case",
        description: "Whether you're tracking competitor prices, government tenders, or product restocks, our AI adapts to find the data you need.",
        icon: "👥",
      },
      {
        title: "Keeps Data Private",
        description: "Your monitoring targets and triggers are your private strategy. They are never shared, trained on, or reused.",
        icon: "🔒",
      },
    ];
  
    return (
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powered By Your Intent
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple price checks to complex data shifts. Sentry's AI learns what you care about. Then acts on it.            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
                }`}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default BrandDNA;
  
  