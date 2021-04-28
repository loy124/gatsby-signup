import React, { useCallback, useState } from 'react';
import axios from  'axios';
import useSwr from 'swr';
import { Form } from '../components/LoginForm/styles';
import Seo from '../components/Seo';

export default function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail  = useCallback((e) => {
        setEmail(e.target.value);
    },[])

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[])
    
    const onSubmit = useCallback(async(e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log("test");
        // TODO axios 요청을 통해서 backend에 보내야하는데 프록시를 통해서 회원가입 로그인 진행해보기
        // https://ljh86029926.gitbook.io/coding-apple-react/undefined-1/cra
        const {data} = axios.post('/api/user', {
            email,
            password
        });
        console.log(data);
    }, [email, password])
    

    return (
        <div>
             <Seo title="민코딩 회원가입 페이지"></Seo>
            <Form onSubmit={onSubmit}>
                <input type="text" value={email} onChange = {onChangeEmail} />
                <input type="password" value={password} onChange = {onChangePassword} />
                <input type="submit" value="입력"/>
            </Form>
        </div>
    )
}