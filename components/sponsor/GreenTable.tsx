"use client";
import React, { useState } from "react";
import { H2m } from "../common/texts/H2m";
import GreenTableRow from "./GreenTableRow";
import Image from "next/image";
import GreenTableCard from "./GreenTableCard";
import "../../src/styles/GreenTable.css";
import check from "../../public/sponsor/check.png";
import { formatDate } from "../../mock/dates";

function GreenTable() {
  // const cards = [
  //   {id:"item-1", heading:"Gold Sponsor", money:"$300,000"},
  //   {id:"item-2", heading:"Silver Sponsor", money:"$200,000"},
  //   {id:"item-3", heading:"Bronze Sponsor", money:"$100,000"}
  // ];

  const drops = [
    {description:"Logo placement on this website"},
    {description:"Appreciation in press releases"},
    {description:"Media exposure through sports and arts publications"},
    {description:"New exciting content to social media channels"},
    {description:`Announce winners at the National Press Club on ${formatDate("winnerAnnounced", "MMMM do")}`},
    {description:`The gold, silver and bronze visit the corporate HQ in late ${formatDate("winnerAnnounced", "MMMM")} to collaboratively paint a mural and present it.`}
  ];

  // const [active, setActive] = useState(0);
  
  const [checkedOption, setCheckedOption] = useState(3);
  const [forceRender, setForceRender] = useState(0);
  const handleCheck = (option: number) => {
    if (checkedOption === option) {
      setForceRender(prev => prev + 1);
      return;
    }
    setCheckedOption(option);
  };

  let slideIndex = 1;
  showSlides(slideIndex);


  function showSlides(n: number) {
    let i;
    if(typeof window === "undefined") return;
    const slides = document.getElementsByClassName("card");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].className += "scale-0.8";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideIndex-1].setAttribute('style', 'display: block');

    // if(slideIndex === 1) {
    //     slides[slideIndex-1].className += " scale-125 translate-x-64";
    //     slides[slideIndex].className += " translate-x-64";
    //     slides[slideIndex + 1].className += " -translate-x-[128x]";
    // } else if(slideIndex === 2) {
    //     slides[slideIndex-1].className += " scale-125";
    //     slides[slideIndex-2].className.replace(" scale-125", " scale-100");
    //     slides[slideIndex].className.replace(" scale-125"," scale-100");
    // } else {
    //     slides[slideIndex-1].className += " scale-125 -translate-x-64";
    //     slides[slideIndex-2].className += " -translate-x-64";
    //     slides[slideIndex - 3].className += " translate-x-[128px]";
    // }
    if (slideIndex > 0 && slideIndex <= dots.length) {
      dots[slideIndex - 1].className += " active";
    }
  }

  return (
    <>
      <div className="relative flex flex-col mx-auto justify-center items-center hidden lg:block z-40 py-36 pb-12 lg:px-12 2xl:mt-56 xl:px-24">
        <H2m className="relative font-montserrat font-medium text-center pb-12">Specific Benefits</H2m>
        <table className="relative mx-auto py-12 bg-light-green text-center space-x-12 border-2 rounded-lg">
          <tbody>               
            <tr className="border-2">
              <td></td>
              <td className="px-6 xl:px-12 py-4 border-2"><div className="flex flex-col"><p className="whitespace-nowrap">Gold Sponsor</p><p>$100,000</p></div></td>
              <td className="px-6 xl:px-12 py-4 border-2"><div className="flex flex-col"><p className="whitespace-nowrap">Silver Sponsor</p><p>$50,000</p></div></td>
              <td className="px-6 xl:px-12 py-4 border-2"><div className="flex flex-col"><p className="whitespace-nowrap">Bronze Sponsor</p><p>$25,000</p></div></td>
            </tr>
            <GreenTableRow td="Logo placement on this website" td1="true" td2="true"/>
            <GreenTableRow td="Appreciation in press releases" td1="true" td2="true"/>
            <GreenTableRow td="Media exposure through sports and arts publications" td1="true" td2="true"/>
            <GreenTableRow td="New exciting content for your social media channels" td1="true" td2="true"/>
            <GreenTableRow td={`Announce winners at the National Press Club on  ${formatDate("winnerAnnounced", "MMMM do")}`} td1="true" td2=""/>
            <GreenTableRow td={`The gold, silver and bronze visit the corporate HQ in late ${formatDate("winnerAnnounced", "MMMM")} to collaboratively paint a mural and present it.`} td1="" td2=""/>
          </tbody>            
        </table>
      </div>
      {/* mobile */}
      <div data-force-render={forceRender} className="realtive z-20 pt-8 pb-44 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
        <section className="relative lg:hidden">
          <H2m className="relative font-montserrat font-medium pb-12 text-center">Specific Benefits</H2m>
          <div className="max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto relative">
            <input id="article-01" type="checkbox" name="slider" className="sr-only peer/01" checked={checkedOption === 1} onChange={() => handleCheck(1)}/>
            <input id="article-02" type="checkbox" name="slider" className="sr-only peer/02" checked={checkedOption === 2} onChange={() => handleCheck(2)}/>
            <input id="article-03" type="checkbox" name="slider" className="sr-only peer/03" checked={checkedOption === 3} onChange={() => handleCheck(3)}/>

            <div className="
              absolute inset-0 scale-[67%] z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]                    
              peer-checked/01:relative
              peer-checked/01:z-30
              peer-checked/01:translate-x-0
              peer-checked/01:scale-100
              peer-checked/01:[&>label]:pointer-events-none
              peer-checked/02:-translate-x-40
              peer-checked/02:scale-[67%]
              peer-checked/02:z-10
              peer-checked/03:translate-x-40
              peer-checked/03:z-10
            ">
              <label className="absolute inset-0" htmlFor="article-01"><span className="sr-only"></span></label>
              <GreenTableCard heading="Gold Sponsor" money="$300,000"/>
            </div>

            <div className="
              absolute inset-0 scale-[67%] z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]                        
              peer-checked/01:translate-x-40
              peer-checked/01:scale-[67%]
              peer-checked/01:z-10
              peer-checked/02:relative
              peer-checked/02:z-30
              peer-checked/02:translate-x-0
              peer-checked/02:scale-100
              peer-checked/02:[&>label]:pointer-events-none
              peer-checked/03:-translate-x-40
              peer-checked/03:scale-[67%]
              peer-checked/03:z-10              
            ">
              <label className="absolute inset-0" htmlFor="article-02"><span className="sr-only"></span></label>
              <GreenTableCard heading="Silver Sponsor" money="$200,000"/>
            </div>

            <div className="
              absolute inset-0 scale-[67%] z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              peer-checked/01:-translate-x-40
              peer-checked/01:z-10
              peer-checked/02:translate-x-40
              peer-checked/02:scale-[67%]
              peer-checked/02:z-10
              peer-checked/03:relative
              peer-checked/03:z-30
              peer-checked/03:translate-x-0
              peer-checked/03:scale-100
              peer-checked/03:[&>label]:pointer-events-none
            ">
              <label className="absolute inset-0" htmlFor="article-03"><span className="sr-only"></span></label>
              <GreenTableCard heading="Bronze Sponsor" money="$100,000"/>
            </div>  
            
          </div>
        </section>


        <div className="relative pt-12 flex flex-col px-4 md:px-6 lg:hidden">
          <div>
            {drops.map((drop, index) => {
              let maxIndex = 0;
              if(checkedOption === 1) {
                maxIndex = 5;
              } else if(checkedOption === 2) {
                maxIndex = 4;
              } else {
                maxIndex = 3;
              }
              if(index <= maxIndex) {
                return (<div key={index}>
                  <div className="h-[0.5px] bg-black "></div>
                  <div className="flex flex-row justify-between py-6 gap-4">
                    <p className="font-normal font-openSans">{drop.description}</p>
                    <Image src={check} alt="" width={16} height={12} className="w-[16px] h-[14px] self-center"></Image>
                  </div>
                </div> );
              }
              return null;
            } 
            )}
          </div>
        </div>
      </div>     
    </>
  );
}

export default GreenTable;
