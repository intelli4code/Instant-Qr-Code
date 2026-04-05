import { describe, it, expect } from 'vitest';
import { getDataString } from '../qrData';

describe('QR Data Utilities', () => {
  it('should format URL correctly', () => {
    const config = {
      category: 'url',
      content: { url: 'https://google.com' }
    };
    expect(getDataString(config)).toBe('https://google.com');
  });

  it('should format WiFi correctly (WPA)', () => {
    const config = {
      category: 'wifi',
      content: { wifi: { ssid: 'Home', password: '123', encryption: 'WPA' } }
    };
    expect(getDataString(config)).toBe('WIFI:S:Home;T:WPA;P:123;;');
  });

  it('should format vCard correctly', () => {
    const config = {
      category: 'vcard',
      content: { 
        vcard: { firstName: 'Hamza', lastName: 'Munir', phone: '123456', email: 'test@example.com' } 
      }
    };
    const result = getDataString(config);
    expect(result).toContain('BEGIN:VCARD');
    expect(result).toContain('FN:Hamza Munir');
    expect(result).toContain('TEL;TYPE=CELL:123456');
    expect(result).toContain('EMAIL:test@example.com');
    expect(result).toContain('END:VCARD');
  });
});
