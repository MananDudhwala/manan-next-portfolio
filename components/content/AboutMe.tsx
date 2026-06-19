import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a passionate Full-Stack Developer with over {calculateDuration('2023-01-01', false)} of professional experience building end-to-end web applications. I'm proficient across the full stack — from pixel-perfect React and Next.js frontends to robust Node.js, Express, and MongoDB backends, with a constant drive to learn and adopt emerging technologies.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;