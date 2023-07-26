import { GlobalStyles, Navbar, SectionCta, SectionManifesto } from "@/devlink";
import NoiseC from "@/components/NoiseC";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <GlobalStyles />
        <NoiseC />
        <div className="main-wrapper">
          <Navbar />
          <SectionManifesto />
          <SectionCta />
        </div>
      </div>
    </>
  );
}
