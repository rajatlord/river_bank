  import hug from "../assets/hug.jpeg";

  import AccountsSection from "./Account_section/AccountSection";
  import Review from "./Review_section/Review";
  import Contact from "./Contact";
import Navbar from "./Navbar";

  function Home() {
    return (
      <>
        <h1 className="md:text-3xl flex justify-center mt-2 font-bold " id="home">
          <span>Welcome to, </span>
          <span className="text-blue-600">🏛 River Bank</span>
        </h1>
        <Navbar />
        <section
          
          className="flex flex-col md:flex-row gap-6 px-4 md:px-16 my-10 items-center"
        >
          <div className="flex flex-col gap-7 p-3">
            <div>
              <h1 className="text-5xl tracking-tighter mt-[] ">
                Modern <span className="text-blue-400">Banking.</span>
                <br /> Lasting{" "}
                <span className="text-red-400">Relationships.</span>
                <p className="mt-0 ">________</p>
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600 text-2xl ">
                From cultivating relationships, to thoughtful client services, to
                offering advanced products and services, we’re driven by one
                thing: you.
              </p>
              <div>
                <button className="px-4 py-2  rounded-xl bg-blue-500 cursor-pointer text-white">
                  Log in / sign up
                </button>
                <p className="mt-0">And start with your saving account</p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full">
            <img
              src={hug}
              alt="hugging people"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </section>
        <AccountsSection id="service" />
        <Review id="review" />
        <Contact id="contactus" />
        <footer></footer>
      </>
    );
  }

  export default Home;
