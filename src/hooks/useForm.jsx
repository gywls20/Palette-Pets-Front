import React, { useCallback, useState } from 'react';




const useForm = (initialForm) => {

    const [form,setForm] = useState(initialForm);
    
    
    //<input> 태그의 onChange를 이용할 때
    const onChange = useCallback( e => {

        const { name,value } = e.target;

        setForm( form => ({ ...form, [name]:value}))

    },[])


    //수동으로 값을 집어 넣을 때
    const onInput = useCallback( (props)=> {
       
        const {name,value} = props;
        setForm ( form => ({...form,[name]:value}))
        
    },[])

    const reset = useCallback(()=>setForm(initialForm),[initialForm]);

    return [form,onChange,onInput,reset,setForm];
  
};

export default useForm;