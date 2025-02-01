
"use client";

import { Avatar, Dropdown } from "flowbite-react";

export function AvatarCustom() {
    return (

        <Dropdown
            label={<Avatar alt="User settings" placeholderInitials="JD">
                <div className="text-left font-medium dark:text-white">
                    <div>John Doe</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">johndoe@company.com</div>
                </div>
            </Avatar>
        }
            arrowIcon={false}
            inline
        >

            <Dropdown.Item>Account Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}
