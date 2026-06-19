import { getCurrentDate } from '../utils/getFormattedData';
import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years}+ years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  const currDate = getCurrentDate()
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>
          <a href='https://affinsys.com' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>
            Affinsys AI, Bangalore
          </a>{' '}
          {`(Senior Software Development Engineer)`} | July 2025 – Present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul className='list-disc list-inside space-y-1 mt-1'>
            <li>Led end-to-end design and development of complex UI features — owned low-level design (LLD) for multiple product areas, making architectural decisions that balanced delivery velocity against long-term maintainability.</li>
            <li>Architected a Micro Frontend system (Module Federation) enabling 3+ independent product teams to build and deploy feature modules in isolation — eliminating cross-team release bottlenecks and scaling the frontend with product growth.</li>
            <li>Built a centralized reusable component library with standardized design tokens and accessible, pixel-perfect components — reducing UI feature delivery time by 40% across multiple product teams.</li>
            <li>Mentored junior engineers through code reviews, LLD walkthroughs, and 1:1 sessions; defined linting rules, review checklists, and component scaffolding standards adopted across the engineering org.</li>
          </ul>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>
          <a href='https://affinsys.com' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>
            Affinsys AI
          </a>{' '}
          {`(Software Development Engineer)`} | July 2023 – June 2025
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul className='list-disc list-inside space-y-1 mt-1'>
            <li>Refactored legacy state management to Redux Toolkit and RTK Query — applied async caching strategies, enforced REST principles, and improved data loading performance by 30% on high-traffic dashboard views.</li>
            <li>Diagnosed and resolved performance bottlenecks on data-heavy dashboards — implemented react-window virtualization, lazy loading, and debouncing, reducing Time-to-Interactive by ~40%; set up error monitoring and instrumentation to proactively track application health.</li>
            <li>Designed and built full-stack features end-to-end — authored Node.js + Express REST APIs, modeled and queried PostgreSQL schemas, implemented cookie-based auth and role-based authorization, and wired up React frontends; owned the full request lifecycle from database to UI.</li>
            <li>Containerized services with Docker and built CI/CD pipelines (Jenkins, ArgoCD) — enabling zero-downtime deployments and consistent environments across dev, staging, and production.</li>
          </ul>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Affinsys AI (Software Development Intern) | Aug. 2022 – June 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Contributed to both frontend and backend development: created reusable React component libraries, developed API integrations with Node.js and Express, implemented automated Jest testing (reducing bugs by 30% and increasing coverage to 80%+), and ensured WCAG 2.0 compliance for enhanced accessibility across web applications.
        </TimelineEvent.Description>

      </TimelineEvent>

      {/* <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | May. 2022 - {calculateDuration('2022-05-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent> */}

    </Timeline>
  )
}

export default CurrentTimeLineExp;