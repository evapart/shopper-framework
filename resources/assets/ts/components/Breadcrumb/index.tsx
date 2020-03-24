import * as React from "react";

export default ({ children }: { children: React.ReactElement }) => {
  const dashboardURL: any = (document.querySelector('meta[name="dashboard-url"]') as Element).getAttribute('content');

  return (
    <div>
      <nav className="sm:hidden">
        <a href={`${dashboardURL}/dashboard`} className="flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
          <svg className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </a>
      </nav>
      <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
        <a href={`${dashboardURL}/dashboard`} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
          Dashboard
        </a>
        <svg className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {children}
      </nav>
    </div>
  );
}