/**
 * Field values for the extra-income application. They mirror the contract of
 * prospects_v2 `POST /api/public/apply` (api/app/schemas.py `ApplyIn`), so a
 * submission can be posted there unchanged once the CRM intake is live.
 */
export const AGE_RANGES = ['18-25', '26-35', '36-45', '46-55', '55+'] as const

export const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
  'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
] as const
