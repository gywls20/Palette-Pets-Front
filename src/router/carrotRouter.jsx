import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import IsLogin from "./IsLogin.jsx";

const Loading = <div>Loading....</div>
const CarrotList = lazy(() => import("../components/carrot/CarrotList.jsx"))
const CarrotDetails = lazy(() => import("../components/carrot/CarrotDetail.jsx"))
const CarrotPostForm = lazy(() => import("../components/carrot/CarrotPostForm.jsx"))
const CarrotUpdateForm = lazy(() => import("../components/carrot/CarrotUpdateForm.jsx"))
const CarrotUserList = lazy(() => import("../components/carrot/CarrotUserList.jsx"))



const carrotRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace={true} to="list" />
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><CarrotList/></Suspense>
        },
        {
            path: "details/:id",
            element: <Suspense fallback={Loading}><CarrotDetails/></Suspense>
        },
        {
            path: "post",
            element: <Suspense fallback={Loading}><IsLogin Component={<CarrotPostForm/>} /></Suspense>
        },
        {
            path: "update/:id",
            element: <Suspense fallback={Loading}><IsLogin Component={<CarrotUpdateForm/>}/></Suspense>
        },
        {
            path: "myCarrot",
            element: <Suspense fallback={Loading}><IsLogin Component={<CarrotUserList/>}/></Suspense>

        }
    ]
}
export default carrotRouter;