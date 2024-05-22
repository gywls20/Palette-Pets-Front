import {lazy, Suspense} from "react";
// import {Navigate} from "react-router-dom";

const Loading = <div>Loading....</div>
const TestList = lazy(() => import("../pages/test/TestList.jsx"))
// const TestPage = lazy(() => import("./pages/test/TestPage.jsx"))

const testRouter = () => {
    return [
        // {
        //     path: "",
        //     element: <Navigate replace={true} to="" />
        // },
        {
            path: "list",
            element: <Suspense fallback={Loading}><TestList/></Suspense>
        },
    ]
}
export default testRouter;