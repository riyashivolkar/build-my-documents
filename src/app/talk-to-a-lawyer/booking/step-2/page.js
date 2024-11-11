"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import StepStep2 from "../../../components/Talk-to-lawyer/Booking/StepsStep2";
import FormStep2 from "@/app/components/Talk-to-lawyer/Booking/FormStep2";
import { db } from "../../../../../firebase/firebaseConfig";

const Step2 = () => {
  const searchParams = useSearchParams();
  const [docId, setDocId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const docIdParam = searchParams.get("docId");
    const selectedSlotParam = searchParams.get("selectedSlot");

    if (docIdParam && selectedSlotParam) {
      setDocId(docIdParam);
      setSelectedSlot(selectedSlotParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchClientData = async () => {
      if (docId) {
        const docRef = doc(db, "talktolawyer", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setClientData(docSnap.data());
        } else {
          console.error("No such document!");
        }
      }
    };

    if (docId) {
      fetchClientData();
    }
  }, [docId]);

  const handleUpdateMoreInfo = async (newInfo) => {
    try {
      if (docId) {
        await updateDoc(doc(db, "talktolawyer", docId), {
          moreInfo: newInfo,
        });
        console.log("More info updated successfully!");
      }
    } catch (error) {
      console.error("Error updating more info:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full h-full bg-gray-100 rounded-lg shadow-lg">
        <div className="bg-white ">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={280}
              height={68}
              priority
              className="w-40 h-auto sm:w-80 md:h-auto"
            />
          </Link>
        </div>
        <div className="bg-gray-100 ">
          <StepStep2 />
        </div>
        <Suspense>
          <div className="">
            <FormStep2 />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Step2;
