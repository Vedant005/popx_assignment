import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [isAgency, setIsAgency] = useState("yes");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your PopX account
        </h1>

        <form className="space-y-4">
          {[
            { label: "Full Name", required: true },
            { label: "Phone number", required: true },
            { label: "Email address", required: true },
            { label: "Password", required: true, type: "password" },
            { label: "Company name", required: false },
          ].map((field, i) => (
            <div key={i} className="relative">
              <input
                placeholder=" "
                type={field.type || "text"}
                className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label
                className={`absolute left-3 top-2.5 text-sm text-purple-700 transition-all 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 
                  peer-focus:text-sm peer-focus:text-purple-700`}
              >
                {field.label}
                {field.required && (
                  <span className="text-red-500 ml-0.5">*</span>
                )}
              </label>
            </div>
          ))}

          <div className="pt-2">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4 items-center">
              {["Yes", "No"].map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value={opt.toLowerCase()}
                    checked={isAgency === opt.toLowerCase()}
                    onChange={(e) => setIsAgency(e.target.value)}
                    className="accent-purple-600"
                  />
                  <span className="text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white font-semibold py-2 rounded-md"
            onClick={() => navigate("/account")}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
