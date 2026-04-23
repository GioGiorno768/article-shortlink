import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WebSiteJsonLd, OrganizationJsonLd } from "@/components/JsonLd";
import InPagePush from "@/components/InPagePush";
import Popunder from "@/components/Popunder";

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
      <InPagePush />
      <Popunder />
    </>
  );
}
