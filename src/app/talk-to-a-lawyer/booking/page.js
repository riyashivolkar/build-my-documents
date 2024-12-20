"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import BookingSteps from "../../components/Talk-to-lawyer/Booking/BookingSteps";
import FormBooking from "@/app/components/Talk-to-lawyer/Booking/FormBooking";

const BookingPage = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDetails({
      email: params.get("email"),
      phone: params.get("phone"),
      city: params.get("city"),
      languages: params.get("languages"),
      category: params.get("category"),
    });
  }, []);

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

        <div className="bg-gray-100">
          <BookingSteps />
        </div>

        <Suspense>
          <FormBooking details={details} />
        </Suspense>
      </div>
    </div>
  );
};

export default BookingPage;
