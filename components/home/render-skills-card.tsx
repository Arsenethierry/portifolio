import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const RenderCard = ({ tech }:any) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.5, }
    };

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
            className='bg-slate-800 text-center rounded-xl transition-all duration-300 ease-linear group p-8 aos-init aos-animate' data-aos="fade" data-aos-delay="0">
            <div className="bg-slate-800  text-center rounded-xl transition-all duration-500 ease-linear group p-8 aos-init aos-animate" data-aos="fade" data-aos-delay="200">
                <div className='transition duration-500 hover:bg-blue-600 hover:scale-125'>
                <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center transition-all duration-300 ease-linear bg-[#33343a] mb-5 group-hover:bg-[#525252]">
                    <img className="w-12" src={tech.icon} alt="" />
                </div>
                <h3 className="text-white text-[24px] font-medium">{tech.name}</h3>
                {/* <p className="text-[#9197a0] transition-all duration-900 ease-linear mt-3 group-hover:text-[#aaa] ">In/terested in learning {tech.name} ?</p> */}
                <p className="text-[#9197a0] transition-all duration-300 ease-linear mt-3 group-hover:text-[#aaa] ">{tech.description}</p>

                </div>
            </div>
        </motion.div>) 
}

export default RenderCard;