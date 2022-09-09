import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function CourseInformation() {
    // get ID from route params
    const params = useParams();

    // setup local state for course info
    const [course, setCourse] = useState(() => {})

    // fetch full information for course by ID
    useEffect(() => {}, [])

    return <></>
}