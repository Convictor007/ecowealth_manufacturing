import machine from '../assets/images/1m/machine-1m.png'
import machine650 from '../assets/images/650k/machine-650k.png'
import bedPro from '../assets/images/1m/treatment-bed-1m.png'
import bed650 from '../assets/images/650k/treatment_bed_650k.png'
import bag650 from '../assets/images/650k/treatment_bag_650k.png'
import type {
  Audience,
  ComponentItem,
  Condition,
  MachinePackage,
  SevenR,
  SpecGroup,
  SpecItem,
} from '../types'

export const MACHINE_IMAGE = machine

export const BRAND = {
  name: 'Eco-Wealth',
  product: 'Modern Labatiba Machine',
  subtitle: 'Modern Labatiba Colon Hydrotherapy',
  tagline: 'The Seven Rs of Colon Hydrotherapy',
  email: 'info@ecowealth.ph',
  phone: '+63 900 000 0000',
  location: 'Philippines',
}

export const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Effective For', href: '#conditions' },
  { label: 'The 7 Rs', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Specifications', href: '#specs' },
  { label: 'Partners', href: '#audience' },
  { label: 'Contact', href: '#contact' },
]

export const CONDITIONS: Condition[] = [
  { name: 'Diabetes' },
  { name: 'Hypertension' },
  { name: 'Tumor (Cyst/Bukol)' },
  { name: 'Uric Acid / Gout' },
  { name: 'Urinary Problem' },
  { name: 'Insomnia' },
  { name: 'Over Weight' },
  { name: 'Tuberculosis' },
  { name: 'Ulcer' },
  { name: 'Sinusitis' },
  { name: 'Paralysis' },
  { name: 'Heart Disease' },
  { name: 'Arthritis / Gout' },
  { name: 'Migraine' },
]

export const SEVEN_RS: SevenR[] = [
  {
    index: '01',
    title: 'Rehydrate',
    description:
      'Gravity-fed, temperature-controlled purified water gently rehydrates the colon for a comfortable session.',
  },
  {
    index: '02',
    title: 'Release',
    description:
      'Encourages the natural release of impacted waste and built-up toxins from the large intestine.',
  },
  {
    index: '03',
    title: 'Restore',
    description:
      'Helps restore healthy peristalsis and the natural rhythm of the digestive system.',
  },
  {
    index: '04',
    title: 'Rebalance',
    description:
      'Supports a balanced gut environment, the foundation of overall wellness and immunity.',
  },
  {
    index: '05',
    title: 'Rejuvenate',
    description:
      'Clients often report renewed energy, lighter digestion, and improved well-being.',
  },
  {
    index: '06',
    title: 'Reinforce',
    description:
      'A closed, hygienic, UV-sterilized system reinforces safety for every patient and operator.',
  },
  {
    index: '07',
    title: 'Recover',
    description:
      'A complementary therapy designed to support the body’s own recovery processes.',
  },
]

