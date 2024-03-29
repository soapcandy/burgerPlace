
//실제 axios에  전달하고 responseDTO를 받아서 처리해주는 Component

import { useEffect, useState } from "react";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";
import styles from './boardCss/button.module.css';

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null
}


const ListComponent = ({queryObj,movePage, moveRead, moveRegister}) => {
    // rendering시 에러방지
    const [listData, setListData] = useState(initState)

    // use가 붙으면 component 에서만 쓸수있다.
    // 그외는 자체적으로 제공하는 함수라 생각한다.
    useEffect(()=>{

        getList(queryObj).then(data =>{
            console.log(data)
            setListData(data)
        })

    },[queryObj])

  
    return (  
        <div>

            {/* QueryObj는 필요함 search type keyword가 들어가야되기떄문 */}

            <div>
                <ul >
                    <li className="text-red-400 font-bold flex justify-center">
                        <span className="m-2">Number </span>
                        <span className="m-2">Title </span>
                        <span className="m-2">ReplyCounts</span>
                        <span className="m-2">Register Date</span>
                        </li>
                    {listData.dtoList.map(
                     ({freeBno,freeTitle,replyCount,regDate})   =>
                     
                     <li key={freeBno}
                     className="flex justify-center border-2 border-white text-black text-1xl font-bold"
                     onClick={()=> moveRead(freeBno)}
                     >{freeBno} - {freeTitle}  - [{replyCount}] - {regDate}</li>)}

                </ul>

        <button onClick={() => moveRegister()} 
        className={styles.btn}>Register Page</button>

            </div>
            <div>
            </div>
            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
    );
}
 
export default ListComponent;