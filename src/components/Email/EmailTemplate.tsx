import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  otpCode: string;
  supportEmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  otpCode,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.6",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ color: "#2c3e50" }}>Welcome to TrueFeedback, {firstName}!</h1>
    <p style={{ fontSize: "16px" }}>
      Thank you for joining us. To complete your registration, please verify
      your email address using the OTP code below:
    </p>
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2980b9" }}>
        {otpCode}
      </p>
    </div>
    <p style={{ fontSize: "16px" }}>
      If you did not request this code, please disregard this email or contact
      our support team at .
    </p>
    <p style={{ fontSize: "16px" }}>
      Thank you,
      <br />
      The TrueFeedback Team
    </p>
  </div>
);
