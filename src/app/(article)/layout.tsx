import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WebSiteJsonLd, OrganizationJsonLd } from "@/components/JsonLd";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
