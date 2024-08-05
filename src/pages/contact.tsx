import { Button } from "@/components/ui/button";
import { AiOutlineMail } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { Link } from "react-scroll";
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Contact() {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [200, 0]);

    return (
        <motion.div style={{ opacity, y }}>
            <div className="h-[65rem] flex justify-center contacts items-center flex-col bg-[url('../../public/Background_Contacts.svg')] bg-cover">
                <p className="projects text-[#E3646E] font-['Inconsolata'] font-light text-xl">Contato</p>
                <h1 className="text-[#E2E4E9] font-bold text-3xl font-['Asap'] mt-2">Gostou do meu trabalho?</h1>
                <h4 className="text-[#C0C4CE] font-light text-sm mt-2">Entre em contato ou acompanhe as minhas redes sociais!</h4>
                <div className="mt-[3rem] flex flex-col gap-4">
                    <a target="_blank" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                        <Button className="w-[25rem] h-[4.25rem] bg-[#292C34] text-[#C0C4CE] hover:bg-[#292c34c5] border duration-300 border-[#292c34c5] hover:border-[#3996DB] relative"><CiLinkedin size={17} className="mr-3" />Linkedin <div className="absolute right-[1.25rem]"><LuArrowUpRight size={20} /></div></Button>
                    </a>
                    <a target="_blank" href="https://github.com/Trickqz">
                        <Button className="w-[25rem] h-[4.25rem] bg-[#292C34] text-[#C0C4CE] hover:bg-[#292c34c5] border duration-300 border-[#292c34c5] hover:border-[#3996DB] relative"><LuGithub size={17} className="mr-3" />GitHub <div className="absolute right-[1.25rem]"><LuArrowUpRight size={20} /></div></Button>
                    </a>
                    <Link to="services" smooth={true} offset={-190} duration={800}>
                        <Button className="w-[25rem] h-[4.25rem] bg-[#292C34] text-[#C0C4CE] hover:bg-[#292c34c5] border duration-300 border-[#292c34c5] hover:border-[#3996DB] relative"><AiOutlineMail size={17} className="mr-3" />E-mail <div className="absolute right-[1.25rem]"><LuArrowUpRight size={20} /></div></Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}