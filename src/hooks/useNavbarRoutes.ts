
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
            navigate: () => navigate(RoutesName.Services),
            icon: MdOutlineAnalytics,
            active: RoutesName.Services===location.pathname,
            label: 'Services'
        },
        {
            id: '3',
            navigate: () => navigate(RoutesName.Properties),
            icon: RxDashboard,
            active: RoutesName.Properties===location.pathname,
            label: 'Properties'
        },
        {
            id: '4',
            navigate: () => navigate(RoutesName.Rooms),
            icon: MdOutlineAnalytics,
            active: RoutesName.Rooms===location.pathname,
            label: 'Rooms'
        },
        {
            id: '5',
            navigate: () => navigate(RoutesName.Users),
            icon: MdOutlineAnalytics,
            active: RoutesName.Users===location.pathname,
            label: 'Users'
        },
        {
            id: '6',
            navigate: () => navigate(RoutesName.Categories),
            icon: MdOutlineAnalytics,
            active: RoutesName.Categories===location.pathname,
            label: 'Categories'
        },
        {
            id: '7',
            navigate: () => navigate(RoutesName.Event),
            icon: MdOutlineAnalytics,
            active: RoutesName.Event===location.pathname,
            label: 'Event'
        },
        {
            id: '8',
            navigate: () => navigate(RoutesName.Tags),
            icon: MdOutlineAnalytics,
            active: RoutesName.Tags===location.pathname,
            label: 'Tags'
        },
        {
            id: '9',
            navigate: () => navigate(RoutesName.Abouts),
            icon: MdOutlineAnalytics,
            active: RoutesName.Abouts===location.pathname,
            label: 'Abouts'
        }
    ]

    return routes

}

export { useNavbarRoutes }