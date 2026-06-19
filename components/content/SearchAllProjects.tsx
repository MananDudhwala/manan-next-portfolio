'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';
import { title } from 'process';

const allProjectsInfo: any[] = [

];

const SearchAllProjects = () => {


  const projects: CardProjectProps[] = [
    {
      title: "Voyager",
      des: "A full-stack AI-powered travel planning application. Voyager lets users craft personalized itineraries with intelligent destination suggestions, real-time data, and a seamless booking experience — built end-to-end with Next.js, Node.js, and MongoDB.",
      repo: "https://github.com/MananDudhwala/Voyager",
      link: "https://github.com/MananDudhwala/Voyager",
      category: 'Full-Stack'
    },
    {
      title: "Notekeeper",
      des: "A full-stack CRUD productivity application for streamlined note-taking, task management, quick design creation, and intuitive photo editing. Built with React and Node.js, deployed on Vercel.",
      repo: "https://github.com/MananDudhwala/Notekeeper",
      link: "https://notekeeper-theta.vercel.app/",
      category: 'Full-Stack'
    },
    {
      title: "Razorpay Payment Integration",
      des: "A web application demonstrating end-to-end Razorpay payment gateway integration, including webhook handling, order creation via REST API, and a polished checkout UI.",
      repo: 'https://github.com/MananDudhwala/razorpay-payment-integration',
      link: 'https://razorpay-payment-interation.vercel.app/',
      category: "Backend"
    }
  ]

  return (
    <>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          projects.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;