import React from "react";

export const Sidebar = ({
  profile,
  navigation,
  activeSection,
  setActiveSection,
}) => {
  return (
    <aside className="lg:w-1/3 lg:sticky top-8 self-start mb-8 lg:mb-0">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-36 h-36 rounded-full mx-auto mb-4 ring-4 ring-blue-200"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/144x144/E0E7FF/4F46E5?text=BD";
          }}
        />
        <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
        <h2 className="text-lg text-blue-600 font-medium mt-1">
          {profile.title}
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-700 transition-colors"
          >
            {profile.email}
          </a>
        </p>
        <nav className="mt-8">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-md text-md font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
