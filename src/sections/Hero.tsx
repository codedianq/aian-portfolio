/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/purity */
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { Button } from '@/components/Button';
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from 'lucide-react';

const TECHSTACKS = [
  'Ionic Framework',
  'CapacitorJS',
  'React',
  'Angular',
  'Vue',
  'ASP.Net',
  'Laravel',
  'Supabase',
  'SQLServer',
  'TailwindCSS',
  'TypeScript',
  'C#',
  'PHP',
  'Git',
  'GitHub Actions',
  'Figma',
  'Claude',
  'ChatGPT',
  'HTML',
  'CSS',
];
const PROFILEPICPATH = 'profile-photo.jpg';
const CVPATH = 'Ian-Quinto-Resume.pdf';
const SOCIALLINKS = [
  { icon: Github, href: 'https://github.com/codedianq' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ianquinto/',
  },
];
const GREETINGS =
  "Hi, I'm Ian — a software developer building mobile and web applications, enhanced by AI to turn ideas into reality faster.";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/background-image.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, _i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: '#800080',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Col - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting fast, scalable full-stack <br />
                solutions with the <br />
                <span className="text-primary glow-text">help of AI</span>
                <br />
                to turn ideas into
                <br />
                <span className="font-serif italic font-normal text-white">
                  real products.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-100">
                {GREETINGS}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="default" onClick={scrollToContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <a href={`cv/${CVPATH}`} download>
                {' '}
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" /> Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className=" text-sm text-muted-foreground">
                Social Links:{' '}
              </span>
              {SOCIALLINKS.map((social, idx) => (
                <a
                  href={social.href}
                  target="_blank"
                  key={idx}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Col - Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={PROFILEPICPATH}
                  alt="Ian Quinto"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-15 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-3 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {[...TECHSTACKS, ...TECHSTACKS].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-6 py-4">
                  <span className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
