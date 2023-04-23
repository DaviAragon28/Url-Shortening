import { useEffect, useState } from "react"

async function useGetShortenLink() {
    const [responseApi, setResponseApi] = useState([])

    useEffect(() => {
        const toDo = async () => {
            const get = await fetch(`https://api.shrtco.de/v2/shorten?url=https://www.youtube.com/watch?v=gIhNU686ZOE`)
            const response = await get.json()
            console.log(response);
            setResponseApi(response)
        }

        toDo()

    }, [])



    return { responseApi }
}


export { useGetShortenLink }