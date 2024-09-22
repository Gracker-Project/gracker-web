import { Route, Routes } from "react-router-dom";

import { PageLayout } from "@/components/common/layout/PageLayout";

import MoreInfo from "@/pages/more-info/MoreInfo";
import Login from "@/pages/login/Login";
import Home from "@/pages/home/Home";
import Reports from "@/pages/reports/Reports";
import Add from "@/pages/add/Add";
import Tips from "@/pages/tip/Tip";
import More from "@/pages/more/More";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/more-info" element={<MoreInfo />} />

            <Route path="/" element={<PageLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="reports" element={<Reports />} />
                <Route path="add" element={<Add />} />
                <Route path="tips" element={<Tips />} />
                <Route path="more" element={<More />} />
            </Route>
        </Routes>
    );
};