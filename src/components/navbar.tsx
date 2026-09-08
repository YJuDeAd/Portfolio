import { SocialIcon } from 'react-social-icons'

function navbar() {
  return (
    <nav className="m-5 flex">
      <a className='pt-2.5 pb-2.5 flex-auto' href="#home">About Me</a>
      <a className='pt-2.5 pb-2.5 flex-auto' href="#skills">Skills</a>
      <a className='pt-2.5 pb-2.5 flex-auto' href="#projects">Projects</a>
      <a className='pt-2.5 pb-2.5 flex-auto' href="#contact">Contact Me</a>
      
      <div className='flex-auto'>
        <SocialIcon url="https://github.com/YJuDeAd" />
      </div>
      <div className='flex-auto'>
        <SocialIcon url="https://www.linkedin.com/in/punya-arora-/" />
        </div>
    </nav>
  );
}

export default navbar;