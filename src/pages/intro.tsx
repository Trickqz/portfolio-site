import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import Scrolldw from '../assets/scrolldown.svg'
import Code from '../assets/code.png';

export default function Intro() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex flex-col justify-center items-center h-[55rem] bg-[url('../../public/Background_Intro.svg')] bg-cover">
                <div className="flex justify-center relative items-center w-[7rem] h-[7rem] border-[0.125rem] border-[#E3646E] rounded-full">
                    <Avatar className="w-[6rem] h-[6rem]">
                        <AvatarImage src="https://github.com/Trickqz.png" />
                        <AvatarFallback>PT</AvatarFallback>
                    </Avatar>
                    <img className="w-[2.125rem] h-[1.75rem] absolute bottom-0 right-0" src={Code} alt="" />
                </div>
                <div className="flex flex-col items-center mt-[3.5rem]">
                    <p className="text-[#C0C4CE] font-['Inconsolata'] max-[555px]:text-base font-light text-xl">Hello World! Meu nome é <span className="text-[#E3646E]">Patrick Tavares</span> e sou</p>
                    <h1 className="font-['Asap'] max-[689px]:text-5xl max-[399px]:text-center max-[555px]:text-4xl font-bold text-6xl text-[#E2E4E9] mt-[0.375rem]">Desenvolvedor Fullstack</h1>
                    <h2 className="w-[42.5rem] max-[689px]:w-[34.375rem] max-[555px]:w-[400px] max-[555px]:text-xs text-[#878EA1] font-['Maven_Pro'] text-center font-light text-sm mt-[1.25rem]">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</h2>
                </div>
                <div className="mt-20 grid grid-cols-4 gap-[1rem] max-[446px]:grid-cols-2 max-[621px]:grid-cols-3 lg:flex ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaHtml5 />HTML</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Avançado</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaCss3Alt />CSS</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Avançado</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><IoLogoJavascript />Javascript</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Intermediário</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaReact />React</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Intermediário</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><TbBrandReactNative />React Native</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Estudando</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaNodeJs />Node.js</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Básico/Estudando</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaPython />Python</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Básico</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Badge><FaGithub />Github</Badge></TooltipTrigger>
                            <TooltipContent>
                                <p>Intermediário</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="absolute bottom-[6rem]">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="projects" smooth={true} offset={-260} duration={800}>
                                    <motion.img
                                        src={Scrolldw}
                                        animate={{
                                            y: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                        }}
                                    />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-inherit">
                                <p>Role para baixo</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </motion.div>
    )
}