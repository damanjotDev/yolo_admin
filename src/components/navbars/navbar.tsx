
import { useLocation } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";


const Navbar = () => {

  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();

  return (
      <motion.div className={`
          fixed
          top-0
          bottom-0
          z-[50]
          shadow-lg
          bg-white
          flex
          flex-col
          gap-5
          md:py-10
          px-5
          py-5
          md:w-[350px]
          w-[80px]`}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1 , x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}>

        {/* Logo Section */}
        <div className="
             flex
             items-center
             px-4
            ">
          <img
            src="https://www.devronins.com/images/DevRonins.png"
            className=" md:w-[200px] w-full"
          />
        </div>

        {/* Navigation section  for Desktop*/}
        <DesktopNavbar/>

       
      </motion.div>
  )
}

export { Navbar }