export const PACKAGES: MachinePackage[] = [
  {
    id: 'starter',
    name: 'Starter Proposal',
    tagline: 'Single-station setup for new clinics',
    price: '₱650,000',
    priceValue: 650000,
    image: machine650,
    gallery: [
      { image: bed650, label: 'Foldable treatment bed' },
      { image: bag650, label: 'Portable carry case' },
    ],
    inclusions: [
      { label: '1 Stainless Tank' },
      { label: '1 Nozzle' },
      { label: '1 Filter' },
      { label: '1 UV Sterilizer' },
      { label: '1 Hose In' },
      { label: '1 Hose Out' },
      { label: '2 Free Operator Training', highlight: 'Worth ₱50K' },
      { label: 'Products Worth', highlight: '₱50K' },
      { label: 'Free Installation' },
      { label: 'Free Bed' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional Proposal',
    tagline: 'High-capacity setup for hospitals & busy clinics',
    price: '₱1,000,000',
    priceValue: 1000000,
    featured: true,
    image: machine,
    gallery: [{ image: bedPro, label: 'Premium stainless treatment bed' }],
    inclusions: [
      { label: '1 Stainless Tank' },
      { label: '2 Nozzles' },
      { label: '1 Filter' },
      { label: '1 UV Sterilizer' },
      { label: '1 Hose In' },
      { label: '1 Hose Out' },
      { label: '2 Free Operator Training', highlight: 'Worth ₱50K' },
      { label: 'Products Worth', highlight: '₱150K' },
      { label: 'Free Installation' },
      { label: 'Free Bed' },
    ],
  },
]

/** Short highlights shown in the Overview section. */
export const SPECS: SpecItem[] = [
  { label: 'System Type', value: 'Closed colon hydrotherapy' },
  { label: 'Tank', value: 'Food-grade stainless steel' },
  { label: 'Water Treatment', value: 'Filtration + UV sterilization' },
  { label: 'Treatment Bed', value: 'Included' },
]

/** Detailed, grouped specifications for the Specifications section. */
export const SPEC_GROUPS: SpecGroup[] = [
  {
    title: 'Build & Materials',
    items: [
      { label: 'System Type', value: 'Closed colon hydrotherapy' },
      { label: 'Cabinet', value: 'Stainless steel construction' },
      { label: 'Tank', value: 'Food-grade stainless steel' },
    ],
  },
  {
    title: 'Water System',
    items: [
      { label: 'Treatment', value: 'Multi-stage filtration' },
      { label: 'Sterilization', value: 'UV purification' },
      { label: 'Temperature', value: 'Sensor-controlled warm water' },
      { label: 'Flow', value: 'Gravity-fed, regulated' },
    ],
  },
  {
    title: 'Controls & Operation',
    items: [
      { label: 'Display', value: 'Digital temperature readout' },
      { label: 'Monitoring', value: 'Built-in pressure gauge' },
      { label: 'Session', value: 'Approx. 45 minutes' },
      { label: 'Hygiene', value: 'Closed system with nozzles' },
    ],
  },
  {
    title: 'Delivery & Support',
    items: [
      { label: 'Treatment Bed', value: 'Included' },
      { label: 'Installation', value: 'Free, by trained technicians' },
      { label: 'Training', value: '2 free operator sessions' },
      { label: 'Setup', value: 'Turnkey, ready to operate' },
    ],
  },
]

/** Core hardware components included with the machine. */
export const COMPONENTS: ComponentItem[] = [
  { name: 'Stainless Tank', detail: 'Food-grade water reservoir' },
  { name: 'Nozzles', detail: 'Hygienic application nozzles' },
  { name: 'Filter', detail: 'Water filtration unit' },
  { name: 'UV Sterilizer', detail: 'Ultraviolet water purification' },
  { name: 'Hose In', detail: 'Inlet water line' },
  { name: 'Hose Out', detail: 'Outlet waste line' },
  { name: 'Treatment Bed', detail: 'Foldable patient bed' },
  { name: 'Operator Training', detail: '2 free sessions (worth ₱50K)' },
]

export const AUDIENCES: Audience[] = [
  {
    title: 'Hospitals',
    description:
      'Add a complementary wellness and detox service line with full installation and operator training.',
    icon: 'hospital',
  },
  {
    title: 'Clinics',
    description:
      'A turnkey, single-station investment that starts generating returns from day one.',
    icon: 'clinic',
  },
  {
    title: 'Wellness Centers',
    description:
      'Differentiate your spa or wellness brand with a modern, hygienic colon hydrotherapy system.',
    icon: 'wellness',
  },
  {
    title: 'Distributors',
    description:
      'Partner with Eco-Wealth to bring the Modern Labatiba Machine to your regional network.',
    icon: 'distributor',
  },
]

export const FACILITY_OPTIONS: { value: string; label: string }[] = [
  { value: 'hospital', label: 'Hospital' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'wellness_center', label: 'Wellness Center' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'individual', label: 'Individual Investor' },
  { value: 'other', label: 'Other' },
]
