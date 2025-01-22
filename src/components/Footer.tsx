import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-1/5 bg-black w-full flex flex-col justify-center text-white items-center p-5 space-y-10">
      <div className="bg-transparent flex gap-5">
        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
          <Image
            src="assets/images/footerImg/mail.svg"
            alt="Gmail"
            width={30}
            height={30}
            className="text-white"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/tibardoe-benjamin">
          <Image
            src="assets/images/footerImg/linkedin.svg"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://github.com/dashboard">
          <Image
            src="assets/images/footerImg/github.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://x.com/Big_Tibardoe">
          <Image
            src="assets/images/footerImg/twitter.svg"
            alt="Twitter"
            width={30}
            height={30}
          />
        </Link>
      </div>

      <p className="font-bold">
        &copy; {currentYear} Benjamin Tibardoe
        <span className="font-normal"> All Rights Reserved</span>
      </p>
    </footer>
  );
}
