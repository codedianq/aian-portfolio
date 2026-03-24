// import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'MagCoop Online',
    description:
      'A cooperative management application that digitizes membership, loan, and savings processes within a unified platform. It supports member registration, loan application workflows, and real-time savings tracking, backed by secure, API-driven architecture for efficient and reliable transaction handling.',
    image: 'projects/project-magcoop.jpg',
    tags: ['Ionic Framework', 'React', 'TypeScript', 'Supabase', 'Figma'],
    deployed: true,
    androidLink:
      'https://play.google.com/store/search?q=magcoop%20online&c=apps&hl=en',
    iosLink: 'https://apps.apple.com/ph/app/magcoop-online/id6757223527',
  },
  {
    title: 'Isuzu Inventory System',
    description:
      "A full-stack inventory management system built with Vue.js and Laravel that tracks incoming parts deliveries, monitors quality assurance inspections, and manages received items with role-based access control. The system streamlined the client\n's supply chain operations by replacing manual tracking with a structured, traceable workflow from delivery intake to QA verification.",
    image: 'projects/project-isuzu.jpg',
    tags: ['Vue', 'TypeScript', 'Laravel', 'Figma'],
    deployed: false,
    androidLink: '',
    iosLink: '',
  },
  {
    title: 'GIGS.PH',
    description:
      'A mobile app built with Ionic Angular and ASP.NET that allows freelancers to showcase their portfolio and services by niche, enabling clients to browse, evaluate, and book them directly through the app. The system bridges the gap between freelancers and clients by providing a streamlined hiring workflow from discovery to booking confirmation.',
    image: 'projects/project-gig.jpg',
    tags: [
      'Ionic Framework',
      'Angular',
      'TypeScript',
      'ASP.Net',
      'SQLServer',
      'Figma',
    ],
    deployed: false,
    androidLink: '',
    iosLink: '',
  },
  {
    title: 'VSTR',
    description:
      'A mobile app built with Ionic Angular and ASP.NET that supports two roles — hosts who create and manage events, and visitors who discover and book attendance — covering any type of gathering from formal events to casual meetups. The app provided the client with a flexible, all-in-one event management solution that streamlines the entire process from event creation to visitor booking confirmation.',
    image: 'projects/project-vstr.jpg',
    tags: [
      'Ionic Framework',
      'Angular',
      'TypeScript',
      'ASP.Net',
      'SQLServer',
      'Figma',
    ],
    deployed: false,
    androidLink: '',
    iosLink: '',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wide animate-fade-in uppercase">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            This section highlights recent projects I’ve built and contributed
            to, showcasing my approach to creating clean, functional, and
            user-focused applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid*/}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* Project image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                {project.deployed && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.androidLink}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <i
                        className="lab la-android"
                        style={{ fontSize: '30px' }}></i>
                    </a>

                    <a
                      href={project.iosLink}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <i
                        className="lab la-apple"
                        style={{ fontSize: '30px' }}></i>
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
