// Single source for service data. The home page cards and the /services/[slug] pages both read from here.

export interface ServiceContent {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  approach: readonly string[];
}

export const services: readonly ServiceContent[] = [
  {
    slug: 'slimming-body-contouring',
    title: 'Slimming & Body Contouring',
    summary: 'Non-invasive treatments that target stubborn fat and help you reshape your figure.',
    overview:
      'Our slimming programme pairs non-invasive body contouring with a clinical assessment, so each plan targets the areas you want to change. Results are supported with guidance on movement and nutrition.',
    approach: [
      'Initial assessment of body composition and goals',
      'Non-invasive contouring sessions tailored to your target areas',
      'Movement and nutrition guidance to maintain your results',
    ],
  },
  {
    slug: 'knee-rehabilitation',
    title: 'Knee Rehabilitation',
    summary: 'Structured recovery after injury or surgery, and long-term care for conditions such as arthritis.',
    overview:
      'Knee problems can follow an injury, a surgery or a long-term condition such as arthritis. We assess how your joint moves and bears load, then build a progressive plan to restore strength, range of motion and confidence.',
    approach: [
      'Movement and strength assessment of the knee and surrounding muscles',
      'Hands-on therapy to ease pain and stiffness',
      'Progressive exercise to return to daily activity and sport',
    ],
  },
  {
    slug: 'weight-management-programs',
    title: 'Weight Management Programs',
    summary: 'Personalised exercise, diet and lifestyle plans for steady weight loss or healthy weight gain.',
    overview:
      'Whether your goal is to lose weight or gain it in a healthy way, we design a programme around exercise, diet and daily habits. It is reviewed regularly so it keeps pace with your progress.',
    approach: [
      'Goal setting and a baseline health review',
      'Supervised exercise sessions in our medical gym',
      'Diet and lifestyle plans with regular check-ins',
    ],
  },
  {
    slug: 'hip-rehabilitation',
    title: 'Hip Rehabilitation',
    summary: 'Rebuild hip strength, stability and flexibility through hands-on therapy and guided exercise.',
    overview:
      'Hip pain and stiffness can limit walking, sleep and everyday movement. Our sessions combine manual therapy with targeted exercise to rebuild stability, flexibility and control.',
    approach: [
      'Assessment of hip mobility and strength',
      'Manual therapy to restore joint movement',
      'Stability and balance exercises for everyday tasks',
    ],
  },
] as const;

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}
