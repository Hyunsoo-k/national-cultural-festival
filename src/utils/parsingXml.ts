import { XMLParser } from 'fast-xml-parser';

export const parsingXml = (xmlResponse: string) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const parsedData = parser.parse(xmlResponse);

  return parsedData;
};