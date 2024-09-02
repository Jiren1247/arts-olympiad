import { H2m } from "../common/texts/H2m";
import {VisionCard} from "./VisionCard";
import Image from "next/image";

export const VisionCards = () => {
  return (
    <section
      aria-label="Our Vision and Our Goal"
      className="relative flex flex-col px-8 md:px-12 lg:px-16 xl:px-20 mt-16 md:mt-22 lg:mt-24 xl:mt-28 2xl:mt-30 max-w-screen-2xl m-auto">
      <article className=" text-center md:flex flex-col py-10" >
        <H2m className="font-medium font-montserrat text-3xl hidden lg:block" >General Benefits</H2m>
        <H2m className="font-medium font-montserrat text-3xl lg:hidden" >Participate for Free!</H2m>
      </article>

      <div className="flex flex-nowrap flex-col lg:space-x-6 lg:flex-row justify-between">
        <VisionCard
          icon="/sponsor/PinkLogo.png"
          heading="Attraction for Growth"
          description="Win over young hearts and minds for business and audience growth."
          color="#F9E4EE"

          texture={
            <div className=" w-full absolute bottom-0 left-0 select-none pointer-events-none">
              <Image src="/svgs/blobs/mission-blob.svg" className="w-[30%]" alt="" width={0} height={0}/>
              <div className="flex flex-row">
                <Image src="/svgs/blobs/mission-blob.svg" className="w-[30%]" alt="" width={0} height={0}/>
                <Image src="/svgs/blobs/mission-blob.svg" className="w-[30%]" alt="" width={0} height={0}/>
              </div>
            </div>
          }
        />
        <VisionCard
          icon="/sponsor/GreenLogo.png"
          heading="Employee Engagement"
          description="Your employees can vote and their children can upload their art."
          color="#E4F9EA"
          texture={
            <Image src="/svgs/blobs/beginning-blob.svg" className="w-[60%] absolute bottom-0 left-0 opacity-40 select-none pointer-events-none" alt="" width={0} height={0}/>
          }
        />
        <VisionCard
          icon="/sponsor/BlueLogo.png"
          heading="Viral Expansion"
          description="Scale up your global emotional branding strategy with the #MyFavoriteSport campaign."

          color="#CCEBFF"
          texture={
            <Image src="/svgs/blobs/blue-scar-blob.svg" className="w-[80%] absolute bottom-0 left-0 select-none pointer-events-none" alt="" width={0} height={0}/>
          }
        />
        <VisionCard
          icon="/sponsor/YellowLogo.png"
          heading="Promotion of Excellence"
          description="Foster the Olympic values of excellence, respect, and friendship in young people and employees."
          color="#FFF5AD"
          texture={
            <Image src="/sponsor/YellowTexture.png" className="w-[50%] absolute bottom-0 left-0 select-none pointer-events-none" alt="" width={0} height={0}/>
          }
        />
      </div>

    </section>
  );
};