import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
type FileInputProps = {
title: string;
fileUrl: string;
setFileUrl: any;
endpoint: any;
};
export default function FileInput({
title,
fileUrl,
setFileUrl,
endpoint,
}: FileInputProps) {
return (
<Card className="overflow-hidden">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col items-center justify-center">
    <div className="w-full md:w-32 gap-2">
        <Link href={fileUrl} className="flex items-center" download target="_blank">
          <FaFilePdf className="size-12 mr-2 text-red-600" />
          <span className="truncate">{fileUrl}</span>
        </Link>
      <UploadButton
        className="col-span-full"
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
 
          setFileUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  </CardContent>
</Card>
 
);
}
 