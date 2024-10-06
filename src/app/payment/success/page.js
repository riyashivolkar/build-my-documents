// src/app/payment/success/page.js
export default function SuccessPage() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p>Your payment was processed successfully. Thank you for your order!</p>
      <a href="/" className="text-blue-500 underline">
        Return to Home
      </a>
    </div>
  );
}
