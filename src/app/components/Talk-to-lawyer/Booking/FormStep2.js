"use client";
import React, { Suspense, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useSearchParams, useRouter } from "next/navigation";
import { db } from "../../../../../firebase/firebaseConfig";

const FormStep2 = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [bookingInfo, setBookingInfo] = useState(null);
  const [phone, setPhone] = useState("");
  const [caseDetails, setCaseDetails] = useState("");
  const docId = searchParams.get("docId");

  useEffect(() => {
    const fetchBookingData = async () => {
      if (docId) {
        try {
          const docRef = doc(db, "talktolawyer", docId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setBookingInfo(data);
            setPhone(data.phone || "");
            setCaseDetails(data.caseDetails || "");
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching booking data:", error);
        }
      }
    };

    fetchBookingData();
  }, [docId]);

  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSave = async () => {
    if (docId) {
      try {
        // Update the document in Firebase
        await updateDoc(doc(db, "talktolawyer", docId), { phone, caseDetails });
        console.log("Phone number and case details updated successfully!");

        // Redirect to the specified URL
        router.push("https://payments.cashfree.com/forms/bmd-talktolawyer");
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of year
    return `${day}-${month}-${year}`;
  };

  if (!bookingInfo) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  return (
    <div className="container p-6 mx-auto bg-white rounded-lg shadow-lg">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-semibold text-gray-800">
          Booking Information
        </h1>
        <p className="text-gray-600">
          Please review and confirm your booking details.
        </p>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="px-4 py-3 border border-gray-300 rounded-md ">
          <label className="block mb-2 text-xl font-semibold text-gray-700 sm:text-2xl">
            Mobile Number
          </label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full py-2 text-lg sm:text-xl focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Enter phone number"
          />
        </div>
        <div className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-md ">
          <label className="block mb-2 text-xl font-semibold text-gray-700 sm:text-2xl">
            Date & Time
          </label>
          <p className="p-3 text-lg rounded-md sm:text-xl">
            {formatDate(bookingInfo.selectedDate)}, {bookingInfo.selectedSlot}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">
          Additional Details
        </label>
        <textarea
          value={caseDetails}
          onChange={(e) => setCaseDetails(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
          placeholder="Describe your problem in a few words..."
          rows="4"
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => router.back()}
          className="text-3xl text-black hover:text-blue-800"
        >
          Back
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FormStep2;
///////ji
