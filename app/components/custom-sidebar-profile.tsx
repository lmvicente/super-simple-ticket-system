import {AvatarCustom} from "./avatar"

export default function CustomSidebarProfile() {
    return (
        <div className={"flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}>
            <AvatarCustom/>
        </div>
    );
}
