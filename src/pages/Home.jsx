import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-transparent mb-12">
        <div className="container space-y-10 xl:space-y-16 z-10">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <img
              src="https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc="
              width="800"
              height="600"
              alt="Hero"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full z-10"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 z-10">
                <h1 className="text-3xl text-left font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#ffd700]">
                  Find Your Perfect Match
                </h1>
                <p className="text-left max-w-[600px] text-[#ffd700] md:text-xl">
                  Discover compatible singles in your area and connect with them
                  through our easy-to-use dating app.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#262626] shadow transition-colors hover:bg-[#ffd700]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-48 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#ffd700] px-3 py-1 text-sm text-[#262626] font-semibold mb-8">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#ffd700] z-10">
                Discover Your Perfect Match
              </h2>
              <p className="max-w-[900px] text-[#d4af37] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-10">
                Our dating app offers a seamless experience to help you find
                your soulmate. Explore our unique features and connect with
                like-minded individuals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#ffd700] rounded-lg p-6 shadow-lg animate-float">
              <div className="flex items-center justify-between z-10">
                <div className="text-[#262626] font-bold text-lg">
                  Personalized Matches
                </div>
                <HeartIcon className="h-6 w-6 text-[#262626]" />
              </div>
              <p className="text-[#262626] mt-2 text-sm">
                Our advanced algorithm analyzes your preferences and interests
                to provide you with personalized match recommendations.
              </p>
            </div>
            <div className="bg-[#ffd700] rounded-lg p-6 shadow-lg animate-float">
              <div className="flex items-center justify-between">
                <div className="text-[#262626] font-bold text-lg">
                  Instant Messaging
                </div>
                <WebcamIcon className="h-6 w-6 text-[#262626]" />
              </div>
              <p className="text-[#262626] mt-2 text-sm">
                Connect with your matches in real-time through our secure and
                intuitive messaging system.
              </p>
            </div>
            <div className="bg-[#ffd700] rounded-lg p-6 shadow-lg animate-float">
              <div className="flex items-center justify-between">
                <div className="text-[#262626] font-bold text-lg">
                  Verified Profiles
                </div>
                <BadgeCheckIcon className="h-6 w-6 text-[#262626]" />
              </div>
              <p className="text-[#262626] mt-2 text-sm">
                Trust that you're connecting with real people by verifying their
                profiles through our secure identity checks.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src="/third.png"
              alt=""
              className=" inline absolute top-[1100px] right-5 -rotate-90 w-1/5 -z-10"
            />
          </div>
        </div>
      </section>
      <footer className="bg-[#ffd700] py-8 px-4 md:px-6 absolute left-0 w-full">
        <div className="container max-w-5xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link to="/" className="flex items-center gap-2" prefetch={false}>
            <HeartIcon className="h-6 w-6 text-[#333]" />
            <span className="text-2xl font-bold text-[#333]">WeMet</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-[#333]">
            <Link to="/" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link to="/" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link to="/" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
          </nav>
          <div className="flex items-center gap-4 text-[#333]">
            <Link to="/" aria-label="Facebook" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link to="/" aria-label="Twitter" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link to="/" aria-label="Instagram" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
      <img
        src="/second.png"
        alt=""
        className=" inline absolute left-0 top-1/3 rotate-180 -z-10 max-w-xl w-2/5"
      />
      <img
        src="/third.png"
        alt=""
        className=" inline absolute right-0 top-0 rotate-180 w-1/5"
      />
    </div>
  );
};

function BadgeCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default Home;
