import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    // Configure email-based authentication with custom verification email template
    // This sets up the email verification process with a personalized welcome message
    // and verification code format
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to the AWS Recommendation Generator!",
      verificationEmailBody: (createCode) =>
        `Your verification code is ${createCode()}`,
    },
  },
});
