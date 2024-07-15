"use client";

import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiOutlineMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import myphoto from '/public/myphoto.jpg';
import rmcnn from '/public/rmcnn.png';
import mlrnn from '/public/mlrnn.png';
import ibm from '/public/ibm.png';
import innable from '/public/innable.png';
import flyhigh from '/public/flyhigh.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const projects = [
    { src: rmcnn, alt: "RMCNN Project", title: "A Study of CNN Models On the Detection of Hate Speech", 
      description: "Created a working CNN model with TensorFlow and Keras to detect labeled hate speech Tweets on the dataset. </br> <a href='https://colab.research.google.com/drive/1UOQeGcZg-S1kmEo88kBVrQdRSQBjTUIp?usp=sharing' target='_blank' class='text-blue-500 hover:underline'>Link to project</a>" },
    { src: mlrnn, alt: "MLRNN Project", title: "Implementation of Neural Networks in OCR of Handwritten Cyrillic Characters",
       description: "Created a working RNN model with TensorFlow and Keras to conduct OCR on a dataset of Cyrillic characters. </br> <a href='https://colab.research.google.com/drive/1SUb8zyJzHTCkhlweAzWPeBSK_RF0kWhw?usp=sharing' target='_blank' class='text-blue-500 hover:underline'>Link to project</a>" },
    { src: ibm, alt: "IBM Project", title: "IBM Data Science Capstone", 
      description: "Conducted a full analysis of a SpaceX dataset provided by IBM on Coursera. </br> <a href='https://github.com/Foxy0309/Data-Science-Capstone' target='_blank' class='text-blue-500 hover:underline'>Link to project repository</a>" },
    { src: innable, alt: "Innable Project", title: "Innable", 
      description: "Hotel management system that has both admin and user perspectives built with Java, JavaFX and MySQL. </br> <a href='https://github.com/pvscia/Hotel-Management' target='_blank' class='text-blue-500 hover:underline'>Link to project repository</a>" },
    { src: flyhigh, alt: "FlyHigh Project", title: "FlyHigh", 
      description: "Airplane ticketing application built with Laravel and MySQL. </br> <a href='https://github.com/Chronostasiss/flyhigh' target='_blank' class='text-blue-500 hover:underline'>Link to project repository</a>" 
    },
  ];

  const proficiencies = [
    { name: "Python"},
    { name: "Jupyter Notebook"},
    { name: "MySQL"},
    { name: "R"},
    { name: "Amazon Web Services"},
    { name: "Docker"},
    { name: "Figma"},
    { name: "Git"},
    { name: "GitHub"},
    { name: "Java"},
    { name: "Laravel"},
    { name: "Next.js"},
    { name: "HTML"},
    { name: "CSS"},
    { name: "TailwindCSS"},
    { name: "Javascript"},
  ];

  const education = [
    {
      institution: "Bina Nusantara University",
      description: "Computer Science (Undergraduate), GPA: 3.75",
      duration: "2021 - 2025 (Expected)",
    },
    {
      institution: "Universiti Malaya",
      description: "Exchange Student, Majoring in Computer Science",
      duration: "2023 - 2024 (Even Semester)",
    },
    {
      institution: "Tunas Bangsa Christian School",
      description: "Senior High School, specialization in Natural Science (IPA)",
      duration: "2018 - 2021",
    },
  ];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleDescription = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <title>Nathan Setiawan - Portfolio</title>
      <nav className="fixed w-full top-0 bg-gray-100 dark:bg-gray-900 shadow-md z-10">
        <div className="py-4 px-10 md:px-20 lg:px-40 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-gray-100">Nathan Setiawan</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl text-gray-900 dark:text-gray-100"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Back to Top
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="bg-gray-100 dark:bg-gray-900 min-h-screen px-10 md:px-20 lg:px-40">
        <section className="pt-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-center lg:text-left p-10">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
              <h2 className="text-5xl py-2 font-montserrat text-teal-600 font-medium md:text-6xl">Nathan Setiawan</h2>
              <h3 className="text-2xl py-2 md:text-3xl font-montserrat text-gray-700 dark:text-gray-300">Data scientist and developer.</h3>
              <p className="text-md py-5 leading-8 font-montserrat text-gray-700 dark:text-gray-300 md:text-xl max-w-2xl mx-auto lg:mx-0">
                An eager individual always seeking to improve and learn. Has significant experience in the field of data science and 
                is continuously studying more about the field. Hardworking and reliable, as well as experienced working in organizations.
              </p>
              <div className="text-5xl flex justify-center lg:justify-start gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="mailto:nathan.setiawan@binus.ac.id" target="_blank" rel="noopener noreferrer" 
                className="hover:scale-110 transform transition-transform duration-200">
                  <AiOutlineMail />
                </a>
                <a href="https://www.linkedin.com/in/natset/" target="_blank" rel="noopener noreferrer" 
                className="hover:scale-110 transform transition-transform duration-200">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/Foxy0309" target="_blank" rel="noopener noreferrer" 
                className="hover:scale-110 transform transition-transform duration-200">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          <div className="relative rounded-full overflow-hidden mx-auto lg:mx-0 mt-10 lg:mt-0 w-80 h-80 md:w-96 md:h-96 flex-shrink-0">
            <Image className="rounded-full mx-auto" src={myphoto} alt="Nathan Setiawan"/>
          </div>
        </div>  
      </section>

        <section className="py-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold py-5 font-montserrat text-gray-900 dark:text-gray-100">Portfolio</h3>
            <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4 w-full" />
          </div>
            <div className="max-w-8xl mx-auto space-y-12 py-12">
            {projects.map((project, index) => (
              <div key={index}>
                <div
                  className={`flex flex-col items-center lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} space-y-4 lg:space-y-0 lg:space-x-8 mb-8`}
                >
                  <div className="bg-white dark:bg-gray-800 w-full lg:w-1/2 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                    <Image src={project.src} className="rounded-lg object-cover w-full h-80" alt={project.alt} />
                  </div>
                  <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="mt-4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  </div>
                </div>
                {index === 2 && (
                  <div className="my-16 text-center">
                    <h2 className="text-4xl font-bold py-5 font-montserrat text-gray-900 dark:text-gray-100">Contributed in:</h2>
                    <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold py-5 font-montserrat text-gray-900 dark:text-gray-100">Proficiencies</h2>
            <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4 w-full" />
            <div className="mt-4 flex flex-wrap justify-center font-montserrat font-2xl gap-4">
              {proficiencies.map((proficiency, index) => (
                <div key={index} className=" bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md">
                  {proficiency.name}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat text-gray-900 dark:text-gray-100 py-5">Education</h2>
            <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4 w-full" />
            <div className="mt-4 space-y-4 mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-4 px-6 rounded-md flex justify-between items-center" 
                onClick={() => toggleDescription(index)} >
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">
                      {edu.institution}
                    </h3>
                    {expandedIndexes.includes(index) && (
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.description}</p>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 mr-4">{edu.duration}</span>
                    <button
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {expandedIndexes.includes(index) ? '-' : '+'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}