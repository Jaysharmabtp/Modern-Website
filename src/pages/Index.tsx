import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TempleInfo from '@/components/TempleInfo';
import Contact from '@/components/Contact';

const Index = () => {
  const galleryImages = [
    // Your 5 Google Photos temple images
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqT5bM0-dFbP50Koz66tbyVrbWUsmJOPVHJgNcqUWaWpOxAAjkI4F85-3i9cW1cNmqahcvdU5WlWiOa_CxAvpU23LLoQhFD0OUqjYWKGRISuxC-86n2ZdbWQaXd5QxIIoLmcMflrNqgvZV=w141-h235-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npuaBUqsyO-fhf7Um5sojTplD9NOErj8MEQ7C6dRzuVG60gZD43wP4x31vmBv_HsJrpvczwaCIKlw8Bx-9wvSPR1Bjo514eP0QVFACOp5xwZpA6qId8kE2-MFZtnxkBGyj3HZFP=w141-h235-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr4ZYnJ2bErybvXBPot-eq8Z96iFjhM7CAu0GCnoIRsEJcjZfGTSm6wdNd6NpWiDfCe7nWjY27sAAUQNY6xgHY7EwnAy8Vsq8OQcFtilRvQIcnv7CRd2z5-ggRFGwJdK4h5FWZqjg=w141-h176-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr0kHFWlIVmv0JT_erN2aZKzDrrG2DL_q5Vjwv-ufppVHhPwa_txDx0icHkY2dBxTBLGq5p8dCnjb7vu2G5PvKHPvQqdl3MITnYyIsNh6GoCGOgSkPL2L3S-KC3tiKIEDYA0H2eVlI3tNU=w141-h235-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqVD_0eDsH1WoFzRhJnqRSYXNDxTysIw9_D_I_RmozYfusjyoKK8p2dnj_LL3CudITNlAKNWWmUUyFr7OS2yN7PXxDApt_q3N0Z6HvdV7Ob8_1Wv6zBE5azvXSt4bd5wBHZXoHhNLNfYp6f=w141-h176-n-k-no-nu',
    // Keep the 3 existing temple images
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrf3IYKyLzQLi4j1YqvDhgyQZclvE0AP3D3D5J--KvU1UcPht3t-jVGlLsqfarXHu98RmCJboFslk6S7OeiH5_WfSkVn45TjKwEMp6xWDpHcTmSm6OYy9ilfbLS7i01Ar3LN1oF=w243-h406-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr5L8WTnuB7eZ4XWH6AYonBPxtCuvdVe9OSi50E2dwiCheOburu6UiM6pX5PwldQpo-EJsHPzgkom1NzsFOdw3DYkGKQujQhVWqrs4xZj6_rGKx5vkUS_-sOUQrvte-v40Cj1mL=w243-h406-n-k-no-nu',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCdX2Y-_d9OFqzp-2nS3fOLZSpBEuafyiY8mRefTmPgAuPVYEroon0Yl0-dlkdxlT3qyW4jrHTtI-IsouhgKn-RYUvqCYsNaepXkuD-zqlte3m-eX8R4sF8cQHzkGyOw6KVgXy-SSejwaZ=w243-h244-n-k-no-nu',
  ];
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-2">Testimonials</h2>
            <p className="text-muted-foreground">What devotees and clients say about their experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Accurate guidance and very compassionate approach. Highly recommended!',
              'Our puja was conducted with utmost devotion and proper rituals.',
              'Kundali analysis was detailed and helpful for our family decisions.',
            ].map((quote, i) => (
              <div key={i} className="p-6 rounded-xl border border-border/50 bg-card shadow-sm">
                <p className="text-foreground">“{quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-2">Gallery</h2>
            <p className="text-muted-foreground">Glimpses of rituals, temple, and spiritual moments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-xl border border-border/50 bg-card block">
                <div className="w-full aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Temple photo ${i + 1}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      // simple inline SVG placeholder
                      const svg = encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>\n  <rect width='100%' height='100%' fill='${'#f1f5f9'}'/>\n  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${'#64748b'}' font-family='Arial, sans-serif' font-size='16'>Image not found</text>\n</svg>`
                      );
                      el.src = `data:image/svg+xml;charset=utf-8,${svg}`;
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <TempleInfo />
      <Contact />
    </div>
  );
};

export default Index;
