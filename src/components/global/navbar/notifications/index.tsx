import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export const Notification = ()=>{
    return(
        <Button className="bg-white rounded-full py-6">
            <Bell
                color="#3352CC"
                fill="#3352CC"
            />
        </Button>
    )
}