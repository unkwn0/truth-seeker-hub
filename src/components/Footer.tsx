export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
      <span className="text-xs text-muted-foreground font-mono">© 2025 Piotr. Kraków, Poland.</span>
      <a
        href="https://piotr.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors duration-150"
      >
        piotr.app
      </a>
    </div>
  </footer>
);
