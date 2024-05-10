import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram, IoSearch, FaPlus } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import { getTeamMembers } from '../../services';
import { LoadingErrorWrapper } from '../../components/common/loading_error_wrapper';
import { Input } from '../../components/ui/input';



const LandingOurTeam = () => {

  const navigate = useNavigate();
  const { teamMembers, teamMembersListLoading, error } = useTypedSelector((state) => state.TeamMember);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTeamMembers())
  }, []);

  return (
      <div
        className='
        h-full
        md:ml-[350px]
        ml-[80px]
        relative'>
           <LoadingErrorWrapper loading={teamMembersListLoading}>
            <div className='
            py-10
            md:px-10
            px-5
            w-full
            h-full
            flex
            flex-col
            gap-5'>
              {/* Top section*/}
              <div className='
              relative
              flex
              items-center
              justify-between
              py-5
              px-5
              rounded-lg
              bg-white
              shadow-lg'>
                <div className='
                flex
                item-center
                justify-center'>
                  <TypographyH3 title='Team Members' className='font-[450] text-lg md:text-2xl'/>
                </div>

                <div className="
                flex
                items-center
                justify-center
                relative">
                            
                  <Input
                      disabled={false}
                      type="text"
                      id="email"
                      placeholder="Search person name"
                      className='bg-accent md:min-w-[220px] rounded-lg pr-8'
                      // {...register("email")}
                      // error={errors?.email?.message}
                  />
                  <IoSearch 
                  className='
                  w-5 h-5
                  absolute
                  right-2
                  text-muted-foreground'/>
                  </div>
              </div>

              {/* Team Main section */}
              <div className='
               relative
               flex
               flex-col
               rounded-lg
               bg-white'>

                {/* Team Main top section */}
                <div className='
                w-full
                py-5
                px-5
                flex
                items-center
                justify-between
                border-b-[3px]
                border-accent'>

                  <div className='
                  flex
                  item-center
                  justify-center'>
                    <TypographyH3 
                    title='All Team Members' 
                    className='font-[450] text-lg md:text-xl'/>
                  </div>

                  <div className='
                  flex
                  items-center
                  justify-center
                  py-2
                  px-2
                  gradient8
                  rounded-md
                  border
                  border-primary
                  text-white
                  gap-2'>
                    <button className='font-semibold'>
                      Create Member
                    </button>
                    <FaPlus width={10}/>
                  </div>
                </div>

                {/* Team Main Middle section */}
                <div className='
                w-full
                py-5
                px-5
                flex
                flex-col
                justify-center
                border-b
                border-accent'>
                  {teamMembers?.map((ele)=>(
                    <div className='
                    px-4
                    py-4
                    flex
                    items-center
                    justify-between
                    hover:bg-accent
                    rounded-md'>
                      <div className='
                      flex
                      items-center'>
                        <img 
                        src={ele.image_url}
                        className='
                        w-[70px] 
                        h-[70px]
                        p-1
                        rounded-full
                        border-[3px]
                        border-primary'/>
                      </div>

                      <div className='
                        flex
                        items-center
                        justify-between'>
                          <TypographyP title={ele.name}/>
                      </div>

                      <div className='
                        flex
                        items-center
                        justify-between'>
                          <TypographyP title={ele.name}/>
                        </div>

                        <div className='
                        flex
                        items-center
                        justify-between'>
                          <TypographyP title={ele.name}/>
                        </div>

                        <div className='
                        flex
                        items-center
                        justify-between'>
                          <TypographyP title={ele.name}/>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
           </LoadingErrorWrapper>
      </div>
  )
}

export default LandingOurTeam