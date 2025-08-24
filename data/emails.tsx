import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  confirmLink: string;
}

export const VerificationEmail = ({ confirmLink }: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f5",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "8px",
            maxWidth: "500px",
          }}
        >
          <Heading
            style={{ color: "#000000", fontSize: "24px", marginBottom: "20px" }}
          >
            Email Confirmation
          </Heading>
          <Text style={{ marginBottom: "20px", color: "#6b7280" }}>
            Thank you for registering! Please click the button below to confirm
            your email address.
          </Text>
          <Button
            href={confirmLink}
            style={{
              backgroundColor: "#000000",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Confirm Email
          </Button>
          <Text style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
            If you did not register for an account, please disregard this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
