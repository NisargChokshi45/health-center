import type { ReactNode } from 'react';
import SectionHeading from '@/components/features/home/SectionHeading';
import { siteContent } from '@/content/siteContent';

// "Dr. Samrat Rathore" -> "SR". Titles are dropped so initials reflect the person's name.
function initialsOf(name: string): string {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamSection(): ReactNode {
  const { eyebrow, heading, intro, members } = siteContent.team;

  if (members.length === 0) return null;

  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <li
            key={member.name}
            className="flex flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center transition duration-300 hover:-translate-y-1"
          >
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-28 w-28 rounded-full object-cover"
            />
            <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm text-muted">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
