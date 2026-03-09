export interface MembershipTier {
  nameEn: string;
  nameSk: string;
  price: string;
  currency: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    nameEn: "Individual",
    nameSk: "Fyzická osoba",
    price: "85",
    currency: "EUR"
  },
  {
    nameEn: "Company < 50 employees",
    nameSk: "Právnická osoba s menej ako 50 zamestnancami",
    price: "450",
    currency: "EUR"
  },
  {
    nameEn: "Company 50+ employees",
    nameSk: "Právnická osoba s 50 a viac zamestnancami",
    price: "900",
    currency: "EUR"
  }
];

export const contactEmail: string = "info@digitalhealthslovakia.com";