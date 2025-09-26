import * as React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const addressLines = [
    'Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram',
    'Dharampur Sec. 108',
    'Gurugram',
  ];
  const addressFull = addressLines.join(', ');
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressFull)}`;
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      description: 'Direct call for immediate guidance',
      contact: '9772274025',
      action: 'Call Now',
      variant: 'divine' as const,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick messages and appointment booking',
      contact: '7976904849',
      action: 'Chat Now',
      variant: 'temple' as const,
    },
    {
      icon: Mail,
      title: 'Email Inquiry',
      description: 'Detailed questions and consultations',
      contact: 'lakhan.Panditji09@gmail.com',
      action: 'Send Email',
      variant: 'sacred' as const,
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 8:00 PM' },
    { day: 'Emergency', time: '24/7 Available' },
  ];

  const WHATSAPP_NUMBER = '917976904849'; // with country code, no plus
  const CALL_NUMBER = '+919772274025';

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    const lines = [
      `New enquiry from website`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      service ? `Service: ${service}` : '',
      '',
      message ? `Message: ${message}` : 'Message: (not provided)',
    ].filter(Boolean);

    const text = lines.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    const opened = window.open(url, '_blank');
    if (!opened) {
      // Fallback when pop-up is blocked
      window.location.href = url;
    }
  }

  function handleRequestCallback(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // Prefer direct call
    window.location.href = `tel:${CALL_NUMBER}`;
  }

  return (
    <section id="contact" className="py-20 gradient-temple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out for spiritual guidance, appointment booking, or any questions about our services. 
            We're here to help you on your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Contact Methods</h3>
            
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const href =
                method.title.includes('Phone')
                  ? `tel:+91${method.contact}`
                  : method.title.includes('WhatsApp')
                  ? `https://wa.me/91${method.contact}`
                  : method.title.includes('Email')
                  ? `mailto:${method.contact}`
                  : undefined;
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {method.title.includes('WhatsApp') ? (
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                          <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 gradient-${method.variant} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-medium text-foreground mb-3">
                          {method.title.includes('Email') ? (
                            <span>{method.contact}</span>
                          ) : (
                            <span>+91 {method.contact}</span>
                          )}
                        </p>
                        {href ? (
                          <Button asChild variant={method.variant} size="sm" className="w-full">
                            <a href={href} target={method.title.includes('WhatsApp') ? '_blank' : undefined} rel={method.title.includes('WhatsApp') ? 'noopener noreferrer' : undefined}>
                              {method.action}
                            </a>
                          </Button>
                        ) : (
                          <Button variant={method.variant} size="sm" className="w-full">{method.action}</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Location & Contact Summary */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-foreground flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <span className="font-semibold text-foreground">Temple Address</span>
                  </div>
                  <p className="text-muted-foreground ml-6">
                    Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram<br />
                    Dharampur Sec. 108<br />
                    Gurugram
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">Temple Office</span>
                  </div>
                  <a href="tel:+919772274025" className="text-foreground ml-6 hover:text-primary">+91 9772274025</a>
                </div>

                <Button asChild variant="divine" className="w-full">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-foreground flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Consultation Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{hours.day}</span>
                      <span className="font-medium text-foreground">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Enter your full name" 
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        name="phone"
                        placeholder="+91XXXXXXXXXX" 
                        pattern="\\+?[0-9][0-9\\s-]{7,}"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        name="email"
                        placeholder="your.email@example.com" 
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-foreground">Service Interested In</Label>
                      <select 
                        id="service" 
                        name="service"
                        className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="astrology">Vedic Astrology</option>
                        <option value="puja">Puja Services</option>
                        <option value="vastu">Vastu Consultation</option>
                        <option value="kundali">Kundali Matching</option>
                        <option value="muhurat">Muhurat Selection</option>
                        <option value="online">Online Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Please describe your requirement or question in detail..."
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="divine" size="lg" className="flex-1">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                    <Button type="button" onClick={handleRequestCallback} variant="temple" size="lg" className="flex-1">
                      <Phone className="w-5 h-5 mr-2" />
                      Request Call Back
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border-border/50 mt-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-divine rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Visit Our Temple</h4>
                    <p className="text-muted-foreground">
                      Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram<br />
                      Dharampur Sec. 108<br />
                      Gurugram
                    </p>
                    <Button asChild variant="outline" className="mt-4">
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Map
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="mt-6 rounded-xl overflow-hidden shadow-sm border border-border/50">
                  <div className="aspect-video">
                    <iframe
                      title="Temple Location Map"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(addressFull)}&output=embed`}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;