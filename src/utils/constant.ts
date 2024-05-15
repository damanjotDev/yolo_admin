export const RoutesName = {
        Signup: '/signup',
        Login: '/login',
        ForgetPassword: '/forgetPassword',
        NewPassword: '/newPassword',
        VerifyEmail: '/verifyEmail',
        Home: '/home',
        Contact:'/contact',
        OurTeam:'/our-team',
        OurTeamDetails: 'our-team/:id',
        OurServices:'/our-services',
        OurServiceDetails:'/our-services/:id',
        OurPortfolio:'/our-portfolio',
        OurPortfolioDetails: '/our-portfolio/:id',
        NotFound: '/not-found',
        Pages: '/#',
        Analytics: '/analytics',
        Customer: '/customer',
        Orders: '/orders',
        Profile: '/profile',


        Dashboard: '/',

        Services: '/services',
        ServiceAdd: '/services/add',
        ServiceEdit: '/services/edit',

        Properties: '/properties',
        PropertyAdd: '/properties/add',
        PropertyEdit: '/properties/edit',

        Users: '/users',
        UserAdd: '/users/add',
        UserEdit: '/users/edit',

        Categories: '/categories',
        CategoryAdd: '/categories/add',
        CategoryEdit: '/categories/edit',

        Events: '/events',
        EventAdd: '/events/add',
        EventEdit: '/events/edit',

        Tags: '/tags',
        TagAdd: '/tags/add',
        TagEdit: '/tags/edit',

        Rooms: '/rooms',
        Event: '/events',
        Reviews: 'reviews'

}

export const AvailableRoutes = Object.values(RoutesName);

//--------------------funtion to convert valid route name

export const ConvertIntoValidRoute = (path: string)=>{
        return path?.toLocaleLowerCase()?.split(" ")?.join("-")
}

//firebase collection names

export const firebaseCollectionName = {
        ClientReviews: 'client_reviews',
        Devronins: 'devronins',
        Services: 'services',
        TeamMembers: 'team_members',
        Technologies: 'technologies',
        Projects: 'projects'
}
