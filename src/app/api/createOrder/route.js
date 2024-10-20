import { NextResponse } from "next/server";

export async function POST(req) {
  const { orderId, orderAmount, customerDetails } = await req.json();

  const CASHFREE_API_URL = process.env.NEXT_PUBLIC_CASHFREE_API_URL;
  const APP_ID = process.env.NEXT_PUBLIC_CASHFREE_APP_ID;
  const SECRET_KEY = process.env.NEXT_PUBLIC_CASHFREE_SECRET_KEY;

  // Create headers for authorization
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-client-id": APP_ID,
    "x-client-secret": SECRET_KEY,
  };

  const body = JSON.stringify({
    order_id: orderId,
    order_amount: orderAmount,
    order_currency: "INR",
    customer_details: customerDetails,
    order_meta: {
      return_url: "https://buildmydocuments.com/payment/success",
      notify_url: "https://yourdomain.com/api/notify",
    },
  });

  try {
    // Send the request to Cashfree to create the order
    const response = await fetch(CASHFREE_API_URL, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    // Check if the response is successful
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message },
        { status: response.status }
      );
    }

    // Return the paymentSessionId to the frontend
    return NextResponse.json({ paymentSessionId: data.payment_session_id });
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
