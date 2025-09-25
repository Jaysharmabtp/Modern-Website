import { Star, Calendar, Home, Heart, Compass, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Star,
      title: 'Vedic Astrology (Jyotish)',
      description: 'Comprehensive horoscope reading, birth chart analysis, and future predictions based on ancient Vedic principles.',
      features: ['Kundali Analysis', 'Horoscope Reading', 'Future Predictions', 'Gemstone Consultation'],
      variant: 'divine' as const,
    },
    {
      icon: Calendar,
      title: 'Muhurat Selection',
      description: 'Find the most auspicious times for important life events, ceremonies, and new beginnings.',
      features: ['Wedding Muhurat', 'Griha Pravesh', 'Business Launch', 'Journey Planning'],
      variant: 'temple' as const,
    },
    {
      icon: Home,
      title: 'Puja Services',
      description: 'Traditional Hindu rituals and ceremonies performed with authentic mantras and proper procedures.',
      features: ['Griha Pravesh Puja', 'Marriage Ceremonies', 'Rudrabhishek', 'Navgrah Shanti'],
      variant: 'sacred' as const,
    },
    {
      icon: Heart,
      title: 'Kundali Matching',
      description: 'Complete compatibility analysis for marriage proposals using traditional guna matching system.',
      features: ['36 Guna Matching', 'Manglik Analysis', 'Compatibility Report', 'Marriage Counseling'],
      variant: 'divine' as const,
    },
    {
      icon: Compass,
      title: 'Vastu Consultation',
      description: 'Harmonize your living and working spaces according to ancient Vastu Shastra principles.',
      features: ['Home Vastu', 'Office Vastu', 'Plot Selection', 'Vastu Corrections'],
      variant: 'temple' as const,
    },
    {
      icon: Video,
      title: 'Online Consultation',
      description: 'Connect with Pandit Ji from anywhere in the world through secure video consultations.',
      features: ['Video Call Sessions', 'Phone Consultations', 'WhatsApp Support', 'Digital Reports'],
      variant: 'sacred' as const,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Sacred{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic Vedic guidance and traditional rituals to bring peace, prosperity, and spiritual harmony to your life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${index % 3 === 1 ? 'gradient-divine ring-2 ring-primary/20 shadow-md' : `gradient-${service.variant}`} flex items-center justify-center mb-4 group-hover:animate-divine-pulse`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col justify-between flex-1 space-y-4 mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" variant={(index % 3 === 1 ? 'divine' : service.variant)} className="w-full shadow-sm">
                    <a href="#contact" aria-label={`Book ${service.title}`}>Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-temple rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Need Personalized Guidance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every individual's spiritual journey is unique. Book a personal consultation to receive 
              customized guidance tailored to your specific needs and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="divine" size="lg">
                <a href="#contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/917976904849?text=Namaste%2C%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">
                  <Video className="w-5 h-5 mr-2" />
                  Online Booking
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;