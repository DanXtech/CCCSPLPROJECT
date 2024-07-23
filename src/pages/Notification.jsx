import React from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../UI/CommonSection";
const Notification = () => {
    return (
        <>
            <Helmet title="NOTIFICATION">
                <CommonSection title="Notification" />
                <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12">
                    <p className="text-white">Hi dan</p>
                </div>
            </Helmet>
        </>
    );
};

export default Notification;
