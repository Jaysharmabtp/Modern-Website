import { Award, Book, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Vedic Scholar',
      description: 'Trained in traditional Sanskrit and Vedic sciences',
    },
    {
      icon: Book,
      title: 'Ancient Wisdom',
      description: 'Deep knowledge of Puranas, Upanishads, and Vedic texts',
    },
    {
      icon: Users,
      title: '500+ Families Guided',
      description: 'Helped countless families find peace and prosperity',
    },
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Dedicated service to the spiritual community',
    },
  ];

  const expertise = [
    'Vedic Astrology & Horoscope Reading',
    'Kundali Matching & Marriage Compatibility',
    'Traditional Puja & Ritual Ceremonies',
    'Vastu Shastra Consultation',
    'Gemstone & Rudraksha Guidance',
    'Muhurat Selection for Auspicious Events',
    'Spiritual Counseling & Life Guidance',
    'Graha Shanti & Remedial Measures',
  ];

  return (
    <section id="about" className="py-20 gradient-temple">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pandit Ji
              </span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Pandit Lakhan Lal Sharma is a renowned Vedic astrologer and spiritual guide with over 15 years 
                of dedicated service to the community. Born into a family of traditional priests, he has been 
                immersed in the sacred knowledge of Hindu scriptures and Vedic sciences since childhood.
              </p>
              
              <p>
                His deep understanding of ancient texts, combined with practical experience in helping people 
                navigate life's challenges, has made him a trusted advisor for hundreds of families. Pandit Ji 
                specializes in providing authentic Vedic solutions that bring harmony and prosperity to his devotees.
              </p>
              
              <p>
                At Prachin Shiv Mandir, he continues the ancient tradition of spiritual guidance while embracing 
                modern communication methods to reach those in need, no matter where they are in the world.
              </p>
            </div>

            {/* Expertise */}
            <div className="mt-8">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="space-y-4 p-0">
                      <div className="w-16 h-16 mx-auto gradient-divine rounded-full flex items-center justify-center group-hover:animate-divine-pulse">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border/50">
              <blockquote className="text-lg font-serif text-foreground italic text-center">
                "True spiritual guidance comes not from knowledge alone, but from the synthesis of 
                ancient wisdom with compassionate understanding of modern life's challenges."
              </blockquote>
              <p className="text-center text-sm text-muted-foreground mt-4">- Pandit Lakhan Lal Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;