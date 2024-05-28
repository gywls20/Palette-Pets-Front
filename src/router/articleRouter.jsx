import {lazy, Suspense} from "react";
import ArticleWriteBlock from "../components/article/write/block/ArticleWriteBlock";
import ArticleImageUploadProvider from "../components/article/write/context/ArticleImageUploadContext";
// import {Navigate} from "react-router-dom";

const articleRouter = ({Loading}) => {

    return [
      
        {
            path: "write",
            element: <Suspense fallback={Loading}>
                        <ArticleImageUploadProvider>
                            <ArticleWriteBlock/>
                        </ArticleImageUploadProvider>
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