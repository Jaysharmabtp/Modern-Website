import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-background">
      {/* subtle gradient accent */}
      <div className="h-px w-full bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2">
          <p className="text-xs sm:text-sm text-muted-foreground">© 2025 All Rights Reserved.</p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Developed by <span className="font-semibold text-foreground">Jay Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
