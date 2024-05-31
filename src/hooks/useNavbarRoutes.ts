
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, useNavigate} from "react-router-dom"


const useNavbarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: '1',
            navigate: () => navigate(RoutesName.Dashboard),
            icon: RxDashboard,
            active: RoutesName.Dashboard===location.pathname,
            label: 'Dashboard'
            
        },
        {
            id: '2',
            navigate: () => navigate(RoutesName.Homes),
            icon: RxDashboard,
            active: RoutesName.Homes===location.pathname,
            label: 'Homes'
            
        },
        {
            id: '3',
            navigate: () => navigate(RoutesName.Services),
            icon: MdOutlineAnalytics,
            active: RoutesName.Services===location.pathname,
            label: 'Services'
        },
        {
            id: '4',
            navigate: () => navigate(RoutesName.Properties),
            icon: RxDashboard,
            active: RoutesName.Properties===location.pathname,
            label: 'Properties'
        },
        {
            id: '5',
            navigate: () => navigate(RoutesName.Rooms),
            icon: MdOutlineAnalytics,
            active: RoutesName.Rooms===location.pathname,
            label: 'Rooms'
        },
        {
            id: '6',
            navigate: () => navigate(RoutesName.Users),
            icon: MdOutlineAnalytics,
            active: RoutesName.Users===location.pathname,
            label: 'Users'
        },
        {
            id: '7',
            navigate: () => navigate(RoutesName.Categories),
            icon: MdOutlineAnalytics,
            active: RoutesName.Categories===location.pathname,
            label: 'Categories'
        },
        {
            id: '8',
            navigate: () => navigate(RoutesName.Events),
            icon: MdOutlineAnalytics,
            active: RoutesName.Events===location.pathname,
            label: 'Event'
        },
        {
            id: '9',
            navigate: () => navigate(RoutesName.Tags),
            icon: MdOutlineAnalytics,
            active: RoutesName.Tags===location.pathname,
            label: 'Tags'
        },
        {
            id: '10',
            navigate: () => navigate(RoutesName.Abouts),
            icon: MdOutlineAnalytics,
            active: RoutesName.Abouts===location.pathname,
            label: 'Abouts'
        },
        {
            id: '11',
            navigate: () => navigate(RoutesName.Experiences),
            icon: MdOutlineAnalytics,
            active: RoutesName.Experiences===location.pathname,
            label: 'Experiences'
        },
        {
            id: '12',
            navigate: () => navigate(RoutesName.Pages),
            icon: MdOutlineAnalytics,
            active: RoutesName.Pages===location.pathname,
            label: 'Pages'
        }
    ]

    return routes

}

export { useNavbarRoutes }