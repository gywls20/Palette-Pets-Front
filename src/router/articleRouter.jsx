import {lazy, Suspense} from "react";
import ArticleWriteBlock from "../components/article/write/block/ArticleWriteBlock";
// import {Navigate} from "react-router-dom";

const articleRouter = ({Loading}) => {

    return [
      
        {
            path: "write",
            element: <Suspense fallback={Loading}>

                <ArticleWriteBlock/>

                </Suspense>
        },
        {
            path: "update",
            element: <Suspense fallback={Loading}>

                
                
                </Suspense>
        }

    ]

}
export default articleRouter;