import React from "react";
import Image from "next/image";
import { blogData } from "@/config/data";
import GetAllPostData from "@/lib/GetAllPostData";
import SectionLayout from "@/components/shared/SectionLayout";
import MotionEffect from "@/components/motion/MotionEffect";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import HeroSection from "@/components/blog/HeroSection";
import ScondayButton from "@/components/shared/ScondayButton";

const page = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <HeroSection />
      <SectionLayout bg="bg-white">
        <MotionEffect effect="fade-right" duration="2000">
          <h2 className="mb-4 text-3xl font-bold tracking-normal text-left text-[#1B2639]">
            Recent Blog Post
          </h2>
        </MotionEffect>
        <MotionEffect effect="fade-right" duration="2000">
          <hr className="w-full h-[1px] mx-auto my-8 bg-[#1B2639] border-0 rounded md:my-5" />
        </MotionEffect>
        <div className="grid gap-0 mb-10 md:gap-12 gird-col-1 sm:grid-cols-3">
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no === 0)
            ?.map((blogs, index) => (
              <div className="col-span-2 md:col-span-1">
                <Link href={`/blog/${blogs?.slug}`}>
                  <div>
                    <MotionEffect effect="fade-right" duration="2000">
                      <Image
                        width={1800}
                        height={300}
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        className="bg-center bg-cover"
                      />

                      <p className="text-[1rem] text-black text-left italic mt-2">
                        {postDate(blogs?.createdAt)}
                      </p>
                      <h2 className="text-2xl tracking-normal font-bold text-[#1B2639] text-left mb-2 ">
                        {blogs?.title}
                      </h2>
                      <div className="font-normal text-[1rem] text-black mb-8 line-clamp-6">
                        {parse(blogs?.body)}
                      </div>
                      <div className="flex justify-center md:justify-start">
                        <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Read More
                        </button>
                        {/* <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Research
                        </button> */}
                      </div>
                    </MotionEffect>
                  </div>
                </Link>
              </div>
            ))}

          <div className="col-span-2 h-[100%] md:h-[700px] overflow-y-scroll overflow-x-hidden ">
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true)
              ?.map((blogs, index) => (
                <MotionEffect effect="fade-left" duration="2000">
                  <Link
                    className="flex items-center gap-6 mb-8"
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="bg-center bg-cover"
                    />
                    <div>
                      <p className=" text-[1rem] text-black text-left italic mt-2">
                        {postDate(blogs?.createdAt)}
                      </p>
                      <h2 className="text-xl tracking-normal font-bold text-[#1B2639] mb-2">
                        {blogs?.title}
                      </h2>
                      <div className="font-normal text-[1rem] text-black mb-4 sm:line-clamp-1 line-clamp-1">
                        {parse(blogs?.body)}
                      </div>
                      <div className="flex justify-center md:justify-start">
                        <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Read More
                        </button>
                        {/* <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Research
                        </button> */}
                      </div>
                    </div>
                  </Link>
                </MotionEffect>
              ))}
          </div>
        </div>
        <MotionEffect effect="fade-right" duration="2000">
          <hr className="w-full h-[1px] mx-auto my-2 bg-[#1B2639] border-0 rounded md:my-5" />
        </MotionEffect>
        {/* <div className="grid items-start justify-between grid-cols-1 gap-16 mt-16 lg:grid-cols-2"> */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 mt-10 mb-10">
          <div className="flex-1">
            <MotionEffect effect="fade-right" duration="2000">
              <h2 className="mb-4 text-4xl font-bold tracking-normal text-slate-900 text-center md:text-left">
                Create a beautiful event platform <br /> services
              </h2>
              <div className="mt-8">
                <p className="font-normal text-[1rem] text-black mb-8 text-center md:text-left">
                  Demo Digital Xperience Group (DXG), a pioneering division of
                  WLJ Consulting, is a premier partner in transforming events
                  into unforgettable experiences. With our roots firmly planted
                  in the event hospitality industry. We pride ourselves on
                  elevating the digital and production quality of in-person,
                  virtual, and hybrid events. Demo Digital Xperience Group
                  (DXG), a pioneering division of WLJ Consulting, is a premier
                  partner in transforming events Consulting, is a premier
                  partner in transforming events into unforgettable
                  experiences.is a premier partner in transforming events into
                  unforgettable experiences. With our roots firmly planted in
                  the event hospitality industry. We pride ourselves on
                  elevating the digital and production quality of in-person,
                  virtual, and hybrid events. Demo Digital Xperience Group
                  (DXG), a pioneering division of WLJ Consulting, is a premier
                  partner in transforming event into unforgettable experiences.
                  With our roots firmly planted in the event hospitality
                  industry. We pride ourselves on .
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <ScondayButton
                  title={"Read More"}
                  link={""}
                  style={"bg-[#1B2639] text-white"}
                  radius={"sm"}
                />
                {/* <button
                  type="button"
                  class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                >
                  Research
                </button> */}
              </div>
            </MotionEffect>
          </div>

          <div className="flex-1">
            <MotionEffect effect="fade-left" duration="2000">
              <Image
                width={1000}
                height={500}
                src={"/assets/blogs/live.svg"}
                alt="about img"
                className="bg-cover"
              />
            </MotionEffect>
          </div>
        </div>
        <MotionEffect effect="fade-right" duration="2000">
          <hr className="w-full h-[1px] mx-auto my-2 bg-[#1B2639] border-0 rounded md:my-5" />
        </MotionEffect>

        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-3">
          {blogData.others.map((item, index) => (
            <MotionEffect effect="fade-up" duration="2000">
              <div className="" key={index}>
                <Image
                  width={500}
                  height={300}
                  src={item.url}
                  alt="about img"
                  className=""
                />
                <h2 className="text-2xl tracking-normal font-bold text-[#1B2639] mb-2 mt-2 text-center md:text-left">
                  {item.title}
                </h2>
                <p className="font-normal text-[1rem] text-black mb-8 text-center md:text-left line-clamp-6">
                  {item.dec}
                </p>
                <div className="flex justify-center md:justify-start">
                  {/* <button
                    type="button"
                    class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                  >
                    Read More
                  </button> */}
                  <ScondayButton
                    title={"Read More"}
                    link={""}
                    style={"bg-[#1B2639] text-white"}
                    radius={"sm"}
                  />
                  {/* <button
                    type="button"
                    class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                  >
                    Research
                  </button> */}
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
