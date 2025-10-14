const AllInOne = () => {
    const categories = [
      { name: "Competitor Tracking", emoji: "📈" },
      { name: "Price Monitoring", emoji: "💰" },
      { name: "Media Mentions", emoji: "📰" },
      { name: "Job Openings", emoji: "🧑‍💼" },
    ];
  
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The All-in-One Awareness Tool
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <em>Stop juggling tabs, RSS feeds, and manual refreshes.</em> This is your AI for web monitoring, built for action.
              From price changes to news alerts. Critical insights? Covered.
            </p>
          </div>
  
          <div className="mb-12 flex justify-center gap-6 flex-wrap">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="px-8 py-4 bg-secondary rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="aspect-[3/4] bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                <div className="text-5xl">
                  {['🎨', '📱', '💌', '🎬', '📊', '✨'][i % 6]}
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">Powered By</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AllInOne;
  