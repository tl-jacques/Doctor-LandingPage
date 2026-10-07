import { contact, instagramLink } from "@/constants";
import { siteDescription, siteUrl } from "@/constants/site";

// Dados estruturados (schema.org) para o Google entender que a página é de
// um médico dermatologista, com endereço, telefone e Instagram.
export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Jorge Medeiros",
  description: siteDescription,
  url: `${siteUrl}/`,
  image: `${siteUrl}/opengraph-image.jpg`,
  medicalSpecialty: "Dermatology",
  telephone: "+55 88 99493-5841",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Gerardo Rangel, 436 - Derby Clube",
    addressLocality: "Sobral",
    addressRegion: "CE",
    postalCode: "62041-380",
    addressCountry: "BR",
  },
  hasMap: contact.mapsLink,
  sameAs: [instagramLink],
};

const StructuredData = () => (
  <script
    type="application/ld+json"
    // JSON gerado no servidor a partir de constantes do próprio site
    dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
  />
);

export default StructuredData;
