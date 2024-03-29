import { useEffect } from "react";
import { useState } from "react";
import { getMember } from "../../api/adminAPI";


const initState = {
    id: '',
    pw: '',
    nickname: '',
    admin: false,
    delFlag: false
}

const ReadComponent = ({ id, moveModify, moveList }) => {

    // const { nickname } = useSelector(state => state.login)

    const [member, setMember] = useState(initState)

    

    useEffect(() => {

        getMember(id).then(data => {
            
            console.log("data: " )
            console.log(data)

            setMember(data)

        }).catch(e => {
            console.log(e)
        })
    }, [id])

    return (
        <div>
        <div className="m-2 p-2 border-2">
        <h1>입력 정보</h1>
            <div className="m-2 p-2 border-2">
                닉네임: {member.nickname}
            </div>
            <div className="m-2 p-2 border-2">
                아이디: {member.id}
            </div>
            <div className="m-2 p-2 border-2">
                비밀번호: {member.pw}
            </div>
            <div className="m-2 p-2 border-2">
                관리자 여부: {member.admin ? '예' : '아니오'}
            </div>
            <div className="m-2 p-2 border-2">
                삭제 여부: {member.delFlag ? '예' : '아니오'}
            </div>
            <div>
                <button className="bg-blue-400 border-2 m-2 p-2 font-extrabold"
                    onClick={moveList}>
                    List
                </button>
                <button className="bg-orange-400 border-2 m-2 p-2 font-extrabold"
                    onClick={() => moveModify(member.id)}>
                    Modify
                </button>
            </div>
        </div>
    </div>
);
}

export default ReadComponent;