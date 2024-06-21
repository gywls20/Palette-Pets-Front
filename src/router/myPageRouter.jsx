
import {lazy, Suspense} from "react";
import IsLogin from "./IsLogin.jsx";

const Loading = <div>Loading....</div>

const Mypage = lazy(() => import('../pages/member/myPage.jsx'))
const FollowerPage = lazy(() => import('../pages/member/followerPage.jsx'))
const FollowingPage = lazy(() => import('../pages/member/followingPage.jsx'))

const FeedComp = lazy(() => import("../components/member/feedComp.jsx"))
const SettingComp = lazy(() => import('../components/member/settingComp.jsx'))
const Profile = lazy(() => import('../components/member/profileComp.jsx'))


import {Navigate } from "react-router-dom";

const mypageRouter = () =>{
    

        return [
            {
                path: "",
                element: <Navigate replace={true} to=":nickname" />
            },
            {
                path: ":nickname",
                element: <Suspense fallback={Loading}><IsLogin Component={<Mypage/>} /></Suspense>
            },
            {
                path: "follower/:nickname",
                element: <Suspense fallback={Loading}><IsLogin Component={<FollowerPage/>} /></Suspense>
            },
            {
                path: "following/:nickname",
                element: <Suspense fallback={Loading}><IsLogin Component={<FollowingPage/>} /></Suspense>
            },
            {
                path: "feed",
                element: <Suspense fallback={Loading}><IsLogin Component={<FeedComp/>} /></Suspense>
            },
            {
                path: "setting",
                element: <Suspense fallback={Loading}><IsLogin Component={<SettingComp/>} /></Suspense>
            },
            {
                path: "image/profile",
                element: <Suspense fallback={Loading}><IsLogin Component={<Profile/>} /></Suspense>
            }
        ]
}

export default mypageRouter;