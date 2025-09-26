import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anita Sharma',
    message:
      'Accurate guidance and very compassionate approach. Highly recommended! The remedies worked wonderfully for my family.',
  },
  {
    name: 'Rahul Verma',
    message:
      'Our puja was conducted with utmost devotion and proper rituals. Felt a strong spiritual presence throughout.',
  },
  {
    name: 'Kavita & Mohit',
    message:
      'Kundli matching analysis was detailed and helpful for our marriage planning. Thank you for the clarity!',
  },
  {
    name: 'Vikas Gupta',
    message:
      'Practical advice rooted in the Vedas. I appreciate the caring nature and clear explanations.',
  },
];

const Dot: React.FC<{ selected: boolean; onClick: () => void }> = ({ selected, onClick }) => (
  <button
    aria-label="Go to slide"
    onClick={onClick}
    className={`h-2.5 w-2.5 rounded-full transition-colors ${selected ? 'bg-primary' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'}`}
  />
);

const TestimonialsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-2">Testimonials</h2>
          <p className="text-muted-foreground">What devotees and clients say about their experience</p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
                <div className="h-full p-6 rounded-xl border border-border/50 bg-card shadow-sm">
                  <div className="flex items-center gap-1 text-primary mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">“{t.message}”</p>
                  <p className="text-sm text-muted-foreground">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <Dot key={i} selected={i === selectedIndex} onClick={() => emblaApi?.scrollTo(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
