import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center md:items-center md:justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 md:p-10 flex flex-col justify-end md:justify-center min-h-screen md:min-h-0">
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="bg-purple-800 text-white py-2 rounded-md font-medium"
            onClick={() => navigate("/create")}
          >
            Create Account
          </button>
          <button
            className="bg-purple-200 text-gray-700 py-2 rounded-md font-semibold"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
