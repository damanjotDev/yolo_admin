import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useNavbarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: '1',
            navigate: () => navigate(RoutesName.Home),
            icon: RxDashboard,
            active: RoutesName.Home===location.pathname,
            label: 'Home'
            
        },
        {
            id: '2',
            navigate: () => navigate(RoutesName.OurTeam),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurTeam===location.pathname,
            label: 'Our team',
            dropdownItems: [
                {
                    id: '1',
                    navigate: () => navigate(RoutesName.OurTeam),
                    label: 'Our Team',
                },
                {
                    id: '2',
                    navigate: () => navigate(RoutesName.OurTeamDetails),
                    label: 'Team Details',
                }
            ]
        },
        {
            id: '3',
            navigate: () => navigate(RoutesName.OurServices),
            icon: RxDashboard,
            active: RoutesName.Services===location.pathname,
            label: 'Services',
            dropdownItems: [
                {
                    id: '1',
                    navigate: () => navigate(RoutesName.OurServices),
                    label: 'Our Services',
                },
                {
                    id: '2',
                    navigate: () => navigate(RoutesName.OurServices+"/backup-recovery"),
                    label: 'Service Details',
                }
            ]
        },
        {
            id: '4',
            navigate: () => navigate(RoutesName.OurPortfolio),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Portfolio',
            dropdownItems: [
                {
                    id: '1',
                    navigate: () => navigate(RoutesName.OurServices),
                    label: 'Our Portfolio',
                },
                {
                    id: '2',
                    navigate: () => navigate(RoutesName.OurTeam),
                    label: 'Portfolio Details',
                }
            ]
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useNavbarRoutes }