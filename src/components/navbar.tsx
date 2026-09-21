import { SocialIcon } from 'react-social-icons'

function navbar() {
  return (
    <nav className="fixed top-1 left-1/2 -translate-x-1/2 z-50 m-5 flex flex-row items-center gap-15 p-2 border bg-mist-900 border-mist-700 rounded-full">
      <a className='whitespace-nowrap p-2.5 mr-5 ml-5 font-bold text-neutral-50 hover:underline' href="#aboutMe">About Me</a>
      <a className='p-2.5 mr-3 ml-3 font-bold text-neutral-50 hover:underline' href="#skills">Skills</a>
      <a className='p-2.5 mr-3 ml-3 font-bold text-neutral-50 hover:underline' href="#experience">Experience</a>
      <a className='p-2.5 mr-3 ml-3 font-bold text-neutral-50 hover:underline' href="#projects">Projects</a>
      <a className='whitespace-nowrap p-2.5 mr-5 ml-5 font-bold text-neutral-50 hover:underline' href="#contact">Contact Me</a>
      
      <div>
        <SocialIcon url="https://github.com/YJuDeAd" />
      </div>
      <div className='mr-3 pr-2.5'>
        <SocialIcon url="https://www.linkedin.com/in/punya-arora-/" />
        </div>
    </nav>
  );
}

export default navbar;