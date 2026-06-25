export interface PackageInclusion {
  label: string
  highlight?: string
}

export interface PackageItem {
  image: string
  label: string
}

export interface MachinePackage {
  id: string
  name: string
  tagline: string
  price: string
  priceValue: number
  featured?: boolean
  image: string
  gallery: PackageItem[]
  inclusions: PackageInclusion[]
}

export interface SpecItem {
  label: string
  value: string
}

export interface SpecGroup {
  title: string
  items: SpecItem[]
}

export interface ComponentItem {
  name: string
  detail: string
}

export interface SevenR {
  index: string
  title: string
  description: string
}

export interface Condition {
  name: string
}

export interface Audience {
  title: string
  description: string
  icon: string
}

export type FacilityType =
  | 'hospital'
  | 'clinic'
  | 'wellness_center'
  | 'distributor'
  | 'individual'
  | 'other'

export interface LeadPayload {
  fullName: string
  organization: string
  facilityType: FacilityType
  email: string
  phone: string
  packageInterest: string
  message?: string
}

export interface LeadResponse {
  success: boolean
  message: string
  referenceId?: string
}
