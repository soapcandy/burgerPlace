import { useNavigate, useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import BoardModifyComponent from "../../components/board/read/BoardModifyComponent";

const ModifyPage = () => {

    const { queryObj, moveList, moveRead } = useQueryObj()
    const { freeBno } = useParams()


    return (
        <div>

            <div className="flex justify-center font-bold text-2xl text-red-300">FreeBoard Modify Page {freeBno}</div>
            <BoardModifyComponent freeBno={freeBno} moveList={moveList} moveRead={moveRead}></BoardModifyComponent>

        </div>);
}

export default ModifyPage;