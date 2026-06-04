import { XMLParser } from 'fast-xml-parser';

export const parsingXml = (data: string) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const parsedData = parser.parse(data);

  return parsedData;
};