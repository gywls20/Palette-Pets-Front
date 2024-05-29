import React,{createContext,useContext,useEffect,useState} from "react";


//Create a Context 
export const ArticleImageUploadContext = createContext();




export const useArticleImageUpload = () => useContext(ArticleImageUploadContext);

export default function ArticleImageUploadProvider({children}){
    
    const [boardName, setBoardName] = useState('');
    const [title, setTitle] = useState('');
    const [content,setContent] =useState('');
    const [select, setSelect] = useState([]);
    const [imgList, setImgList] = useState([]); //span에 미리보기로 뿌려줄 이미지 정보
    const [files, setFiles] = useState([]); // 파일 정보 Files -> 유사 객체 배열 -> 배열로 얕게 복사

    const [articleBody,setArticleBody] =useState( {
        boardName:boardName,
        tags:select,
        title:title,
        content:content
    })
    const reset =()=>{
        setBoardName('');
        setTitle('');
        setContent('');
        setSelect([]);
        setImgList([]);
        setFiles([]);
        setArticleBody({boardName:'',tags:[],title:'',content:''})
    }
    //title,content handler
    const inputTitle = (e)=>{
        setTitle(e.target.value);
        setArticleBody({...articleBody,title:e.target.value})
    }

    const inputContent = (e)=>{
        setContent(e.target.value);
        setArticleBody({...articleBody,content:e.target.value})
    }

    //boardName handler
    const boardNameChange = (e) => {
        
        setBoardName(e.target.value);
        setArticleBody({...articleBody,boardName:e.target.value})
    };

    //select handler
    useEffect(()=>{
        setArticleBody({...articleBody,tags:select})
    },[select])

   

    return (                    
        //value에 추가하는 값은 객체 { { } } 중괄호 속에 중괄호 주어라
        <ArticleImageUploadContext.Provider value={{boardName,boardNameChange,title,content,inputTitle,inputContent,select,setSelect,imgList, setImgList,files, setFiles,reset}} > 
            {children}

        </ArticleImageUploadContext.Provider>
    );
}