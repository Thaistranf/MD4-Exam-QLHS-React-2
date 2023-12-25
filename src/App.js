import ListStudent from "./pages/student/ListStudent"
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CreateStudent from "./pages/student/CreateStudent";

function App() {
  return (
    <>
      <Routes>

          {/*Gia tri cua path la hau to cua localhost:3000*/}
          {/*Duong dan den trang Home*/}
          <Route path={'students'} element={<Home />}>
              {/*list student se dc thay the vao vung Outlet*/}
              <Route path={'list'} element={<ListStudent />} />
              <Route path={'add'} element={<CreateStudent />} />
          </Route>

          {/*Duong dan den trang Admin*/}
          <Route path={'admin'} element={<Admin />}/>

          {/*Kiem tra * -> Nhung hau to khac cua localhost:3000 thi se navigate (tra ve) trang list student */}
          <Route path={'*'} element={<Navigate to="/students/list" />}/>

      </Routes>
    </>
  );
}

export default App;
