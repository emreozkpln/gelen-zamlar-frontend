import React from 'react'
import { FiInstagram } from "react-icons/fi"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function Hakkimda() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Gelen Zamlar</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <button class="mr-5 hover:text-gray-900"><Link to="/">Anasayfa</Link></button>
            <button class="mr-5 hover:text-gray-900"><Link to="/grafik">Grafik</Link></button>
            <button class="mr-5 hover:text-gray-900"><Link to="/hakkımda">Hakkımda</Link></button>
          </nav>

        </div>
      </header>
      <div className='flex flex-col gap-y-28 mt-20 justify-center items-center'>
        <div className='flex gap-x-10'>
        
          <div
            class="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit p-20">
            <div class="-mt-20 w-40 h-40">
              <img src="https://media.licdn.com/dms/image/C4D03AQHwycNDmBIJEA/profile-displayphoto-shrink_800_800/0/1661258072946?e=2147483647&v=beta&t=NiUl0G9kCcjvy3VKEAbWc1Fg0e9FEdgKcJUZcn060Uk" class="rounded-full " alt="" />
            </div>
            <div className='flex gap-x-2 mt-2'>
              <a href='https://www.instagram.com/1muharremyilmaz/' className='hover:text-blue-600'><FiInstagram size={25} /></a>
              <a href='https://www.linkedin.com/in/muharrem-y%C4%B1lmaz-309b381bb/' className='hover:text-blue-600'><AiFillLinkedin size={25} /></a>
              <a href='https://github.com/yilmazmuharrem' className='hover:text-blue-600'><AiFillGithub size={25} /></a>
            </div>
            <div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
              <h1 class="text-orange-500 text-lg font-semibold">Muharrem Yılmaz</h1>
              <p class="text-black text-sm lg:mt-[5px]">Backend Developer</p>
            </div>
          </div>
        </div>
        <div className='flex gap-x-10'>
       
          <div
            class="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit p-24">
            <div class="-mt-20 w-40 h-40">
              <img src="https://media.licdn.com/dms/image/D4D35AQFiddpUu6KWPA/profile-framedphoto-shrink_800_800/0/1670964089423?e=1675688400&v=beta&t=4Lf5SQQvUhpp8VQpEDVg2x9_BYOLtZDsaXuWtgqzwCM" class="rounded-full " alt="" />
            </div>
            <div className='flex gap-x-2 mt-2'>
              <a href='https://www.instagram.com/emreozkpln/' className='hover:text-blue-600'><FiInstagram size={25} /></a>
              <a href='https://www.linkedin.com/in/emre-%C3%B6zkaplan-23aa65215/' className='hover:text-blue-600'><AiFillLinkedin size={25} /></a>
              <a href='https://github.com/yilmazmuharrem' className='hover:text-blue-600'><AiFillGithub size={25} /></a>
            </div>
            <div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
              <h1 class="text-orange-500 text-lg font-semibold">Emre Özkaplan</h1>
              <p class="text-black text-sm lg:mt-[5px]">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}