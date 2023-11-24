"use client";
import React, { useState } from "react";
import Box from "../Box/Box";
import {
  Mention,
  MentionContainer,
  FullLineBox,
  DashBoxes,
  MentionDashBoxes,
  Title,
  HeadingItalic,
  Heading,
  Boxes,
  ContentOutline,
  Layout,
} from "./function";

const page1 = () => {
  return (
    <div className="h-[940px] border border-black w-full ps-4 pt-1">
      {/* ------------------top picture section------------------------------- */}
      <>
        {/* Date */}
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <div className="block">
              <div className="flex space-x-6 ">
                <ContentOutline>
                  <div className="flex">
                    <h2>Date</h2>
                    <div className="flex items-center space-x-1">
                      <p className="me-4 ms-2">:</p>
                      {[2, 2, 4].map((quantity, i) => (
                        <>
                          <Box b={quantity} key={i} />
                          {i !== [2, 2, 4].length - 1 && (
                            <p className="text-center">-</p>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </ContentOutline>
                <span className="text-[10px] font-medium">(DD-MM-YYYY)</span>
              </div>
            </div>
            {/* *********** */}
            <Heading index={"I."} text="GENERAL" />
            <ContentOutline>
              <Title>Duration of Stay in Indonesia</Title>
              <Boxes>
                <p className="">:</p>
                <Mention component={<Box b={2} />} mention="Day(s)" />
                <div className="pr-2"></div>
                <Mention component={<Box b={2} />} mention="Month(s)" />
                <div className="pr-2"></div>
                <Mention component={<Box b={2} />} mention="Year(s)" />
              </Boxes>
            </ContentOutline>

            <MentionContainer
              space
              text="Type of Visa"
              item={["Transit", "Single Visit"]}
            />
            <MentionContainer 
             space 
             item={["Multiple Visit", "Limited Stay"]} 
            />
          </div>
          {/* image */}
          <div className="w-28 h-auto me-[14px]">
            <div className="p-4 h-32 border border-gray-800"></div>
          </div>
        </div>
      </>
      {/* **********************pic section end************************************ */}

      {/* --------For Transit Visa---------------- */}
      <>
        <HeadingItalic text="For Transit Visa" />
        <FullLineBox text="Point of Departure" />
        {/*  */}
        <FullLineBox text="Place of Departure" />
        {/*  */}
        <FullLineBox text="Flight/Vessel Name" />
      </>
      {/* --------For Transit Visa End---------------- */}

      {/* --------For Visit Visa---------------- */}
      <>
        <HeadingItalic text="For Visit Visa" />
        <MentionContainer
          space
          text="Purpose of Visit"
          item={["Tourism", "Convention", "Family Visit", "Sports"]}
        />
        <MentionContainer
          space
          item={["Study", "Arts", "Commercial", "Others"]}
        />
        <FullLineBox text="Flight /vessel's name" />
        <FullLineBox text="Date & port of entry" />
        <FullLineBox text="Place to visit" />
      </>
      {/* --------** End For Visit Visa---------------- */}
      {/* --------For Limited Stay Visa---------------- */}
      <>
        <HeadingItalic text="For Limited Stay Visa" />
        <MentionContainer
          space
          text="Purpose of Limited Stay"
          item={["Work", "Join Family", "Social", "Others"]}
        />
        <FullLineBox text="Address in Indonesia" />
        <FullLineBox text="City" />
        <FullLineBox text="Province" />
        <ContentOutline>
          <Title>Phone Number</Title>
          <Boxes wf>
            <p>:</p>
            <Box b={3} />
            <p>-</p>
            <Box b={3} />
            <p>-</p>
            <Box b={9} />
          </Boxes>
        </ContentOutline>
        <FullLineBox text="Port of Entry into Indonesia" />
        <MentionDashBoxes item={[2, 2, 4]} title="Date of Entry" />
      </>
      {/* --------** End For Limited Stay Visa ---------------- */}
      {/* ************Heading PERSONAL DATA*********************** */}
      <>
        <Heading index={"II."} text="PERSONAL DATA" />
        <FullLineBox text="Surname" />
        <FullLineBox text="Given Name" />
        <FullLineBox text="e-mail Address" />
        <MentionContainer text="Sex" item={["Male", "Female"]} space />
        {/*  */}
        <MentionContainer
          text="Marital Status"
          item={["Married", "Single"]}
          space
        />
        <FullLineBox text="Place of Birth" />
        <MentionDashBoxes item={[2, 2, 4]} title="Date of Birth" />
        <FullLineBox text="Nationality" />
        <FullLineBox text="Home address in Pakistan" />
        <FullLineBox text="City" />
        <FullLineBox text="Province/State" />
        <ContentOutline>
          <Title>Mobile Phone Number</Title>
          <Boxes>
            <p>:</p>
            <Box b={12} />
          </Boxes>
        </ContentOutline>
        <MentionContainer
          text="Occupation/Position"
          item={[
            "Professional",
            "Government",
            "Sales",
            "Student",
            "Housewife",
            "Other",
          ]}
          space
        />
        <div className="w-full mb-1">
          <ContentOutline>
            <Title>Type of Business</Title>
            <Boxes wf>
              <p>:</p>
              <input type="text" className="w-[420px] border-b border-black" />
            </Boxes>
          </ContentOutline>
        </div>
        <FullLineBox text="Name of Company" />
        <div className="flex text-[8px] space-y-[2px] leading-[10px]">
          <Title>Address in Pakistan</Title>

          <div className="flex flex-col space-y-[2px]">
            <Boxes>
              <p>:</p>
              <Box b={28} />
            </Boxes>
            <Boxes>
              <p>&nbsp;</p>
              <Box b={28} />
            </Boxes>
          </div>
        </div>
        <FullLineBox text="City" />
        <FullLineBox text="Province/State" />
        <DashBoxes item={[2, 2, 8]} title="Phone Number" />
      </>
      {/* ************END Heading PERSONAL DATA*********************** */}
    </div>
  );
};
const Form = () => {
  // %%%%%%%%%%%%%%%%%main function%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return (
    <Layout>
      <div className="w-full flex flex-col relative">
        {page1()}
        <div className="h-[860px] border border-black w-full ps-4">
          {/* ************Heading PASSPORT INFORMATION*********************** */}
          <>
            <Heading index={"III."} text="PASSPORT INFORMATION" />
            <ContentOutline>
              <Title>Passport/Travel Document Number</Title>
              <Boxes>
                <p>:</p>
                <Box b={12} />
              </Boxes>
            </ContentOutline>
            <MentionDashBoxes item={[2, 2, 4]} title="Date of Issue" />
            <MentionDashBoxes item={[2, 2, 4]} title="Date of Expire" />
            <MentionContainer
              text="Type of Passport"
              item={["Personal", "Family"]}
              space
            />
            <div className="mt-1 space-y-1">
              <p className="font-medium text-[8px] leading-[10px] italic">
                Please mention if your husband/wife/children are accompanying
                you and have been entered in your travel document
              </p>
              {/* column boxes */}
              <div className="flex space-x-2">
                <ContentOutline>
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-medium">No.</p>
                    <div className="space-y-1">
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                    </div>
                  </div>
                </ContentOutline>
                <ContentOutline>
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-medium">Relative(s) :</p>
                    <div className="space-y-1">
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                    </div>
                  </div>
                </ContentOutline>
                <ContentOutline>
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-medium">Sex :</p>
                    <div className="space-y-1">
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                      <Box b={1} />
                    </div>
                  </div>
                </ContentOutline>
                <ContentOutline>
                  <div className="ms-2 flex flex-col ">
                    <p className="font-medium">Date of Birth (DD-MM-YYYY):</p>
                    <div className="space-y-1">
                      <DashBoxes item={[2, 2, 4]} notitle />
                      <DashBoxes item={[2, 2, 4]} notitle />
                      <DashBoxes item={[2, 2, 4]} notitle />
                      <DashBoxes item={[2, 2, 4]} notitle />
                    </div>
                  </div>
                </ContentOutline>
                <ContentOutline>
                  <div className="flex flex-col ">
                    <p className="font-medium">Name:</p>
                    <div className="space-y-1">
                      <Box b={21} />
                      <Box b={21} />
                      <Box b={21} />
                      <Box b={21} />
                    </div>
                  </div>
                </ContentOutline>
              </div>
              <div className="italic font-semibold text-[8px] pt-1 space-y-1">
                <p>
                  Relation (s) :&nbsp; &nbsp; 1 : &nbsp; Husband &nbsp; &nbsp; 2
                  : &nbsp; Wife &nbsp; &nbsp; 3 : &nbsp; Child
                </p>
                <p>
                  Sex &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;:&nbsp; &nbsp; F : &nbsp; Female &nbsp; &nbsp; M :
                  &nbsp; Male
                </p>
              </div>
            </div>
          </>
          {/* ************END Heading PASSPORT INFORMATION*********************** */}

          {/* ************ SPONSORSHIP IN INDONESIA*********************** */}
          <>
            <Heading index={"IV."} text="SPONSORSHIP IN INDONESIA" />
            <MentionContainer
              text="Type of Sponsor"
              item={["Individual", "Government", "International Institution"]}
              space
            />
            <MentionContainer item={["Company", "NGO", "Others"]} space />
            <FullLineBox text="Name of Person/Institution" />
            <FullLineBox text="Address" />
            <FullLineBox text="City" />
            <FullLineBox text="Province/State" />
            <DashBoxes wf item={[3, 3, 9]} title="Phone Number" />
          </>
          {/* ************END SPONSORSHIP IN INDONESIA*********************** */}

          {/* ************Heading MISCELLANEOUS*********************** */}
          <>
            <Heading index={"V."} text="MISCELLANEOUS" />
            <MentionContainer
              space
              tspace
              text="Have you ever been to Indonesia before ?"
              item={["yes", "No"]}
            />
            <MentionContainer
              space
              tspace
              text="Are you in possesion of any countries travel documents"
              item={["yes", "No"]}
            />
            <MentionContainer
              space
              tspace
              text="Do you have previous visa to enter Indonesia ? "
              item={["yes", "No"]}
            />
            <MentionContainer
              space
              tspace
              text="Have your visa application been denied before? "
              item={["yes", "No"]}
            />
            <MentionContainer
              space
              tspace
              text="Have you been forced to leave Indonesia?"
              item={["yes", "No"]}
            />
            <MentionContainer
              space
              tspace
              text="Have you ever been committed a crime or any Offence?"
              item={["yes", "No"]}
            />

            <FullLineBox text="Return/Through Ticket/Airline Company " />
            <FullLineBox text="Place of Issue " />

            <MentionDashBoxes title="Date of Issue" item={[2, 2, 4]} />
            <MentionDashBoxes title="Date of Expiry" item={[2, 2, 4]} />
          </>
          {/* ************END Heading MISCELLANEOUS*********************** */}

          {/* ******Signature lines************ */}
          <>
            <div className="pt-1 space-y-2">
              <p className="font-medium text-[8px] leading-[10px]">
                I, hereby declare that the statements given above are true.
              </p>
              <h1 className="font-semibold text-[14px] ">
                I realize that even though I posses a valid visa to Indonesia,
                permission for entry remains at the discretion of the
                immigration authoritis in Indonesia.
              </h1>
              {/* Signature div */}
              <div>
                <span className="text-[8px] p-0 m-0 font-medium">
                  Applicant`s signature
                </span>
                <div className="w-1 h-1 border-[1.4px] border-black px-28 py-7"></div>
              </div>
              <div className="flex space-x-4">
                <span>.........................</span>
                <div className="flex items-center space-x-1 ps-10">
                  <p className="me-4 ms-2"></p>
                  {[2, 2, 4].map((quantity, i) => (
                    <>
                      <Box b={quantity} key={i} />
                      {i !== [2, 2, 4].length - 1 && (
                        <p className="text-center">-</p>
                      )}
                    </>
                  ))}
                </div>
                <span className="text-[12px] font-medium">(DD-MM-YYYY)</span>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-[8px] leading-[10px]">
                  * To be completed in duplicate with two photographs.
                </p>
                <p className="font-medium text-[8px] leading-[10px]">
                  * Passport must be valid for at least eighteen months.
                </p>
              </div>
            </div>
          </>
        </div>
        {/* ******End Signature lines************ */}
        {/* ---------------FOR OFFICE USE ONLY-------------------------------- */}

        <div className=" h-[90px] border border-black w-full ps-4 mt-[1px]">
          <>
            <div className="pt-2  ">
              <div className="flex justify-between ">
                <div className="space-y-2">
                  <h1 className="text-[12px] font-bold underline underline-offset-4">
                    FOR OFFICE USE ONLY
                  </h1>
                  <div className="space-y-[2px]">
                    <div className="flex space-x-6 ">
                      <ContentOutline>
                        <div className="flex">
                          <h2 className="w-40">Index Visa</h2>
                          <div className="flex items-center space-x-1">
                            <p className="me-3 ">:</p>
                            <Box b={4} />
                          </div>
                        </div>
                      </ContentOutline>
                    </div>
                    <div className="flex space-x-6 ">
                      <ContentOutline>
                        <div className="flex">
                          <h2 className="w-40">
                            Lamanya Izin Tinggal di Indonesia
                          </h2>
                          <div className="flex items-center space-x-1">
                            <p className="me-3 ">:</p>
                            <Box b={4} />
                            <span className="font-medium"> Hari/Bulan</span>
                          </div>
                        </div>
                      </ContentOutline>
                    </div>
                    <div className="flex space-x-6 ">
                      <ContentOutline>
                        <div className="flex">
                          <h2 className="w-40">
                            Lamanya Izin Tinggal di Indonesia
                          </h2>
                          <div className="flex items-center space-x-1">
                            <p className="me-3 ">:</p>
                          </div>
                        </div>
                      </ContentOutline>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-medium w-[150px] flex flex-col items-center ">
                  <p>Karachi, ............................</p>
                  <p>A.N Kepala Perwakilan RI</p>
                  ..........................................
                </div>
              </div>
            </div>
          </>
        </div>
        {/* ---------------End FOR OFFICE USE ONLY-------------------------------- */}
      </div>
    </Layout>
  );
};

export default Form;

//  <FullLineBox text='State/Country' />
//         <DashBoxes wf
//           item={[3, 3, 9]}
//           title='Mobile Number'
//         />
//         <DashBoxes wf item={[3, 3, 9]} title='Phone Number' />

//       <MentionContainer
//           text="Type of Visa"
//           item={["Diplomatic", "Service", "UNLP", "Ordinary"]}
//           space
//         />
