import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";

interface Course {
    id: number,
    name: string,
}

export function Home() {
    const [courses, setCourses] = useState<Course[]>(() => []);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch('/courses');
                // save items locally
                setError(null);
            } catch(e) {
                // Add appropriate message
                setError('Error!')
            }
        }
    }, [])

    return (
        <Col className="">
            <ListGroup>
                {courses.map(course => (<ListGroupItem>{course.name}</ListGroupItem>))}
            </ListGroup>
        </Col>
    )
}