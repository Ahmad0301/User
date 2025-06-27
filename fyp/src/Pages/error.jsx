import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorScreen = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(0); // refreshes the page
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#121416] overflow-x-hidden font-sans">
      <div className="flex flex-col grow h-full">
        <div className="flex justify-center flex-1 px-6 md:px-20 lg:px-40 py-5">
          <div className="flex flex-col w-full max-w-[512px] py-5">
            <h2 className="text-white text-[28px] font-bold text-center px-4 pb-3 pt-5">Oops! Something went wrong</h2>
            <p className="text-white text-base font-normal text-center px-4 pb-3 pt-1">
              We've encountered an issue that needs your attention. Please review the details below to understand the problem and how to resolve it.
            </p>

            <h3 className="text-white text-lg font-bold tracking-tight px-4 pb-2 pt-4">Error Details</h3>

            {[
              {
                icon: (
                  <path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L80,87.09V128a48,48,0,0,0,73.91,40.4l10.88,12A64,64,0,0,1,64,128a8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.59a79.74,79.74,0,0,0,39.62-15.31l26.46,29.1a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V104.69l46.92,51.62A32,32,0,0,1,128,160ZM87.16,38.78A48,48,0,0,1,176,64v60.43a8,8,0,0,1-16,0V64a32,32,0,0,0-59.24-16.81,8,8,0,1,1-13.6-8.41ZM187.64,151.27A63.71,63.71,0,0,0,192,128a8,8,0,0,1,16,0,79.62,79.62,0,0,1-5.46,29.09,8,8,0,1,1-14.9-5.82Z" />
                ),
                title: "Microphone Blocked",
                description: "Please check your browser settings to ensure microphone access is enabled for this site."
              },
              {
                icon: (
                  <path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-52-57.15a60,60,0,0,0-57.41,7.24,8,8,0,1,1-9.42-12.93A75.43,75.43,0,0,1,128,144c1.28,0,2.55,0,3.82.1L104.9,114.49A108,108,0,0,0,61,135.31,8,8,0,0,1,49.73,134,8,8,0,0,1,51,122.77a124.27,124.27,0,0,1,41.71-21.66L69.37,75.4a155.43,155.43,0,0,0-40.29,24A8,8,0,0,1,18.92,87,171.87,171.87,0,0,1,58,62.86L42.08,45.38A8,8,0,1,1,53.92,34.62ZM128,192a12,12,0,1,0,12,12A12,12,0,0,0,128,192ZM237.08,87A172.3,172.3,0,0,0,106,49.4a8,8,0,1,0,2,15.87A158.33,158.33,0,0,1,128,64a156.25,156.25,0,0,1,98.92,35.37A8,8,0,0,0,237.08,87ZM195,135.31a8,8,0,0,0,11.24-1.3,8,8,0,0,0-1.3-11.24,124.25,124.25,0,0,0-51.73-24.2A8,8,0,1,0,150,114.24,108.12,108.12,0,0,1,195,135.31Z" />
                ),
                title: "Network Issue",
                description: "Verify your internet connection and try again. A stable network is required for voice commands."
              },
              {
                icon: <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z" />,
                title: "Unsupported Browser",
                description: "This application may not fully support your current browser. Consider updating or using a different browser."
              },
              {
                icon: <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z" />,
                title: "Unrecognized Voice Command",
                description: "The voice command was not recognized. Please try again with a clearer command or check the list of supported commands."
              },
            ].map((err, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#121416] px-4 min-h-[72px] py-2"
              >
                <div className="flex items-center justify-center rounded-lg bg-[#2c3035] text-white size-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    {err.icon}
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">{err.title}</p>
                  <p className="text-[#a2abb3] text-sm leading-normal line-clamp-2">{err.description}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-center px-4 py-3">
              <button
                onClick={handleRetry}
                className="min-w-[84px] max-w-[480px] h-10 px-4 rounded-full bg-[#b2cbe5] text-[#121416] text-sm font-bold"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
