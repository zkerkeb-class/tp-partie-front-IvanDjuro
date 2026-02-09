import { Navigate } from 'react-router';
import useLogin from './hooks/useLogin';

const ProtectedRoute = ({ children }) => {
    const { user } = useLogin();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;