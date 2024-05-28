import React,{createContext,useContext,useState} from "react";


//Create a Context 
export const ArticleImageUploadContext = createContext();




export const useArticleImageUpload = () => useContext(ArticleImageUploadContext);

export default function ArticleImageUploadProvider({children}){

    
    const [boardName, setBoardName] = useState('');
    const [title, setTitle] = useState('');
    const [content,setContent] =useState('');
    
    //title,content handler
    const inputTitle = (e)=>{
        setTitle(e.target.value);
    }
    const inputContent = (e)=>{
        setContent(e.target.value);
    }

    //boardName handler
    const boardNameChange = (event) => {
        
        setBoardName(event.target.value);
    };

    


    return (                    
        //value에 추가하는 값은 객체 { { } } 중괄호 속에 중괄호 주어라
        <ArticleImageUploadContext.Provider value={{boardName,boardNameChange,title,content,inputTitle,inputContent}} > 
            {children}

        </ArticleImageUploadContext.Provider>
    );
}