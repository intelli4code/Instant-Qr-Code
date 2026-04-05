export const getDataString = (config) => {
  const { category, content } = config;
  
  if (category === "url") return content.url || "https://example.com";
  if (category === "text") return content.text || "Hello World";
  
  if (category === "wifi") {
    const { ssid, password, encryption } = content.wifi;
    if (!ssid) return "WIFI:S:Example;T:nopass;P:;;";
    return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
  }

  if (category === "vcard") {
    const v = content.vcard;
    const vcardLines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      v.firstName || v.lastName ? `FN:${v.firstName} ${v.lastName}`.trim() : "",
      v.firstName || v.lastName ? `N:${v.lastName};${v.firstName};;;` : "",
      v.company ? `ORG:${v.company}` : "",
      v.title ? `TITLE:${v.title}` : "",
      v.phone ? `TEL;TYPE=CELL:${v.phone}` : "",
      v.workPhone ? `TEL;TYPE=WORK:${v.workPhone}` : "",
      v.fax ? `TEL;TYPE=FAX:${v.fax}` : "",
      v.email ? `EMAIL:${v.email}` : "",
      v.website ? `URL:${v.website}` : "",
      v.street || v.city || v.state || v.zip || v.country 
        ? `ADR;TYPE=WORK:;;${v.street};${v.city};${v.state};${v.zip};${v.country}` 
        : "",
      "END:VCARD"
    ].filter(line => line !== "");
    
    return vcardLines.join("\n");
  }

  return "https://example.com";
};
