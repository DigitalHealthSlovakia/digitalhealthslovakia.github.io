export interface Supporter {
  nameEn: string;
  nameSk: string;
  url: string;
  logo: string;
}

export const supporters: Supporter[] = [
  { nameEn: "Ministry of Health of the Slovak Republic", nameSk: "Ministerstvo zdravotníctva SR", url: "https://health.gov.sk/", logo: "/images/Podporili_MZSR.gif" },
  { nameEn: "Poliklinika Bezručová", nameSk: "Poliklinika Bezručová", url: "https://www.poliklinikabezrucova.sk/", logo: "/images/Podporili_Bezrucova.jfif" },
  { nameEn: "Dôvera Health Insurance", nameSk: "Dôvera zdravotná poisťovňa", url: "https://www.dovera.sk/", logo: "/images/Podporili_Dovera.png" },
  { nameEn: "National Health Information Center", nameSk: "Národné centrum zdravotníckych informácií", url: "https://www.nczisk.sk/", logo: "/images/Podporili_NCZI.png" },
  { nameEn: "Pažitný & Kandilaki Healthcare Consulting", nameSk: "Pažitný & Kandilaki Healthcare Consulting", url: "https://healthcareconsulting.sk/", logo: "/images/Podporili_PazitnyKandilaki.png" },
  { nameEn: "HL7 Austria", nameSk: "HL7 Rakúsko", url: "https://hl7.at/", logo: "/images/Podporili_HL7Austria.png" },
];