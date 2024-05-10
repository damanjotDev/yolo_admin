
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "../../utils/animation";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";

import { useNavbarRoutes } from "../../hooks/useNavbarRoutes";
import { FaChevronDown, GoArrowRight} from "../../utils/icons"
import { cn } from "../../lib/utils";
import { RoutesName } from "../../utils/constant";
import { useTypedSelector } from "../../stateStore";


const DesktopNavbar = () => {
  const navbarRoutes = useNavbarRoutes();

  const { devroninsDetails, error, devroninsDetailsLoading} = useTypedSelector((state)=> state.Devronins);

  const textMotion = {
    rest: {
      color: "grey",
      scaleX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "blue",
      scaleX: 1,
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  return (
        <div className="
            flex
            flex-col
            gap-5">

          {/* Page Navigation */}
          <div className="
              flex
              flex-col
              gap-2">

                {navbarRoutes?.map(({navigate, icon: Icon, label})=>(
                    
                    <button className="
                    flex
                    items-center
                    md:py-3
                    md:px-3
                    gap-3
                    rounded-lg
                    group
                    transition-all
                    duration-200
                    hover:text-white
                    hover:bg-primary"
                    onClick={navigate}>
                      <Icon 
                      size={20}
                      className=""/>
                      <TypographyH5 className="hidden md:flex font-[600]" title={label}/>
                    </button>

                ))}
          </div>
          
        </div>
  )
}

export { DesktopNavbar }
