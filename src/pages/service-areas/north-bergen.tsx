
import ServiceAreaLayout from "@/components/service-areas/shared/ServiceAreaLayout";
import { Helmet } from "react-helmet";

const NorthBergen = () => {
  return (
    <>
      <Helmet>
        <title>North Bergen Locksmith Services | Trusted Local Security Experts</title>
        <meta name="description" content="Specialized locksmith solutions for North Bergen residents and businesses. Local experts who understand your neighborhood's unique security challenges." />
        <link rel="canonical" href="https://247locksmithandsecurity.com/service-areas/north-bergen" />
      </Helmet>
      <ServiceAreaLayout areaSlug="north-bergen" />
    </>
  );
};

export default NorthBergen;
