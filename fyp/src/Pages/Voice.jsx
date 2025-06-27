import React from "react";

const MicrophoneAccessForm = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#111418] overflow-x-hidden"
      style={{
        fontFamily: "Inter, Noto Sans, sans-serif",
        backgroundImage:
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')"
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#293038] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">SoundByte</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium" href="#">Home</a>
              <a className="text-sm font-medium" href="#">Explore</a>
              <a className="text-sm font-medium" href="#">Create</a>
            </div>
            <button className="flex h-10 items-center justify-center rounded-full bg-[#293038] px-2.5 text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </button>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvAo3vojOwb0Fvym_Itjh5E_QM_0nL6C_VfVAkoY0RiDpND-oF9EEv8Jxje4rC1OZQP2pamQK5VCltNLsLPVYJj8_mkzyM-vu_Bw59WHZHrUipgctSMgEX3-n8CaFM04iHMJDNqffuZK1eIIJxDZ0GY5H8cyyuA4n3lr3B0PCFM7yvlI2Upz_Plj64vo-utXhw_SIW_XXf0JJTwWiDLLcx6s3Stdad8-ocETMGDpywerkn1yU1_I9MiJUG-6lzH-aTiH4DN-oL4NT0')"
              }}
            ></div>
          </div>
        </header>

        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] w-full">
            <h2 className="text-white text-[28px] font-bold px-4 pb-3 pt-5">Microphone Access Required</h2>
            <p className="text-white text-base px-4 pb-3 pt-1">
              To use voice commands, please ensure a microphone is connected and that the application has permission to access it. If you prefer, you can use the manual form below.
            </p>

            {['Name', 'Email'].map((label) => (
              <div key={label} className="flex max-w-[480px] gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">{label}</p>
                  <div className="flex w-full items-stretch rounded-xl">
                    <input
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="form-input w-full rounded-xl border border-[#3c4753] bg-[#1c2126] text-white h-14 p-[15px] text-base focus:outline-none"
                    />
                    <div className="flex items-center justify-center border border-[#3c4753] bg-[#1c2126] pr-[15px] rounded-r-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            ))}

            <div className="flex max-w-[480px] gap-4 px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium pb-2">Role</p>
                <select className="form-input w-full rounded-xl border border-[#3c4753] bg-[#1c2126] text-white h-14 p-[15px] text-base">
                  <option value="">Select your role</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>

            <div className="flex max-w-[480px] gap-4 px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium pb-2">Feedback</p>
                <textarea
                  placeholder="Enter your feedback"
                  className="form-input w-full rounded-xl border border-[#3c4753] bg-[#1c2126] text-white min-h-36 p-[15px] text-base"
                ></textarea>
              </label>
            </div>

            <div className="px-4 py-3">
              <label className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-[#3c4753] text-[#197ce5] focus:ring-0"
                />
                <p className="text-white text-base">I agree to the terms and conditions</p>
              </label>
            </div>

            <div className="flex justify-end px-4 py-3">
              <button className="h-10 px-4 rounded-full bg-[#197ce5] text-white text-sm font-bold">
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MicrophoneAccessForm;
