import { lazy, Suspense } from "react";

import ArticleDelete from "../components/article/delete/ArticleDelete";
// import {Navigate} from "react-router-dom";
const ArticleWriteForm = lazy(() => import('../components/article/write/ArticleWriteForm'));


const articleRouter = ({ Loading }) => {

    return [

        {
            path: "write",
            element: <Suspense fallback={Loading}>
               
                    <ArticleWriteForm />
                
            </Suspense>
        },
        {
            path: "update",
            element: <Suspense fallback={Loading}>



            </Suspense>
        },
        {
            path: "delete/:articleId",
            element: <Suspense fallback={Loading}>

                <ArticleDelete />

            </Suspense>
        }

    ]

}
export default articleRouter;