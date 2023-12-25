import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from "react-router-dom";
export default function Home() {
    return  (
        <>
            <Header /><hr/>
            <Navbar /><hr/>
            <Outlet /><hr/>  {/*Outlet se dai dien cho 1 vung hien thi chung ma khi goi component se thay the vao*/}
            <Footer />
        </>

    )
}