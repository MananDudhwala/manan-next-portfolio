'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';
import { title } from 'process';

const allProjectsInfo: any[] = [

];

const SearchAllProjects = () => {


  const projects: CardProjectProps[] = [{
    title: "Notekeeper",
    des: "Your ultimate digital companion for productivity and creativity. Notekeeper is a cutting-edge CRUD (Create, Read, Update, Delete) Web Application meticulously crafted to streamline note-taking, task management, and quick design creation, alongside intuitive photo editing functionalities.",
    repo: "https://github.com/MananDudhwala/Notekeeper",
    link: "https://notekeeper-theta.vercel.app/",
    category: 'personal'
  },
  {
    title: "Razorpay payment intetgration",
    des: "A web app designed to implement razorpay payment integration.",
    repo: 'https://github.com/MananDudhwala/razorpay-payment-integration',
    link: 'https://razorpay-payment-interation.vercel.app/',
    category: "Personal"
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