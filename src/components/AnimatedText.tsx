const AnimatedText = () => {
    const words = [
      { text: "At", emoji: null },
      { text: "Sentry", emoji: null },
      { text: "we're", emoji: null },
      { text: "revolutionizing", emoji: "🚀" },
      { text: "how", emoji: null },
      { text: "professionals", emoji: null },
      { text: "track", emoji: "✨" },
      { text: "information.", emoji: null },
      { text: "Using", emoji: null },
      { text: "the latest", emoji: null },
      { text: "AI models", emoji: "🤖" },
      { text: "we", emoji: null },
      { text: "understand", emoji: null },
      { text: "your", emoji: null },
      { text: "intent", emoji: "🧐" },
      { text: "to", emoji: null },
      { text: "monitor", emoji: null },
      { text: "any", emoji: null },
      { text: "website", emoji: null },
      { text: "for", emoji: null },
      { text: "the", emoji: null },
      { text: "exact", emoji: null },
      { text: "changes", emoji: null },
      { text: "that", emoji: null },
      { text: "matter.", emoji: "🌐" },
      { text: "So you", emoji: null },
      { text: "can have", emoji: null },
      { text: "the", emoji: null },
      { text: "awareness", emoji: null },
      { text: "of a", emoji: null },
      { text: "full research", emoji: null },
      { text: "team", emoji: "👥" },
      { text: "without", emoji: null },
      { text: "hiring", emoji: null },
      { text: "one.", emoji: null },
    ];
  
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block text-4xl md:text-6xl font-bold mx-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {word.text}
                {word.emoji && (
                  <span className="ml-2 inline-block text-5xl md:text-7xl animate-float">
                    {word.emoji}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AnimatedText;
  