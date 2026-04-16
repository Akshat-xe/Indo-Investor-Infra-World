import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";

const NotFound = () => {
  const location = useLocation();

  usePageSEO({
    title: "Page Not Found | Indo Investor Infra World",
    description: "The page you are looking for doesn't exist. Browse our RERA-verified property portfolio across Noida, Jewar & Dholera.",
    noIndex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-3">Error 404</p>
        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground font-body mb-8 max-w-sm mx-auto">
          This page doesn't exist. Let's get you back to our property portfolio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
