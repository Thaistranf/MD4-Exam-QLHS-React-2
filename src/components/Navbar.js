import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <h1>
                {/*The Link -> tao 1 nut dieu huong de chuyen trang ma khong bi reload*/}
                {/*Gia tri cua "to" la hau to cua localhost:3000 (lay tu Route) va nho phai viet / truoc gia tri
                de may tinh hieu la thay the 1 hau to khac chu khong phai them vao sau no*/}
                <Link to="/students/list">List student</Link>|
                <Link to="/students/add">Create student</Link>|
                <Link to="/admin">Admin</Link>
            </h1>
        </>
    )
}