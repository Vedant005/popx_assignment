import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-purple-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-purple-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-white font-semibold py-2 rounded-md cursor-not-allowed"
            onClick={() => navigate("/account")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
