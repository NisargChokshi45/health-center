// Site copy for Ultimate Health. Sourced from the live site (https://www.ultimatehealth.in/).
// Service data lives in content/services.ts. Testimonial quotes are paraphrased: replace them with approved patient wording before launch.

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  condition: string;
  quote: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const APPOINTMENT_SERVICES = [
  'Foot Rehab',
  'Geriatric Rehab',
  'Gym Training',
  'Hip Rehab',
  'Knee Rehab',
  'Neuro Rehab',
  'Physiotherapy & Rehab',
  'Shoulder Rehab',
  'Slimming & Body Contouring',
  'Spine Rehab',
  'Sports Rehab',
  'Weight Gain/Loss Program',
] as const;

// Anchors are absolute ("/#...") so they also resolve from the service detail pages.
export const siteContent = {
  brand: {
    name: 'ULTIMATE',
    subname: 'HEALTH',
    trademark: '™',
    tagline: 'PHYSIOTHERAPY | FITNESS | REHAB',
    logoAlt: 'Ultimate Health Logo',
    logoSrc: 'https://ultimatehealth.in/assets_new/IMG_1.png',
  },
  nav: [
    { label: 'Home', href: '/#top' },
    { label: 'About Us', href: '/#about' },
    { label: 'Rehab Programs', href: '/#services' },
    { label: 'Our Team', href: '/#team' },
    { label: 'Patient Stories', href: '/#stories' },
    { label: 'Contact', href: '/#contact' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Trusted Healthcare Partner',
    headline: 'Your Journey to Ultimate Health Starts Here',
    body: 'Medical expertise, modern technology and individual care, working together to help you recover, move better and live without pain.',
    primaryCta: { label: 'Book Appointment' },
    imageSrc: 'https://ultimatehealth.in/assets_new/hm_bnr2.png',
    secondaryCta: { label: 'Explore Services', href: '/#services' },
  },
  stats: [
    { value: '5K+', label: 'Happy Patients' },
    { value: '60+', label: 'Expert Specialists' },
    { value: '98%', label: 'Patient Satisfaction' },
  ] satisfies Stat[],
  feature: {
    title: 'Accredited Excellence',
    body: 'Every plan is built on evidence-based care and adjusted to your body, your goals and your pace.',
  },
  services: {
    eyebrow: 'Our Expertise',
    heading: 'Comprehensive Medical Care',
    intro: 'A wide range of specialised services, matched to your needs so you can recover faster and stay active.',
    exploreLabel: 'Explore Service',
    viewAllLabel: 'View All Medical Services',
    viewAllHref: '/#services',
  },
  team: {
    eyebrow: 'Meet Our Team',
    heading: 'Leading Specialists',
    intro: 'Our specialists cover physiotherapy, rehabilitation, wellness therapy and recovery care.',
    members: [
      {
        name: 'Dr. Samrat Rathore',
        role: 'Physiotherapist',
        image: 'https://ultimatehealth.in/upload/institute/3f8115f8eda81eb0a9d43c7f733f1d2d.webp',
      },
      {
        name: 'Dr. Rahul Shukla',
        role: 'Physiotherapist',
        image: 'https://ultimatehealth.in/upload/institute/15e32d87938c633c1cab3b1f8e05f3b4.jpeg',
      },
      {
        name: 'Dr. Dharmesh Ahir',
        role: 'Physiotherapist',
        image: 'https://ultimatehealth.in/upload/institute/a066de76a264cf6fd88cb143c525045e.webp',
      },
      {
        name: 'Dr. Ronak Patel',
        role: 'Physiotherapist',
        image: 'https://ultimatehealth.in/upload/institute/923c06fb5423b87f1f44201fc5d9c31f.webp',
      },
    ] satisfies TeamMember[],
  },
  testimonials: {
    eyebrow: 'Success Stories',
    heading: 'What Our Patients Say',
    intro: 'Hear from patients who rebuilt their strength and confidence with us.',
    items: [
      {
        name: 'Hetal Shah',
        image: 'https://ultimatehealth.in/upload/institute/b9b625adc52a6e89fb2b4d58d1641a96.png',
        condition: 'Knee Pain',
        quote: 'With Dr. Falguni Ben guiding my treatment, my knee pain eased and I feel far better day to day.',
      },
      {
        name: 'Dinesh Purenia',
        image: 'https://ultimatehealth.in/upload/institute/78f5171e382727e27b8eba5b2eaec27f.png',
        condition: 'Neck Pain',
        quote: 'After 20 sessions I was back to full working capacity. The staff were excellent and the workouts were tailored to me.',
      },
      {
        name: 'Kiran Chauhan',
        image: 'https://ultimatehealth.in/upload/institute/b343715fe81d4f52f16be2790b79d748.png',
        condition: 'Spine Injury',
        quote: 'I finished my sessions comfortably walking and handling everyday tasks again. I am grateful to the whole team.',
      },
    ] satisfies Testimonial[],
  },
  cta: {
    heading: 'Want to Start Your Journey to Ultimate Health?',
    body: 'Take the first step towards better mobility, lasting pain relief and long-term wellness.',
    features: ['Easy Online Booking', 'Specialist Consultation'],
    primaryCta: { label: 'Call now for an Appointment' },
  },
  contact: {
    heading: 'Visit Us',
    body: 'Two convenient centres in Ahmedabad, Gujarat.',
    phones: ['+91 95378 22822', '+91 97149 77877'],
    phoneHref: 'tel:+919537822822',
    email: 'contactus@ultimatehealth.in',
    addresses: [
      'Rajmeen House, Under Dharnidhar Bridge, Vasna, Ahmedabad, Gujarat',
      '7 & 8, Pushti Heights, Gurukul Rd, Memnagar, Ahmedabad, Gujarat',
    ],
    hours: [
      { days: 'Monday to Saturday', time: '5:30 AM to 9:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  footer: {
    description: 'Ahmedabad wellness centre offering physiotherapy, a medical gym and slimming services.',
    socials: [
      { label: 'Facebook', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
    quickLinks: [
      { label: 'Home', href: '/#top' },
      { label: 'About Us', href: '/#about' },
      { label: 'Rehab Programs', href: '/#services' },
      { label: 'Contact', href: '/#contact' },
    ] satisfies NavItem[],
  },
} as const;
