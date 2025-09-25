import LogoLoop from '../../blocks/Animations/LogoLoop/LogoLoop'
import { SiReact, SiHtml5,SiCss3,SiExpress,SiPostgresql,SiJavascript, SiNodedotjs  } from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  
 


];



function Logo() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden',width: '100%'   }}>
      <LogoLoop
        logos={techLogos}
        speed={125}
        direction="left"
        logoHeight={48}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut 
        fadeOutColor="black"
   
       
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Logo;