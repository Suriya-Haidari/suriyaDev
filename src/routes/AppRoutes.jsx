import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import { NotFoundPage } from "@/pages/NotFound/NotFoundPage";
import { paths } from "@/routes/paths";

function RouteScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = decodeURIComponent(hash.slice(1));
      const section = document.getElementById(sectionId);
      if (section) requestAnimationFrame(() => section.scrollIntoView());
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [hash, pathname]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <RouteScrollManager />
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
