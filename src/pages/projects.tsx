import { cardData } from '../components/cardData';
import Card from '../components/card';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Projects() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [200, 0]);

  return (
    <motion.div style={{ opacity, y}}>
    <div>
      <div className="flex flex-col items-center">
        <p className="mt-[4.5rem] projects text-[#E3646E] font-['Inconsolata'] font-light text-xl">Meu trabalho</p>
        <h1 className="text-[#E2E4E9] font-bold text-3xl font-['Asap']">Veja os projetos em destaque</h1>
      </div>
      <div className='flex justify-center mt-[3.5rem]'>
        <div className="grid grid-flow-row grid-cols-3 max-[841px]:grid-cols-1 max-[1262px]:grid-cols-2 auto-cols-max">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
}