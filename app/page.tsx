import {
  GlobalStyles,
  Navbar,

  SectionCta,
  SectionManifesto,
} from "@/devlink";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <GlobalStyles/>
        <div className="noise"></div>
        <div className="main-wrapper">
          <Navbar />
          <SectionManifesto />
          <SectionCta />
        </div>
      </div>
    </>
  );
}
