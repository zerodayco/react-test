import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () => {
    return (
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <Outlet />
            </main>
        </Suspense>
    );
};

export default SharedLayout;
