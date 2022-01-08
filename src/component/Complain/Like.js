import React , {useState} from 'react'
import {DislikeOutlined, LikeOutlined } from '@ant-design/icons'

const Like = () =>{
    const [ like , setLike ] = useState(0);
    const [ dislike , setDislike ] = useState(0);
    const handleLike = (event) =>{
        setLike(like + 1);
    }
    const handleDisLike = (event) =>{
        setDislike(dislike + 1);
    }
    return(
        <div>
            <span onClick={handleLike}><LikeOutlined/></span>
            <span>{like}</span>
            <span  onClick={handleDisLike} style={{marginLeft : "15px"}}><DislikeOutlined/></span>
            <span>{dislike}</span>
        </div>
    );
};

export default Like
