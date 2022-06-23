import Row from "react-bootstrap/esm/Row"

// Error Component that renders when something is not found and show a specific message
const ErrorRender = ({error}) => {
    return (
        <Row className="d-flex flex-column justify-content-center align-items-cenet">
            <i class="fa-solid fa-exclamation"></i>
            <h1 className='text-center text-warning'>{error}</h1>
        </Row>
    )
}
export default ErrorRender

