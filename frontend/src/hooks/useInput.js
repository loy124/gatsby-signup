import React, { useState } from 'react'

// useInput 훅 만들어보기

// 해당 훅에 필요한 조건을 생각해보자
// 1. useState를 활용해서 데이터를 변경할 수 있어야한다.
// 2. useCallback을 활용해서 해당 데이터를 변경하는 변경함수를 제작 할 수 있어야한다. 
// 3. 따라서 이를 통해 제작을 진행해보자 

export default function useInput(initialValue){
    const [value, setValue] =  useState(initialValue);
    // useCallback을 활용해서 데이터 변경하는 함수
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, setValue, handler];
}

