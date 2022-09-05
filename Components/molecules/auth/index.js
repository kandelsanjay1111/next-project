import React from 'react'
import ButtonLink from '../../atoms/auth';

const links=[
{path:"/login",text:"Login"},
{path:"/signin",text:"Register"}
];

const AuthLink=()=>{
    return links.map((item)=>{
        return <ButtonLink
            path={item.path}
            text={item.text}
        />
    })
}

export default AuthLink;