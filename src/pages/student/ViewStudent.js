import {useParams} from "react-router-dom";

export default function ViewStudent() {
    let {id} = useParams();
    console.log(id);
    return (
        <>
            <h1>View Student</h1>
        </>
    )
}