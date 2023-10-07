/* eslint-disable */
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider";
import TestimonialSlider from "../../components/TestimonialSlider";


const Testimonials = () => {
  return <div className="h-full bg-primary/30 py-32 text-center">
  {/* <Circles /> */}
  <div className="container mx-auto h-full flex flex-col justify-center">
    {/* <div className="gap-x-8"> */}
      {/* Text */}
      {/* <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"> */}
        <motion.h2 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="h2 xl:mb-0 mb-8">What clients <span className="text-accent">say.</span></motion.h2>
        
      {/* </div> */}
      <motion.div
        variants={fadeIn('down', 0.6)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
      //  className="w-full xl:max-w-[100%]"
       >
        <TestimonialSlider />
      </motion.div>
    {/* </div> */}
  </div>
  <Bulb />
</div>;
};

export default Testimonials;
