import { useEffect } from "react"

const useTitle = title => {


    useEffect(() => {
        document.title = `${title}-Bike-Reseller`;
    }, [title])
}
export default (useTitle)