import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>This route doesn't exist!</h1>
            <Link to="/">
                return home
            </Link>
        </div>
    );
};

export default ErrorPage;