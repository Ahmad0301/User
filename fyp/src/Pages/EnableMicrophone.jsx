import React from "react";

const MicrophoneAccessPrompt = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#111418] overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Microphone Access Required
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              To use voice commands, we need access to your microphone. Please allow access in the prompt that appears.
            </p>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#197ce5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Allow Microphone Access</span>
              </button>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              If you denied access or your browser blocked it:
            </h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              1. Go to your browser settings. 2. Find the microphone permissions for this site. 3. Enable microphone access. 4. Refresh the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrophoneAccessPrompt;
