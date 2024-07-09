import { useStoreTheme } from '@/app/zustand';
import './stack.css';

import Image from 'next/image';
import js from '../../../../public/stackImages/js.svg';
import c from '../../../../public/stackImages/c.webp';
import react from '../../../../public/stackImages/react.svg';
import html from '../../../../public/stackImages/html.svg';
import css from '../../../../public/stackImages/css.svg';
import node from '../../../../public/stackImages/node.svg';
import nextjs from '../../../../public/stackImages/nextjs.svg';
import nextjsdark from '../../../../public/stackImages/nextjsdark.svg';
import sequelize from '../../../../public/stackImages/sequelize.svg';
import tailwind from '../../../../public/stackImages/tailwind.svg';
import redux from '../../../../public/stackImages/redux.svg';
import git from '../../../../public/stackImages/git.svg';
import github from '../../../../public/stackImages/github.svg';


const Stack = () => {

  const { theme } = useStoreTheme();

  return (
    <div className={`stackContainer ${theme}`} >
      <h2>Stack</h2>
      <div className="stackGrid">
        <div className="techContainer">
          <Image src={js} alt='Javascript' width={30} height={30} />
          <p>Javascript</p>
        </div>
        <div className="techContainer">
          <Image src={c} alt='C' width={30} height={30} />
          <p>C</p>
        </div>
        <div className="techContainer">
          <Image src={react} alt='React js' width={30} height={30} />
          <p>React js</p>
        </div>
        <div className="techContainer">
          <Image src={html} alt='HTML5' width={30} height={30} />
          <p>HTML5</p>
        </div>
        <div className="techContainer">
          <Image src={css} alt='CSS3' width={30} height={30} />
          <p>CSS3</p>
        </div>
        <div className="techContainer">
          <Image src={node} alt='Node js' width={30} height={30} />
          <p>Node js</p>
        </div>
        <div className="techContainer">
          <Image src={nextjs} alt='Next js' width={30} height={30} />
          <p>Next js</p>
        </div>
        <div className="techContainer">
          <Image src={sequelize} alt='Sequelize' width={30} height={30} />
          <p>Sequelize</p>
        </div>
        <div className="techContainer">
          <Image src={tailwind} alt='Tailwind' width={30} height={30} />
          <p>Tailwind</p>
        </div>
        <div className="techContainer">
          <Image src={redux} alt='Redux' width={30} height={30} />
          <p>Redux</p>
        </div>
        <div className="techContainer">
          <Image src={git} alt='Git' width={30} height={30} />
          <p>Git</p>
        </div>
        <div className="techContainer">
          <Image src={github} alt='Github' width={30} height={30} />
          <p>Github</p>
        </div>
      </div>
    </div>
  )
}

export default Stack
