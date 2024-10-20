import { useState } from "react";

export function usePayment() {
  const [paymentData, setPaymentData] = useState(null);

  const sendPaymentData = async (payload) => {
    const response = await fetch(
      "https://bmd-dashboardi.vercel.app/api/webhook",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    setPaymentData(data); // Store response data if needed
    console.log("Response from API:", data);
  };

  return { sendPaymentData, paymentData };
}
