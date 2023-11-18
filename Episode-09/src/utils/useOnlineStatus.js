import { useState,useEffect } from "react";

const useOnlineStatus = () => {
//    check if online 

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",(event)=>{
            setOnlineStatus(true)
        })
        
        window.addEventListener("offline",(event)=>{
            setOnlineStatus(false)
        })
    },[])

//     return boolean vakue

        return onlineStatus
}

export default useOnlineStatus;