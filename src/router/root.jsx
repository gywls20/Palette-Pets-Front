import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import testRouter from "./testRouter.jsx";
import articleRouter from "./articleRouter.jsx";
import BoardPage from "../pages/board/BoardPage.jsx";
import HealthCalculatorPage from "../pages/HealthCalculatorPage.jsx";
import ListViewComp from "../components/listView/ListViewComp.jsx";
import petRouter from "./petRouter.jsx";



const Loading = () => <>Loading...</>;
const MainPage = lazy(() => import('./../pages/MainPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage'));
const JoinPage = lazy(() => import('./../pages/JoinPage'));
const TestPage = lazy(() => import('../pages/test/TestPage.jsx'));
const AriticlePage = lazy(()=>import('../pages/AriticlePage.jsx'));
const ManagerPage = lazy(() => import('../pages/manager/ManagerPage'));
const UpdateList = lazy(() => import('../pages/update/UpdateList.jsx'));
const PetPage = lazy(() => import('../pages/pet/PetPage.jsx'));
const WalkingPage = lazy(() => import('../pages/walking/WalkingPage.jsx'));


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
        path:"/login",
        element: <Suspense fallback={<Loading />}><LoginPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children:testRouter()
    },

    {
        path:"/join",
        element: <Suspense fallback={<Loading />}><JoinPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children:testRouter()
    },

    {
        path:"/article",
        element: <Suspense fallback={<Loading />}><AriticlePage/></Suspense>, 
        children: articleRouter({Loading : Loading() })
    },

    {
        path:"/healthCalculatorPage",
        element: <Suspense fallback={<Loading />}><HealthCalculatorPage/></Suspense>,
    },

    {
        path:"/board",
        element: <Suspense fallback={<Loading />}><BoardPage/></Suspense>,
        // children:boardRouter()
    },

    {
        path:"/manager",
        element: <Suspense fallback={<Loading />}><ManagerPage/></Suspense>,
        // children:boardRouter()
    },

    {
        path:"/recent",
        element: <Suspense fallback={<Loading />}><ListViewComp/></Suspense>,
    },
    {
        path: "/pet",
        element: <Suspense fallback={<Loading/>}><PetPage/></Suspense>,
        children: petRouter()
    },

    {
        path: "/updateList",
        element: <Suspense fallback={<Loading/>}><UpdateList/></Suspense>
    },
    {
        path: "/walking",
        element: <Suspense fallback={<Loading/>}><WalkingPage/></Suspense>
    },
    

]);

export default root;