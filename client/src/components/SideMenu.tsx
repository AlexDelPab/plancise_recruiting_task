import { Link } from 'react-router-dom';
import { Button, Col } from 'reactstrap';

export function SideMenu() {

    return (
        <Col className="xs-4">
            <Link to="create">
                <Button color="primary">
                    Create course
                </Button>
            </Link>
        </Col>
    )
}