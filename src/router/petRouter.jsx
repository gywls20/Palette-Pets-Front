import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import IsLogin from "./IsLogin.jsx";
// import {Navigate} from "react-router-dom";

const Loading = <div>Loading....</div>
const PetList = lazy(() => import("../components/pet/PetList.jsx"))
const PetDetails = lazy(() => import("../components/pet/PetDetails.jsx"))
// const TestPage = lazy(() => import("./pages/test/TestPage.jsx"))


const petRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace={true} to="list" />
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><IsLogin Component={<PetList/>} /></Suspense>
        },
        {
            path: "details/:id",
            element: <Suspense fallback={Loading}><IsLogin Component={<PetDetails/>} /></Suspense>
        },
    ]
}
export default petRouter;