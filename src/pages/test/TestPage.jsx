import TestComp from "../../components/TestComp.jsx";
import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import ArticleTest from "../article/ArticleTest.jsx";

const TestPage = () => {

    return (
        <>
            <DefaultLayout>
                <ArticleTest/>
                
            </DefaultLayout>
        </>
    )
}

export default TestPage;