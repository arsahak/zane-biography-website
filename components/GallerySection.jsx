import React from "react";

import SectionLayout from "./shared/SectionLayout";
import { SITECONFIG } from "@/config/siteData";

import { Mulish, Bitter } from "next/font/google";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export default function GallerySection() {
  return (
    <section id="gallery-me">
      <SectionLayout>
        <h2
          className={`text-stone-950 font-bold text-4xl mt-4 mb-10 text-center ${bitter.className}`}
        >
          My Photos Gallery
        </h2>

        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {SITECONFIG?.galleryImageInfo?.map((el, index) => (
            <Link key={index} href={`/image-gallery/${el?.id}`} className="">
              <Card shadow="sm" isPressable>
                <CardBody className="overflow-visible p-0">
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={el?.title}
                    className="w-full object-cover h-[300px]"
                    src={el?.mainImageUrl}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{el?.imageTitle}</b>
                  <p className="text-default-500">{el?.imageDate}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </SectionLayout>{" "}
    </section>
  );
}
