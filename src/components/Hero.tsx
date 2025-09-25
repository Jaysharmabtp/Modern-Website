import { Calendar, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import panditJiPhoto from '@/assets/pandit-ji-photo.jpg';

const Hero = () => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-temple">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                Pandit{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Lakhan Lal Sharma
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">Vedic Astrologer & Spiritual Guide</p>
              <p className="text-lg text-foreground font-medium">Prachin Shiv Mandir</p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                With over 15 years of experience in Vedic astrology, puja rituals, and spiritual guidance, 
                Pandit Ji brings ancient wisdom to modern life challenges.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>Expert Astrologer</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => scrollToId('contact')} variant="divine" size="lg" className="animate-divine-pulse">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button asChild variant="temple" size="lg">
                <a href="https://wa.me/917976904849?text=Namaste%2C%20I%20have%20a%20question%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask a Question
                </a>
              </Button>
              <Button onClick={() => scrollToId('services')} variant="sacred" size="lg">
                <Star className="w-5 h-5 mr-2" />
                Know Your Horoscope
              </Button>
            </div>

            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Online Consultation</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative Background */}
              <div className="absolute inset-0 gradient-divine rounded-3xl transform rotate-6 animate-float"></div>
              <div className="absolute inset-0 gradient-sacred rounded-3xl transform -rotate-3 opacity-80"></div>
              
              {/* Main Image */}
              <div className="relative z-10 bg-card rounded-3xl p-2 divine-glow">
                <img
                  src={panditJiPhoto}
                  alt="Pandit Lakhan Lal Sharma performing religious rituals in traditional saffron attire"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Floating Om Symbol */}
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-divine rounded-full flex items-center justify-center animate-divine-pulse z-20">
                <span className="text-2xl text-primary-foreground font-bold">ॐ</span>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 gradient-sacred rounded-full flex items-center justify-center animate-float z-20">
                <span className="text-lg text-accent-foreground font-bold">🕉️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;