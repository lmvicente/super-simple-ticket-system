"use client";

import { useRouter, usePathname } from "next/navigation"; // Next.js router
import { Sidebar } from "flowbite-react";
import {
    HiOutlineHome,
    HiOutlineTicket,
    HiOutlineInbox,
    HiOutlineChartBar,
    HiOutlineCog,
} from "react-icons/hi";
import CustomSidebarProfile from "@/app/components/custom-sidebar-profile";

interface SideMenuProps {
    companyName: string;
}

export function SideMenu({ companyName }: SideMenuProps) {
    const router = useRouter(); // Initialize Next.js router
    const pathname = usePathname(); // Get the current route

    return (
        <Sidebar aria-label="Sidebar with TechSolutions logo" className="h-screen">
            <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="logo">
                {companyName}
            </Sidebar.Logo>
            <Sidebar.Items>
                <CustomSidebarProfile />
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        onClick={() => router.push("/")}
                        icon={HiOutlineHome}
                        className={pathname === "/" ? "bg-gray-200 dark:bg-gray-800" : ""}
                    >
                        Home
                    </Sidebar.Item>

                    <Sidebar.Collapse icon={HiOutlineTicket} label="Tickets">
                        <Sidebar.Item
                            onClick={() => router.push("/tickets/mytickets")} // ✅ Lowercase path
                            className={pathname === "/tickets/mytickets" ? "bg-gray-200 dark:bg-gray-800" : ""}
                        >
                            My Tickets
                        </Sidebar.Item>

                        <Sidebar.Item
                            onClick={() => router.push("/tickets/unassigned")}
                            className={pathname === "/tickets/unassigned" ? "bg-gray-200 dark:bg-gray-800" : ""}
                        >
                            Unassigned Tickets
                        </Sidebar.Item>
                        <Sidebar.Item
                            onClick={() => router.push("/tickets/open")}
                            className={pathname === "/tickets/open" ? "bg-gray-200 dark:bg-gray-800" : ""}
                        >
                            Open Tickets
                        </Sidebar.Item>
                        <Sidebar.Item
                            onClick={() => router.push("/tickets/all")}
                            className={pathname === "/tickets/all" ? "bg-gray-200 dark:bg-gray-800" : ""}
                        >
                            All Tickets
                        </Sidebar.Item>
                    </Sidebar.Collapse>

                    <Sidebar.Item
                        onClick={() => router.push("/inbox")}
                        icon={HiOutlineInbox}
                        className={pathname === "/inbox" ? "bg-gray-200 dark:bg-gray-800" : ""}
                    >
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item
                        onClick={() => router.push("/reports")}
                        icon={HiOutlineChartBar}
                        className={pathname === "/reports" ? "bg-gray-200 dark:bg-gray-800" : ""}
                    >
                        Reports
                    </Sidebar.Item>
                    <Sidebar.Item
                        onClick={() => router.push("/settings")}
                        icon={HiOutlineCog}
                        className={pathname === "/settings" ? "bg-gray-200 dark:bg-gray-800" : ""}
                    >
                        System Settings
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
