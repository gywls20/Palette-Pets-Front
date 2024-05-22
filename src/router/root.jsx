import {lazy, Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import testRouter from "./testRouter.jsx";

const Loading = () => <>Loading...</>;
const MainPage = lazy(() => import('./../pages/MainPage'));
const TestPage = lazy(() => import('../pages/test/TestPage.jsx'));

const root = createBrowserRouter([
    {
        path:"",
        element: <Suspense fallback={<Loading />}><MainPage/></Suspense>
    },
    // 계층형으로 경로를 쿼리할 떄는 이렇게 나눠서 하기
    {
        path:"test",
        element: <Suspense fallback={<Loading />}><TestPage/></Suspense>, // 여기엔 그 기능의 인덱스나 메인 페이지 넣는듯
        children: testRouter()
    },
]);

export default root;