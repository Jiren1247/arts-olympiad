import Image from "next/image";
// import icafLogo from "../../public/svgs/Icaf-logo.svg";
// import orangeBlob from "../../public/svgs/sponsor-svg/orangeblob.svg";
// import greenBlob from "../../public/svgs/sponsor-svg/greenblob.svg";
import blueBlob from "../../public/sponsor/blue_blob.png";

export const ContactUs = () => {
  return (
    <>
      <div className="relative mb-[500px] xsm:mb-[400px] z-30 mt-20">
        <Image src={blueBlob} alt="" width={1280} height={280} className="absolute z-0 left-0 w-full sm:w-full" />
        <div className="absolute left-1/2 transform -translate-x-1/2 grid grid-cols-1 gap-y-6 lg:mt-20 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 ">
          <h2 className="text-center font-medium text-3xl">Contact Us</h2>
          <h3 className="text-center font-light text-lg leading-loose">We will gladly answer any questions you have.</h3>    
          <a href="https://icaf.org/about/contact-us" className="mx-auto inline-flex w-fit h-fit bg-new-blue rounded text-center py-4 px-6 text-sm cursor-pointer tracking-wide text-neutral-white">Contact us here</a>
        </div>
      </div>
    </>
  );
};