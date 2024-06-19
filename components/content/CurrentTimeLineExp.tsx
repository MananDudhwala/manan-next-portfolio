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
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  const currDate = getCurrentDate()
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Affinsys AI  {`(Software Development Engineer)`} </a> | July 2023 - Present</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux, Jest and using microfrontends and Storybook to facilitate the use of reusable components.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Affinsys AI (Software Development Intern) | Aug. 2022 - June 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Assisted in creating reusable code libraries, implemented automated Jest testing (reducing bugs by 30% and increasing coverage to 80%+), and ensured WCAG 2.0 compliance for enhanced accessibility.
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