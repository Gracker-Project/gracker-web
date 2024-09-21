import { Route, Routes } from "react-router-dom";

import { PageLayout } from "@/components/common/layout/PageLayout";

import Login from "@/pages/login/Login";
import Home from "@/pages/home/Home";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<PageLayout />}>
                <Route path="home" element={<Home />}>
                </Route>
            </Route>
        </Routes>
    );
};