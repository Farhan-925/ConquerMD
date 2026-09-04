import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { shippingAddress, cartItems, subtotal, paymentMethod } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const formattedItems = cartItems
      .map(
        (item) =>
          `• ${item.title} (Qty: ${item.quantity || 1}) - $${(
            Number(item.price) * (item.quantity || 1)
          ).toFixed(2)}`
      )
      .join("\n");

    const emailText = `
NEW ORDER RECEIVED - CONQUER MD
========================================

CUSTOMER DETAILS:
-----------------
Name: ${shippingAddress.fullName}
Email: ${shippingAddress.email}
Address: ${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}
Payment Method: ${paymentMethod.toUpperCase()}

ORDER ITEMS:
------------
${formattedItems}

----------------------------------------
TOTAL AMOUNT: $${subtotal.toFixed(2)}
========================================
`;

    await transporter.sendMail({
      from: `"Conquer MD Store" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `🛒 New Order from ${shippingAddress.fullName} ($${subtotal.toFixed(2)})`,
      text: emailText,
    });

    return NextResponse.json({
      success: true,
      message: "Order email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending order email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}