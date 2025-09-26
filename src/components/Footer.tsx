import * as React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 relative">
      {/* Background */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-amber-400/20 flex items-center justify-center ring-1 ring-amber-300/40">
                  <span className="text-xl">ॐ</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pandit Lakhan Lal Sharma</h3>
                  <p className="text-sm text-slate-300">Vedic Astrologer & Spiritual Guide</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Serving the spiritual community for over 15 years with authentic Vedic wisdom,
                traditional rituals, and compassionate guidance. Experience the divine connection
                at Prachin Shiva Temple, Geetanand Ashram.
              </p>

              {/* Stats badges */}
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 text-amber-300 px-3 py-1 text-sm ring-1 ring-amber-300/30">
                  <span>⭐</span>
                  <span>500+ Happy Clients</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-400/10 text-rose-300 px-3 py-1 text-sm ring-1 ring-rose-300/30">
                  <Heart className="w-4 h-4" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="grid grid-cols-1 gap-2 text-slate-300">
                {[
                  { href: '#about', label: 'About Pandit Ji' },
                  { href: '#services', label: 'Our Services' },
                  { href: '#temple', label: 'Temple Info' },
                  { href: '#testimonials', label: 'Testimonials' },
                  { href: '#gallery', label: 'Gallery' },
                  { href: '#contact', label: 'Contact Us' },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="text-slate-200">Phone</div>
                    <a href="tel:+919776904849" className="hover:text-amber-300">+91 7976904849</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="text-slate-200">Email</div>
                    <a href="mailto:lakhan.Panditji09@gmail.com" className="hover:text-amber-300">lakhan.Panditji09@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="text-slate-200">Address</div>
                    <p className="max-w-xs">
                      Prachin Shiv Mandir Shri Shri 1008 Brahmarshi Geetanand Ashram
                      <br />Dharampur Sec. 108
                      <br />Gurugram
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="text-slate-200">Consultation Hours</div>
                    <p>Mon–Sun: 9:00 AM – 8:00 PM</p>
                    <p>Emergency: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
            <p className="text-sm">© {year} Pandit Lakhan Lal Sharma. All Rights Reserved.</p>
            <p className="text-sm flex items-center gap-1">
              Developed with <span className="text-amber-300">🙏</span> by <span className="font-medium text-white">Jay Sharma</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
        <Button asChild size="lg" className="shadow-xl hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#25D366', color: '#0b1a13' }}>
          <a href="https://wa.me/917976904849" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            <span className="ml-1">WhatsApp</span>
          </a>
        </Button>
        <Button asChild variant="sacred" size="lg" className="shadow-xl hover:scale-[1.02] transition-transform">
          <a href="tel:+919772274025">
            <Phone className="w-5 h-5" />
            <span className="ml-1">Call Now</span>
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
