import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import testRouter from "./testRouter.jsx";
import articleRouter from "./articleRouter.jsx";
import BoardPage from "../pages/board/BoardPage.jsx";
import HealthCalculatorPage from "../pages/HealthCalculatorPage.jsx";
import petRouter from "./petRouter.jsx";
import hotSpotRouter from "./hotSpotRouter.jsx";
import SseTest from "../pages/test/SseTest.jsx";
import IsLogin from "./IsLogin.jsx";
import carrotRouter from "./carrotRouter.jsx";





const Loading = () => <>Loading...</>;
const MainPage = lazy(() => import('./../pages/MainPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage'));
const JoinPage = lazy(() => import('./../pages/JoinPage'));
const TestPage = lazy(() => import('../pages/test/TestPage.jsx'));
const AriticlePage = lazy(()=>import('../pages/AriticlePage.jsx'));
const UpdateList = lazy(() => import('../pages/update/UpdateList.jsx'));
const PetPage = lazy(() => import('../pages/pet/PetPage.jsx'));
const HotSpotPage = lazy(() => import('../pages/hotSpot/HotSpotPage.jsx'));
<<<<<<<<< Temporary merge branch 1
const ArticlePage = lazy(() => import('../pages/article/ArticleTest.jsx'));
=========
const CarrotPage = lazy(() => import('../pages/carrot/CarrotPage.jsx'));
>>>>>>>>> Temporary merge branch 2

const root = createBrowserRouter([
    {
        path:"/",
        element: <Suspense fallback={<Loading />}><MainPage/></Suspense>
    },
    // 계층형으로 경로를 쿼리할 떄는 이렇게 나눠서 하기
    {
        path:"/test",
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
        element: <Suspense fallback={<Loading />}>
           
            <AriticlePage/>
            
        </Suspense>, 
        children: articleRouter({Loading : Loading() })
    },
    // {
    //     path:"/view/:articleId",
    //     element: <Suspense fallback={<Loading />}><ArticleView/></Suspense>, 
     
    // },
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
        path:"/recent",
        element: <Suspense fallback={<Loading />}><BoardPage/></Suspense>,
    },
    {
        path: "/pet",
        element: <Suspense fallback={<Loading/>}><PetPage/></Suspense>,
        children: petRouter()
    },
    {
        path: "/hotspot",
        element: <Suspense fallback={<Loading/>}><HotSpotPage/></Suspense>,
        children: hotSpotRouter()
    },
    {
        path: "/carrot",
        element: <Suspense fallback={<Loading/>}><CarrotPage/></Suspense>,
        children: carrotRouter()

    },
    {
        path: "/updateList",
        element: <Suspense fallback={<Loading/>}><UpdateList/></Suspense>
    },
    {
        path: "/walking",
        element: <Suspense fallback={<Loading/>}><WalkingPage/></Suspense>
    },
    {
        path: "/sseTest",
        element: <Suspense fallback={<Loading/>}><IsLogin Component={<SseTest/>} /></Suspense>
    },
    {
        path:"article",
        element: <Suspense fallback={<Loading />}><ArticlePage/></Suspense>,

    },
    {
        path:"/chat",
        element: <Suspense fallback={<Loading />}><IsLogin Component={<ChatPage/>} /></Suspense>
    },
    {
        path:"/notification",
        element: <Suspense fallback={<Loading />}><IsLogin Component={<Notification/>} /></Suspense>
    }
]);

export default root;