import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import SectionLayout from "./shared/SectionLayout";
import { SITECONFIG } from "@/config/siteData";

import { Mulish, Bitter } from "next/font/google";
import Link from "next/link";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export default function GallerySection() {
  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-bold text-4xl mt-4 mb-10 text-center ${bitter.className}`}
      >
        My Photos Gallery
      </h2>
      <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {SITECONFIG?.galleryImageInfo?.map((el, index) => (
          <Link href={`/image-gallery/${el?.id}`}>
            <Card className={`col-span-12 h-[300px] md:col-span-4`}>
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {el?.imageDate}
                </p>
                <h4 className="text-white font-medium text-large">
                  {el?.imageTitle}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={el?.mainImageUrl}
              />
            </Card>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}
