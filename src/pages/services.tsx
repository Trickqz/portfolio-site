import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm, ValidationError } from '@formspree/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Service() {
    const [state, handleSubmit] = useForm("xldreego");
    const isDisabled = state.succeeded || state.submitting;
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [200, 0]);

    return (
        <motion.div style={{ opacity, y}}>
        <div className="mt-[6.25rem] flex items-center flex-col justify-center w-full h-[50.5rem] bg-[#0D0E11]">
            <div className='text-center'>
                <p className="services text-[#E3646E] font-['Inconsolata'] font-light text-xl max-[401px]:text-base">Meus serviços</p>
                <h1 className="text-[#E2E4E9] font-bold text-3xl font-['Asap'] max-[401px]:w-[200px]">Como posso ajudar o seu negócio</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex mt-[5rem] flex-col'>
                <Label htmlFor="email">Email</Label>
                <Input className='max-[478px]:w-[300px] max-[401px]:w-[200px]' disabled={isDisabled} id="email" type="email" placeholder='meuemail@gmail.com' name="email"/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                
                <Label className='mt-8' htmlFor="nome">Nome</Label>
                <Input className='max-[478px]:w-[300px] max-[401px]:w-[200px]' disabled={isDisabled} id="nome" placeholder='Patrick Tavares' type="text" name="nome"/>
                <ValidationError prefix="Nome" field="nome" errors={state.errors} />
                
                <Label className='mt-8' htmlFor="assunto">Assunto</Label>
                <Input className='max-[478px]:w-[300px] max-[401px]:w-[200px]' disabled={isDisabled} id="assunto" placeholder='' type="text" name="assunto"/>
                <ValidationError prefix="Assunto" field="assunto" errors={state.errors} />
                
                <Label className='mt-8' htmlFor="mensagem">Mensagem</Label>
                <Textarea className='max-[478px]:w-[300px] max-[401px]:w-[200px]' disabled={isDisabled} id="mensagem" name="mensagem" />
                <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />
                
                <Button className='mt-10 bg-[#05060a5e] max-[401px]:w-[200px] flex justify-center h-12 font-medium hover:bg-[#e3646fb2] duration-300' type="submit" disabled={isDisabled}>Enviar Email</Button>
            </form>
        </div>
        </motion.div>
    );
}