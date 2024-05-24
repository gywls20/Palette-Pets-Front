import {lazy, Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import testRouter from "./testRouter.jsx";
import articleRouter from "./articleRouter.jsx";

const Loading = () => <>Loading...</>;
const MainPage = lazy(() => import('./../pages/MainPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage'));
const JoinPage = lazy(() => import('./../pages/JoinPage'));
const TestPage = lazy(() => import('../pages/test/TestPage.jsx'));
<<<<<<< HEAD
const AriticlePage = lazy(()=>import('../pages/AriticlePage.jsx'));
=======
const ManagerPage = lazy(() => import('../pages/manager/ManagerPage.jsx'))
const ReportList = lazy(() => import('../pages/manager/ReportList.jsx'))
const HistoryList = lazy(() => import('../pages/manager/HistoryList.jsx'))
>>>>>>> 62fe41a7e91d5e9230bd44d53d0103efbd3e457e

const root = createBrowserRouter([
    {
        path:"/",
        element: <Suspense fallback={<Loading />}><MainPage/></Suspense>
    },
    // 계층형으로 경로를 쿼리할 떄는 이렇게 나눠서 하기
    {
        path:"test",
        element: <Suspense fallback={<Loading />}><TestPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children: testRouter()
    },

    {
        path:"login",
        element: <Suspense fallback={<Loading />}><LoginPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children:testRouter()
    },

    {
        path:"join",
        element: <Suspense fallback={<Loading />}><JoinPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children:testRouter()
    },
<<<<<<< HEAD
    {
        path:"article",
        element: <Suspense fallback={<Loading />}><AriticlePage/></Suspense>, 
        children: articleRouter({Loading : Loading() })
    }
=======

    {
        path:"manager",
        element: <Suspense fallback={<Loading />}><ManagerPage/></Suspense>,
        // children:managerRouter()
    },
    {
        path: "manager/reportList",
        element: <Suspense fallback={<Loading/>}><ReportList/></Suspense>
    },
    {
        path: "manager/historyList",
        element: <Suspense fallback={<Loading/>}><HistoryList/></Suspense>
    },

>>>>>>> 62fe41a7e91d5e9230bd44d53d0103efbd3e457e
]);

export default root;