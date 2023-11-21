import Link from "next/link";



const Footer = () => {
    return (
        <footer className="bg-gray-700 min-h-full">
            <div className="container mx-auto text-white text-center flex flex-col gap-4 pt-2 pb-4 md:pt-10 md:pb-10">
                <div>
                    <h1>Contact Us</h1>
                </div>
                <div className="flex justify-between gap-2 mx-auto">
                    <Link href="https://www.facebook.com/zobayerhossain.arif.35/"><h1>Facebook</h1></Link>
                    <Link href="https://github.com/Zobayer26"><h1>GitHub</h1></Link>
                    <Link href="https://www.linkedin.com/in/md-zobayer-hossain-899921220/"><h1>LinkedIn</h1></Link>
                </div>
                <div>
                    <p>Copyright ©</p>


                    <p>Foody Zone © 2023 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;