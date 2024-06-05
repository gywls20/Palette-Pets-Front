import { useEffect, useState } from "react";
import SelectTags from "../../components/article/write/atoms/SelectTags.jsx";
import BoardPageComp from "../../components/boardPage/BoardPageComp.jsx";
import DefaultLayout from "../../layouts/DefaultLayout.jsx";

const BoardPage = () => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("gggggg")
    },[search])

    return (
        <DefaultLayout>
            <SelectTags search={search} setSearch={setSearch} />
            <BoardPageComp search={search} />
        </DefaultLayout>
    );
};

export default BoardPage;