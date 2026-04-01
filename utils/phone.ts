// lib/phone.ts
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export function validatePhone(phone: string, country = 'GH') {
  const parsed = parsePhoneNumberFromString(phone, country);

  if (!parsed || !parsed.isValid()) {
    return {
      valid: false,
      error: 'Invalid phone number',
    };
  }

  return {
    valid: true,
    formatted: parsed.format('E.164'), // +233XXXXXXXXX
    national: parsed.formatNational(), // 0XXXXXXXXX
  };
}
