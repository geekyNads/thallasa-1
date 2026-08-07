import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-[80svh] flex flex-col items-center justify-center text-center px-6">
        <span className="eyebrow">404</span>
        <h1 className="heading-display text-6xl md:text-8xl text-navy mt-5">Lost at sea.</h1>
        <p className="text-navy-400 mt-5 max-w-md">
          This page has drifted off. Let's get you back to shore.
        </p>
        <Button as={Link} to="/" variant="primary" className="mt-8">
          Back to Home
        </Button>
      </section>
    </PageWrapper>
  );
}
