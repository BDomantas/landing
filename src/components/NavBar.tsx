import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold">
              🤖
            </a>
            <div className="hidden md:flex items-center gap-6">
              <button className="text-foreground hover:text-primary transition-colors">
                Use cases
              </button>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Affiliate
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Login
              </a>
            </div>
          </div>
          <Button variant="outline" size="lg">
            Buy now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
