import { lazy, Suspense } from "react";

import ArticleDelete from "../components/article/delete/ArticleDelete";
import ArticleUpdateForm from "../components/article/update/ArticleUpdateForm";
import ArticleView from "../components/article/view/ArticleView";
import { useSelector } from "react-redux";
import IsLogin from "./IsLogin";

const ArticleWriteForm = lazy(() => import('../components/article/write/ArticleWriteForm'));

const articleRouter = ({ Loading }) => {
    

    return [

        {
            path: "write",
            element: <Suspense fallback={Loading}>

                    <IsLogin Component={<ArticleWriteForm />}/>
                
            </Suspense>
        },
        {
            path: "view/:articleId",
            element: <Suspense fallback={Loading}>

                <ArticleView />

            </Suspense>
        },
        {
            path: "update/:articleId",
            element: <Suspense fallback={Loading}>
                
                <IsLogin Component={ <ArticleUpdateForm />}/>
              
            </Suspense>
        },
        // {
        //     path: "delete/:articleId",
        //     element: <Suspense fallback={Loading}>

        //         <ArticleDelete />

        //     </Suspense>
        // }


    ]

}
export default articleRouter;