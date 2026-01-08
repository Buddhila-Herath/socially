"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({ userId }: { userId: string }) {

    const [isLoading, setIsLoading] = useState(false);

    const handleFollow = async () => {
        setIsLoading(true);

        try {
            await toggleFollow(userId);
        } catch (error) {
            console.error("Error in Follow user", error);
            toast.error("Error in Follow user");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Button
            size={"sm"}
            variant={"secondary"}
            disabled={isLoading}
            onClick={handleFollow}
            className="w-20"
        >

            {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}</Button>
    )
}

export default FollowButton