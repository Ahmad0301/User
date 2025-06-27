import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111418] overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#293038] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">ConnectHub</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <div className="flex gap-9">
              <button onClick={() => navigate('/')} className="text-white text-sm font-medium">Home</button>
              <button onClick={() => navigate('/about')} className="text-white text-sm font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-white text-sm font-medium">Services</button>
              <button onClick={() => navigate('/contact')} className="text-white text-sm font-medium">Contact</button>
            </div>
            <button className="rounded-full bg-[#197ce5] text-white text-sm font-bold h-10 px-4">Get Started</button>
          </div>
        </header>

        <main className="flex justify-center py-5 px-10">
          <div className="flex flex-col max-w-[960px] w-full">
            <section className="p-4">
              <div className="min-w-72 flex flex-col gap-3">
                <p className="text-white text-[32px] font-bold">Contact Us</p>
                <p className="text-[#9daab8] text-sm">We're here to help! Reach out to us with any questions or feedback you may have.</p>
              </div>
            </section>

            {['Name', 'Email'].map((label) => (
              <div key={label} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col flex-1 min-w-40">
                  <p className="text-white text-base font-medium pb-2">{label}</p>
                  <div className="flex w-full items-stretch rounded-xl">
                    <input
                      placeholder={`Your ${label}`}
                      className="form-input w-full flex-1 rounded-l-xl text-white border border-[#3c4753] bg-[#1c2126] h-14 p-[15px] placeholder:text-[#9daab8]"
                    />
                    <div className="text-[#9daab8] flex items-center justify-center border border-[#3c4753] bg-[#1c2126] pr-[15px] rounded-r-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            ))}

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1 min-w-40">
                <p className="text-white text-base font-medium pb-2">Message</p>
                <textarea
                  placeholder="Your Message"
                  className="form-input w-full flex-1 min-h-36 rounded-xl text-white border border-[#3c4753] bg-[#1c2126] p-[15px] placeholder:text-[#9daab8]"
                ></textarea>
              </label>
            </div>

            <div className="flex px-4 py-3">
              <button className="rounded-full bg-[#197ce5] text-white text-sm font-bold h-10 px-4">Submit</button>
            </div>

            <h2 className="text-white text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">Additional Contact Information</h2>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-[#3c4753] py-5">
                <p className="text-[#9daab8] text-sm">Address</p>
                <p className="text-white text-sm">123 Innovation Drive, Tech City, CA 90210</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-[#3c4753] py-5">
                <p className="text-[#9daab8] text-sm">Phone</p>
                <p className="text-white text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-[#3c4753] py-5">
                <p className="text-[#9daab8] text-sm">Email</p>
                <p className="text-white text-sm">support@connecthub.com</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
