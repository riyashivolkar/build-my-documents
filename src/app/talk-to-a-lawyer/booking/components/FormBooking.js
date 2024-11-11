"use client";
import React, { useState, useEffect } from "react";
import { timeSlots, icons } from "./dataBooking";
import { useSearchParams, useRouter } from "next/navigation"; // Use next/navigation
import { db } from "../../../../../firebase/firebaseConfig"; // Correct import
import { doc, updateDoc } from "firebase/firestore";

const FormBooking = ({ onTimeSelected }) => {
  const searchParams = useSearchParams(); // Get search parameters
  const [docId, setDocId] = useState(null); // State for docId
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentHour, setCurrentHour] = useState(null);
  const router = useRouter(); // Use next/navigation router
  const [phone, setPhone] = useState(null); // State for phone number

  useEffect(() => {
    const now = new Date();
    setCurrentHour(now.getHours());

    // Get docId and phone from the query parameters
    const docIdFromUrl = searchParams.get("docId");
    const phoneFromUrl = searchParams.get("phone");

    if (docIdFromUrl) setDocId(docIdFromUrl); // Set the docId state from URL
    if (phoneFromUrl) setPhone(phoneFromUrl); // Set the phone state from URL
  }, [searchParams]); // Run this effect whenever searchParams change

  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  const getSpecificDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 2); // Move 2 days ahead (day after tomorrow)
    return formatDate(date); // Format and return the date
  };

  const getButtonClass = (date) => {
    return selectedDate === date
      ? "flex flex-col px-2 sm:text-2xl py-2 sm:py-4 sm:px-20 border-b-4 border-orange-400"
      : "flex flex-col px-2 py-2 sm:text-2xl sm:py-4 sm:px-20";
  };

  const getFormattedDate = () => {
    const today = new Date();
    if (selectedDate === "Tomorrow") {
      today.setDate(today.getDate() + 1);
    } else if (selectedDate !== "Today") {
      // Parse the specific date if it’s set as a specific date
      today.setDate(today.getDate() + 2);
    }
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };
  const isTimeDisabled = (time) => {
    if (selectedDate !== "Today") {
      return false;
    }

    const [timeString, period] = time.split(" ");
    const [slotHour, slotMinute] = timeString.split(":").map(Number);

    let slotHour24 = slotHour;
    if (period === "PM" && slotHour !== 12) {
      slotHour24 += 12;
    } else if (period === "AM" && slotHour === 12) {
      slotHour24 = 0;
    }

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    if (
      slotHour24 < currentHour ||
      (slotHour24 === currentHour && slotMinute < currentMinute)
    ) {
      return true;
    }

    return false;
  };

  const handleTimeSelection = (selectedSlot) => {
    if (!isTimeDisabled(selectedSlot.time)) {
      setSelectedTime(selectedSlot); // Update state with the selected slot
      console.log("Selected Slot for Time:", selectedSlot); // Debugging line
    } else {
      alert("Please select a valid time slot.");
    }
  };

  const handleTimeSlotSelection = async () => {
    if (!selectedTime) {
      alert("Please select a valid time slot.");
      return;
    }

    try {
      if (docId) {
        // Get the formatted date for the selected day
        const dateForSlot = getFormattedDate();

        await updateDoc(doc(db, "talktolawyer", docId), {
          selectedDate: dateForSlot, // Save the selected date
          selectedSlot: selectedTime.time, // Save the selected time slot
        });
        console.log("Time slot and date updated successfully!");

        // Add current data as query params to pass to the next page
        router.push(
          `/talk-to-a-lawyer/booking/step-2?docId=${docId}&selectedSlot=${selectedTime.time}&selectedDate=${dateForSlot}&phone=${phone}`
        );
      } else {
        console.error("No document ID found");
      }
    } catch (error) {
      console.error("Error updating time slot:", error);
    }
  };

  return (
    <div className="container p-6 mx-auto bg-white">
      <div className="flex justify-around mb-4 border-b-4 border-gray-100">
        <button
          onClick={() => handleDateSelection("Today")}
          className={`${getButtonClass("Today")}`}
        >
          Today
          <span className="text-green-500 sm:text-xl">Slots available</span>
        </button>
        <button
          onClick={() => handleDateSelection("Tomorrow")}
          className={getButtonClass("Tomorrow")}
        >
          Tomorrow
          <span className="text-green-500 sm:text-xl">Slots available</span>
        </button>
        <button
          onClick={() => handleDateSelection(getSpecificDate())}
          className={getButtonClass(getSpecificDate())}
        >
          {getSpecificDate()}
          <span className="text-green-500 sm:text-xl">Slots available</span>
        </button>
      </div>

      {Object.entries(timeSlots).map(([slot, times]) => (
        <div key={slot} className="py-5 mb-4">
          <div className="flex items-center mb-2">
            {icons[slot]}
            <h3 className="ml-2 text-lg font-semibold">{slot}</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {times.map((slotObj) => (
              <button
                key={slotObj.id}
                onClick={() => handleTimeSelection(slotObj)}
                className={`px-4 py-2 text-sm font-bold border-2 rounded-md ${
                  isTimeDisabled(slotObj.time)
                    ? "bg-white text-gray-300 font-bold cursor-not-allowed"
                    : selectedTime?.id === slotObj.id
                    ? "bg-orange-500 text-white"
                    : ""
                }`}
                disabled={isTimeDisabled(slotObj.time)}
              >
                {slotObj.time}
              </button>
            ))}
          </div>
          <div className="border-gray-300 "></div>
        </div>
      ))}

      <div className="flex justify-end w-full px-12 py-6 text-2xl border border-gray-100">
        <button
          onClick={handleTimeSlotSelection} // Call the function when 'Next' is clicked
          className={`px-4 py-2 rounded-lg ${
            selectedTime
              ? "bg-orange-500 text-white"
              : "bg-gray-100 font-semibold text-gray-300 cursor-not-allowed"
          }`}
          disabled={!selectedTime} // Disable if no time is selected
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormBooking;
