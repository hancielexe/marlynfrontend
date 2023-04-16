import React, { useState } from 'react';

import UserSidebar from '../partials/UserSidebar';
import UserHeader from '../partials/UserHeader';
import UserBanner from '../partials/userdashboard/UserBanner';
import UserCard01 from '../partials/userdashboard/UserCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';


function UserDashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return ( 
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}
                        <UserBanner />

                        {/* Cards */}
                        <div>
                            <UserCard01 />
                        </div>

                    </div>
                </main>

            </div>
        </div>
    );
}

export default UserDashboard;