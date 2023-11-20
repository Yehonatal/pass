import LogoIcon from "../assets/logo-removebg-preview.png";
const Logo = () => {
    return (
        <div className="w-[15rem] m-auto select-none text-center">
            <img
                className="w-full mb-0"
                src={LogoIcon}
                alt="Logo of the Ethiopian Airlines"
            />
            <h1 className="text-gray-500 -mt-8">
                Thank You For Flying With Us!
            </h1>
        </div>
    );
};

export default Logo;
