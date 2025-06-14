function AccountSettings() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-900">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@gmail.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountSettings;
