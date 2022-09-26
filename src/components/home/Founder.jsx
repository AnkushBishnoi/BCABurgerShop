import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/founder.webp"
const Founder = () => {
  const options={
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <section className='founder'>
       <motion.div {...options} >
<img src={me} alt="Founder" height={155} width={155}/>
<h3>Ankush Kumar</h3>
<p>Hey. Everyone I am Ankush Kumar, the founder of BCA Burger Wala <br />
Our aim is to create the most tasty burger on planet.
 </p>
       </motion.div>
    </section>
  )
}

export default Founder