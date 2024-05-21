import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading....</div>
// const TestList = lazy(() => import("../pages/test/ListPage"))
// const TestRead = lazy(() => import("../pages/test/ReadPage"))
// const TestAdd = lazy(() => import("../pages/test/AddPage"))
// const TestModify = lazy(() => import("../pages/test/ModifyPage"))

const testRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace={true} to="list"/>
        },
        // {
        //     path: "list",
        //     element: <Suspense fallback={Loading}><TestList/></Suspense>
        // },
        // {
        //     path: "read/:tno",
        //     element:  <Suspense fallback={Loading}><TestRead/></Suspense>
        // },
        // {
        //     path: "add",
        //     element: <Suspense fallback={Loading}><TestAdd/></Suspense>
        // },
        // {
        //     path: "modify/:tno",
        //     element: <Suspense fallback={Loading}><TestModify/></Suspense>
        // }
    ]
}
export default testRouter;