import { useEffect, useState } from "react";
import SelectTags from "../../components/article/write/atoms/SelectTags.jsx";
import BoardPageComp from "../../components/boardPage/BoardPageComp.jsx";
import DefaultLayout from "../../layouts/DefaultLayout.jsx";


const BoardPage = () => {

    
    // useEffect(() => {
    //     console.log("gggggg")
    // },[search])

    return (
        <DefaultLayout>
            {/* <SelectTags search={search} setSearch={setSearch} /> */}

            {/* <BoardPageComp search={search} /> */}
            {/* <Outlet/> */}
            <BoardPageComp/>

        </DefaultLayout>
    );
};

export default BoardPage;