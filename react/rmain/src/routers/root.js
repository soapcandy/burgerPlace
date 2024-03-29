import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";
import KakaoRedirectPage from "../pages/member/KakaoRedirectPage";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const AdminIndex = lazy(() => import("../page/admin/AdminIndexPage"))
const AdminPage = lazy(() => import("../page/admin/AdminPage"))
const AdminRead = lazy(() => import("../page/admin/AdminReadPage"))
const AdminModify = lazy(() => import("../page/admin/AdminModifyPage"))
const SignUp = lazy(() => import("../page/member/SignUpPage"))

const Products_Index = lazy(() => import("../pages/products/IndexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))
const Member_Login = lazy(() => import("../pages/member/LoginPage")) 


const router = createBrowserRouter([
  {
    path:"",
    element: <MainPage></MainPage>
  },
  {
    path: "about",
    element: <AboutPage></AboutPage>
  },
  {
    path: "member/login",
    element: <Suspense fallback={Loading}><Member_Login/></Suspense>
  },
  {
    path: "member/kakao",
    element: <KakaoRedirectPage></KakaoRedirectPage>
  },
  {
    path: "board",
    element: <Suspense fallback={Loading}><Board_Index/></Suspense>,
    children: [
      {
        path: "list",
        element: <Suspense fallback={Loading}><Board_List/></Suspense>
      },
      {
        path: "read/:bno",
        element: <Suspense fallback={Loading}><Board_Read/></Suspense>
      }
    ]
  },
  {
    path: "products",
    element: <Suspense fallback={Loading}><Products_Index/></Suspense>,
    children: [
      {
        path: "list",
        element: <Suspense fallback={Loading}><Products_List/></Suspense>
      },
      {
        path: "register",
        element: <Suspense fallback={Loading}><Products_Register/></Suspense>
      },
      {
        path: "read/:pno",
        element: <Suspense fallback={Loading}><Products_Read/></Suspense>
      },
      {
        path: "modify/:pno",
        element: <Suspense fallback={Loading}><Products_Modify/></Suspense>
      },
    ]
  },
  {
    path: "admin",
    element: <Suspense fallback={Loading}><AdminIndex></AdminIndex></Suspense>,
    children: [
        {
            path: "list",
            element: <Suspense fallback={Loading}><AdminPage></AdminPage></Suspense>
        },
        {
            path: "read/:id",
            element: <Suspense fallback={Loading}><AdminRead></AdminRead></Suspense>
        },
        {
            path: "modify/:id",
            element: <Suspense fallback={Loading}><AdminModify></AdminModify></Suspense>
        },
    ]
},
{
    path: "member/register",
    element: <Suspense fallback={Loading}><SignUp></SignUp></Suspense>
}
])

export default router;