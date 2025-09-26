import { MapPin, Clock, Calendar, Phone, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TempleInfo = () => {
  const addressLines = [
    'Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram',
    'Dharampur Sec. 108',
    'Gurugram',
  ];
  const addressFull = addressLines.join(', ');
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressFull)}`;
  const templeTimings = [
    { day: 'Monday - Friday', morning: '5:00 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM' },
    { day: 'Saturday - Sunday', morning: '4:30 AM - 12:30 PM', evening: '3:30 PM - 9:30 PM' },
    { day: 'Special Days', morning: '4:00 AM - 1:00 PM', evening: '3:00 PM - 10:00 PM' },
  ];

  const events: Array<{ name: string; date: string; type: string; time?: string }> = [
    { name: 'Somvar Shiv Puja', date: 'Every Monday', type: 'Weekly Puja', time: 'Morning & Evening Aarti' },
    { name: 'Diwali – Lakshmi Pujan', date: 'This Diwali', type: 'Festival', time: '7:00 PM' },
    { name: 'Govardhan Puja & Annakoot', date: 'Next Day after Diwali', type: 'Festival' },
    { name: 'Bhai Dooj', date: 'Two days after Diwali', type: 'Festival' },
    { name: 'Kartik Purnima Deepdan', date: 'This Month', type: 'Festival', time: 'Evening' },
    { name: 'Navratri Special Pujas', date: 'During Navratri', type: 'Festival', time: 'Morning & Evening' },
    { name: 'Mahashivratri Mahotsav', date: 'Upcoming', type: 'Festival', time: 'All Night Jagran' },
  ];

  return (
    <section id="temple" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Prachin{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shiv Mandir
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A sacred sanctuary where ancient traditions meet modern devotion, offering solace and spiritual upliftment to all who seek divine blessings
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Temple Information */}
          <div className="space-y-8">
            {/* About Temple */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground flex items-center">
                  <div className="w-8 h-8 gradient-divine rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-bold">🕉️</span>
                  </div>
                  Temple Heritage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Prachin Shiv Mandir stands as a testament to centuries of devotion and spiritual practice. 
                  This ancient temple has been a beacon of faith for generations, maintaining the sacred 
                  traditions of Lord Shiva worship with unwavering dedication.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The temple houses a magnificent Shivling that is believed to be self-manifested (Swayambhu), 
                  making it a highly revered pilgrimage site. Daily rituals and special ceremonies continue 
                  the ancient traditions passed down through generations.
                </p>
              </CardContent>
            </Card>

            {/* Location & Contact */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Temple Address</p>
                      <p className="text-muted-foreground">
                        Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram<br />
                        Dharampur Sec. 108<br />
                        Gurugram
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Temple Office</p>
                      <a href="tel:+919772274025" className="text-muted-foreground hover:text-primary">+91 9772274025</a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="divine" className="w-full">
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Image + Timings & Events */}
          <div className="space-y-8">
            {/* Temple Image */}
            <Card className="border-border/50 overflow-hidden">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npRAJkRMwtVyt7X21mMMgLr9XDnn516YqngHi4Zq2-ao-yRpVqxxKzlV11G7YrL__z18bgby1EeLjFZKnzPEnXxOhGohidf-0mAmR9IL259nd7lwj3xaEYW6T8eYsjm8Y8e0Bd-pNYO0CKR=s1360-w1360-h1020-rw"
                  alt="Prachin Shiv Mandir temple view"
                  className="w-full h-[280px] md:h-[360px] object-cover object-[center_20%]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </Card>
            {/* Temple Timings */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Temple Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templeTimings.map((timing, index) => (
                    <div key={index} className="border-b border-border/30 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-foreground mb-2">{timing.day}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Morning:</span>
                          <p className="font-medium text-foreground">{timing.morning}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Evening:</span>
                          <p className="font-medium text-foreground">{timing.evening}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events (moved to full width below) */}

            {/* Temple Services */}
            <div className="grid grid-cols-2 gap-4">
              <Button asChild variant="temple" className="h-auto flex-col py-4">
                <a href="/images/temple-placeholder.svg" target="_blank" rel="noopener noreferrer">
                  <Camera className="w-6 h-6 mb-2" />
                  <span>Virtual Darshan</span>
                </a>
              </Button>
              <Button asChild variant="sacred" className="h-auto flex-col py-4">
                <a href="#contact">
                  <Calendar className="w-6 h-6 mb-2" />
                  <span>Book Puja</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Full-width Upcoming Events grid to use available space */}
        <Card className="mt-8 border-border/50">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground flex items-center">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              Temple Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.slice(0, 8).map((event, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/30 border border-border/40 h-full">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground leading-snug">{event.name}</h4>
                      <p className="text-sm text-muted-foreground leading-snug">{event.date}</p>
                      {event.time && (
                        <p className="text-sm text-muted-foreground leading-snug">{event.time}</p>
                      )}
                      <span className="inline-block text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-2">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TempleInfo;