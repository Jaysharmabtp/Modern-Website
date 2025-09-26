import { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Temple', href: '#temple' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-colors duration-200 ${
        scrolled ? 'bg-background shadow-md' : 'bg-background'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              {/* Jyotish symbol (sun with 12 rays) */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 text-primary animate-divine-pulse"
                role="img"
                aria-label="Jyotish symbol"
              >
                {/* Core sun */}
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                {/* Rays */}
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="12" y1="1.5" x2="12" y2="4.5" />
                  <line x1="12" y1="19.5" x2="12" y2="22.5" />
                  <line x1="1.5" y1="12" x2="4.5" y2="12" />
                  <line x1="19.5" y1="12" x2="22.5" y2="12" />
                  <line x1="4.05" y1="4.05" x2="6.2" y2="6.2" />
                  <line x1="17.8" y1="17.8" x2="19.95" y2="19.95" />
                  <line x1="4.05" y1="19.95" x2="6.2" y2="17.8" />
                  <line x1="17.8" y1="6.2" x2="19.95" y2="4.05" />
                  <line x1="7.2" y1="2.7" x2="8.5" y2="5.3" />
                  <line x1="15.5" y1="18.7" x2="16.8" y2="21.3" />
                  <line x1="2.7" y1="16.8" x2="5.3" y2="15.5" />
                  <line x1="18.7" y1="8.5" x2="21.3" y2="7.2" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="font-serif font-bold text-base md:text-lg text-foreground leading-none whitespace-nowrap tracking-tight">
                Pandit Lakhan Lal Sharma
              </h1>
              <p className="hidden lg:block text-[11px] md:text-xs text-muted-foreground/90 leading-none mt-0.5">Prachin Shiv Mandir</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 items-center justify-center space-x-2 lg:space-x-3 md:ml-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold tracking-tight text-sm md:text-[15px] px-3 py-2 rounded-full hover:bg-primary/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919772274025" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              <span className="tracking-wide whitespace-nowrap">+91 9772274025</span>
            </a>
            <Button asChild variant="divine" size="sm" className="whitespace-nowrap shadow-sm">
              <a href="#contact">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/98 shadow-sm">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-3 px-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:+919772274025" className="flex items-center space-x-2 text-sm text-muted-foreground mb-3 hover:text-primary">
                  <Phone className="w-4 h-4" />
                  <span className="whitespace-nowrap">+91 9772274025</span>
                </a>
                <Button asChild variant="divine" className="w-full">
                  <a href="#contact">Book Appointment</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Subtle bottom gradient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30" />
    </nav>
  );
};

export default Navigation;