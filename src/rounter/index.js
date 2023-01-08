import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home.vue";
import TradingOverview from "../components/TradingOverview.vue";
import Utilities from "../components/Utilities.vue";
import Withdraw from "../components/Withdraw.vue";
import TopUpReset from "../components/TopUpReset.vue";
import Billing from "../components/Billing.vue";
import NewsCalendar from "../components/NewsCalendar.vue";
import Help from "../components/Help.vue";
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import Courses from "../components/Courses.vue";
import Payment from "../components/Payment.vue";
import Checkout from "../components/Checkout.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/trading-overview',
        name: 'TradingOverview',
        component: TradingOverview
    },
    {
        path: '/utilities',
        name: 'Utilities',
        component: Utilities
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        component: Withdraw
    },
    {
        path: '/top-up-reset',
        name: 'TopUpReset',
        component: TopUpReset
    },
    {
        path: '/billing',
        name: 'Billing',
        component: Billing
    },
    {
        path: '/news-calendar',
        name: 'NewsCalendar',
        component: NewsCalendar
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;