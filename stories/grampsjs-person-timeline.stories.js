import {html} from 'lit'
import '../src/components/GrampsjsPersonTimeline.js'

export default {
  title: 'grampsjs-person-timeline',
}

const strings = {'Enclosed by': 'Teil von', 'Associations': 'Verknüpfungen', 'and': 'und', 'Addresses': 'Adressen', 'Attributes': 'Attribute', 'Author': 'Autor', 'Birth Date': 'Geburtsdatum', 'Borough': 'Borough', 'Building': 'Gebäude', 'Children': 'Kinder', 'Citation': 'Fundstelle', 'Citations': 'Fundstellen', 'City': 'Stadt', 'Country': 'Land', 'County': 'Kreis', 'Custom': 'Selbst definiert', 'Dashboard': 'Gramplet Werkzeugbank', 'Database overview': 'Datenbankübersicht', 'Date': 'Datum', 'Death Date': 'Sterbedatum', 'Department': 'Amt', 'Description': 'Beschreibung', 'Details': 'Details', 'District': 'Bezirk', 'Event': 'Ereignis', 'Event Type': 'Ereignisart', 'Events': 'Ereignisse', 'Families': 'Familien', 'Family Tree': 'Stammbaum', 'Family': 'Familie', 'Farm': 'Hof', 'Father': 'Vater', 'Gallery': 'Galerie', 'Given name': 'Vorname', 'Gramps ID': 'Gramps-ID', 'Hamlet': 'Weiler', 'Home Page': 'Homepage', 'in': 'in', 'Locality': 'Lokalität', 'Map': 'Karte', 'Marriage Date': 'Hochzeitsdatum', 'Married': 'Verheiratet', 'Media': 'Medien', 'Mother': 'Mutter', 'Municipality': 'Gemeinde', 'Name': 'Name', 'Neighborhood': 'Viertel', 'Note': 'Notiz', 'Notes': 'Notizen', 'Number of events': 'Anzahl der Ereignisse', 'Number of families': 'Familienanzahl', 'Number of generations:': 'Anzahl der Generationen:', 'Number of individuals': 'Personenzahl', 'Number of places': 'Anzahl der Orte', 'Number': 'Standortnummer/Signatur', 'Parents': 'Eltern', 'Parish': 'Kirchengemeinde', 'People': 'Personen', 'Place': 'Ort', 'Places': 'Orte', 'Primary': 'Primär', 'Province': 'Provinz', 'Publication info': 'Veröffentlichungsinformation', 'References': 'Referenzen', 'Region': 'Region', 'Relationships': 'Beziehungen', 'Repositories': 'Aufbewahrungsorte', 'Repository': 'Aufbewahrungsort', 'Siblings': 'Geschwister', 'Source': 'Quelle', 'Sources': 'Quellen', 'Spouses': '(Ehe-)Partner', 'State': 'Bundesland', 'Street': 'Straße', 'Surname': 'Nachname', 'Town': 'Kleinstadt', 'Type': 'Art', 'Unknown': 'Unbekannt', 'Village': 'Dorf', 'Zoom': 'Zoom'}


const data = [{'date': '1855-06-21',
  'description': 'Birth of Garner, Lewis Anderson',
  'gramps_id': 'E1656',
  'handle': 'a5af0ecb107303354a0',
  'label': 'Geburt',
  'media': ['b39fe1cfc1305ac4a21'],
  'person': {'relationship': 'self'},
  'place': {'alternate_names': [],
    'display_name': 'Great Falls, MT, USA',
    'gramps_id': 'P1435',
    'handle': 'ONUJQCG42LU6VBX8IT',
    'lat': 0,
    'long': 0,
    'name': 'Great Falls',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0066',
      'lat': 0,
      'long': 0,
      'name': 'MT',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '',
  'type': 'Birth'},
{'date': '1857-05-30',
  'description': 'Birth of Garner, Rebecca Catharine',
  'gramps_id': 'E0200',
  'handle': 'a5af0eb8062495c6e0e',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1857-05-30',
    'place': 'Denver-Aurora, CO, USA',
    'type': 'Geburt'},
  'death': {'date': '1937-04-09',
    'place': 'Alice, Jim Wells, TX, USA',
    'type': 'Tod'},
  'gramps_id': 'I1117',
  'handle': 'ORFKQC4KLWEGTGR19L',
  'name_given': 'Rebecca Catharine',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Denver-Aurora, CO, USA',
    'gramps_id': 'P1342',
    'handle': 'KM5KQCUCSE1OUA3X7',
    'lat': 0,
    'long': 0,
    'name': 'Denver-Aurora',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0087',
      'lat': 0,
      'long': 0,
      'name': 'CO',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '1 Jahre',
  'type': 'Birth'},
{'date': '1858-05-24',
  'description': 'Death of Garner, Mary M.',
  'gramps_id': 'E0198',
  'handle': 'a5af0eb7ffe7d2128e0',
  'label': 'Tod (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1851-10-12', 'place': '', 'type': 'Geburt'},
    'death': {'date': '1858-05-24', 'place': '', 'type': 'Tod'},
    'gramps_id': 'I1115',
    'handle': '9QFKQC54ET79K2SD57',
    'name_given': 'Mary M.',
    'name_surname': 'Garner',
    'relationship': 'Stief-/Adoptivschwester',
    'sex': 'F'},
  'place': {},
  'age': '2 Jahre',
  'type': 'Death'},
{'date': '1858-12-31',
  'description': 'Birth of Carr, Zelpha Josephine',
  'gramps_id': 'E0203',
  'handle': 'a5af0eb80eb3eb67473',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1858-12-31',
    'place': 'Brownwood, Harris, TX, USA',
    'type': 'Geburt'},
  'death': {'date': '1895-02-08', 'place': 'Beckley, WV, USA', 'type': 'Tod'},
  'gramps_id': 'I1119',
  'handle': '6TFKQCUTO94WB2NHN',
  'name_given': 'Zelpha Josephine',
  'name_surname': 'Carr',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Brownwood, Harris, TX, USA',
    'gramps_id': 'P1190',
    'handle': 'ETFKQCR0HIPERW8B7Y',
    'lat': 30.1143763,
    'long': -93.7351659,
    'name': 'Brownwood',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0312',
      'lat': 0,
      'long': 0,
      'name': 'Harris',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0010',
      'lat': 0,
      'long': 0,
      'name': 'TX',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '3 Jahre',
  'type': 'Birth'},
{'date': '1860-11-01',
  'description': 'Birth of Garner, Iola Elizabeth Betty',
  'gramps_id': 'E0208',
  'handle': 'a5af0eb819063985d5e',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1860-11-01',
    'place': 'Orlando, Orange, FL, USA',
    'type': 'Geburt'},
  'death': {'date': '1941-04-17',
    'place': 'Killeen, Bell, TX, USA',
    'type': 'Tod'},
  'gramps_id': 'I1121',
  'handle': 'MUFKQCMXUJ07MCDUNI',
  'name_given': 'Iola Elizabeth Betty',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Orlando, Orange, FL, USA',
    'gramps_id': 'P1129',
    'handle': 'C2DKQCDXBRBVHMGNP4',
    'lat': 28.5383355,
    'long': -81.3792365,
    'name': 'Orlando',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0353',
      'lat': 0,
      'long': 0,
      'name': 'Orange',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0003',
      'lat': 0,
      'long': 0,
      'name': 'FL',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '5 Jahre',
  'type': 'Birth'},
{'date': '1863-04-04',
  'description': 'Birth of Garner, Robert F.',
  'gramps_id': 'E0211',
  'handle': 'a5af0eb81f41c2992d2',
  'label': 'Geburt (Stief-/Adoptivbruder)',
  'media': [],
  'person': {'birth': {'date': '1863-04-04',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1940-02-17',
    'place': 'Marshalltown, Marshall, IA, USA',
    'type': 'Tod'},
  'gramps_id': 'I1123',
  'handle': 'AWFKQCJELLUWDY2PD3',
  'name_given': 'Robert F.',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivbruder',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '7 Jahre',
  'type': 'Birth'},
{'date': '1868-08-18',
  'description': 'Birth of Garner, Emma A.',
  'gramps_id': 'E0214',
  'handle': 'a5af0eb8257286d5cf3',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1868-08-18', 'place': '', 'type': 'Geburt'},
    'death': {'date': '1869-02-23', 'place': '', 'type': 'Tod'},
    'gramps_id': 'I1125',
    'handle': 'PXFKQCXEHJX3W1Q1IV',
    'name_given': 'Emma A.',
    'name_surname': 'Garner',
    'relationship': 'Stief-/Adoptivschwester',
    'sex': 'F'},
  'place': {},
  'age': '13 Jahre',
  'type': 'Birth'},
{'date': '1869-02-23',
  'description': 'Death of Garner, Emma A.',
  'gramps_id': 'E0215',
  'handle': 'a5af0eb8260431e2296',
  'label': 'Tod (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1868-08-18', 'place': '', 'type': 'Geburt'},
    'death': {'date': '1869-02-23', 'place': '', 'type': 'Tod'},
    'gramps_id': 'I1125',
    'handle': 'PXFKQCXEHJX3W1Q1IV',
    'name_given': 'Emma A.',
    'name_surname': 'Garner',
    'relationship': 'Stief-/Adoptivschwester',
    'sex': 'F'},
  'place': {},
  'age': '13 Jahre',
  'type': 'Death'},
{'date': '1870-06-13',
  'description': 'Birth of Garner, Anetta',
  'gramps_id': 'E0217',
  'handle': 'a5af0eb82a7256ede04',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1870-06-13',
    'place': 'Centralia, WA, USA',
    'type': 'Geburt'},
  'death': {'date': '1900-10-04',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I1126',
  'handle': 'GYFKQCPH8Q0JDN94GR',
  'name_given': 'Anetta',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Centralia, WA, USA',
    'gramps_id': 'P1464',
    'handle': 'PYFKQC1S13QD6Z7KV2',
    'lat': 0,
    'long': 0,
    'name': 'Centralia',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0022',
      'lat': 0,
      'long': 0,
      'name': 'WA',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '14 Jahre',
  'type': 'Birth'},
{'date': '1870-06-13',
  'description': 'Birth of Garner, Antoinette',
  'gramps_id': 'E0220',
  'handle': 'a5af0eb8317576c0e02',
  'label': 'Geburt (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1870-06-13',
    'place': 'Starkville, MS, USA',
    'type': 'Geburt'},
  'death': {'date': 'vor 1880', 'place': '', 'type': 'Tod'},
  'gramps_id': 'I1128',
  'handle': 'UZFKQCIHVT44DC9KGH',
  'name_given': 'Antoinette',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Starkville, MS, USA',
    'gramps_id': 'P1606',
    'handle': 'VMFKQC577R58UQLZ2R',
    'lat': 0,
    'long': 0,
    'name': 'Starkville',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0041',
      'lat': 0,
      'long': 0,
      'name': 'MS',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '14 Jahre',
  'type': 'Birth'},
{'date': '1875-02-04',
  'description': 'Marriage of Floyd, John Morgan and Carr, Zelpha Josephine',
  'gramps_id': 'E3032',
  'handle': 'a5af0ed9be42bbd5fed',
  'label': 'Hochzeit (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1858-12-31',
    'place': 'Brownwood, Harris, TX, USA',
    'type': 'Geburt'},
  'death': {'date': '1895-02-08', 'place': 'Beckley, WV, USA', 'type': 'Tod'},
  'gramps_id': 'I1119',
  'handle': '6TFKQCUTO94WB2NHN',
  'name_given': 'Zelpha Josephine',
  'name_surname': 'Carr',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Denver-Aurora, CO, USA',
    'gramps_id': 'P1342',
    'handle': 'KM5KQCUCSE1OUA3X7',
    'lat': 0,
    'long': 0,
    'name': 'Denver-Aurora',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0087',
      'lat': 0,
      'long': 0,
      'name': 'CO',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '19 Jahre',
  'type': 'Marriage'},
{'date': '1875-04-01',
  'description': 'Marriage of Garner, Lewis Anderson and Martel, Luella Jacques',
  'gramps_id': 'E2815',
  'handle': 'a5af0ed5df832ee65c1',
  'label': 'Hochzeit',
  'media': [],
  'person': {'relationship': 'self'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '19 Jahre',
  'type': 'Marriage'},
{'date': '1875-10-07',
  'description': 'Marriage of Ramírez, John B. and Garner, Rebecca Catharine',
  'gramps_id': 'E3031',
  'handle': 'a5af0ed9bc363b8ec17',
  'label': 'Hochzeit (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1857-05-30',
    'place': 'Denver-Aurora, CO, USA',
    'type': 'Geburt'},
  'death': {'date': '1937-04-09',
    'place': 'Alice, Jim Wells, TX, USA',
    'type': 'Tod'},
  'gramps_id': 'I1117',
  'handle': 'ORFKQC4KLWEGTGR19L',
  'name_given': 'Rebecca Catharine',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '20 Jahre',
  'type': 'Marriage'},
{'date': '1876-06-18',
  'description': 'Birth of Garner, Jesse V.',
  'gramps_id': 'E2037',
  'handle': 'a5af0ece84633de9245',
  'label': 'Geburt (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1876-06-18',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1929-01-21',
    'place': 'Cedar City, UT, USA',
    'type': 'Tod'},
  'gramps_id': 'I0623',
  'handle': 'JF5KQC2L6ABI0MVD3E',
  'name_given': 'Jesse V.',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '20 Jahre',
  'type': 'Birth'},
{'date': '1878-09-16',
  'description': 'Birth of Garner, Raymond E.',
  'gramps_id': 'E2040',
  'handle': 'a5af0ece8bd1125a1a9',
  'label': 'Geburt (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1878-09-16',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1921-05-02', 'place': 'Astoria, OR, USA', 'type': 'Tod'},
  'gramps_id': 'I0624',
  'handle': 'MG5KQC6ZKSVO4A63G2',
  'name_given': 'Raymond E.',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '23 Jahre',
  'type': 'Birth'},
{'date': '1879-09-17',
  'description': 'Marriage of Ford, Stephen Jacob and Garner, Iola Elizabeth Betty',
  'gramps_id': 'E3033',
  'handle': 'a5af0ed9c0e53838904',
  'label': 'Hochzeit (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1860-11-01',
    'place': 'Orlando, Orange, FL, USA',
    'type': 'Geburt'},
  'death': {'date': '1941-04-17',
    'place': 'Killeen, Bell, TX, USA',
    'type': 'Tod'},
  'gramps_id': 'I1121',
  'handle': 'MUFKQCMXUJ07MCDUNI',
  'name_given': 'Iola Elizabeth Betty',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Vernal, UT, USA',
    'gramps_id': 'P1574',
    'handle': 'U3ELQCXO8AIM6TD5G4',
    'lat': 0,
    'long': 0,
    'name': 'Vernal',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0067',
      'lat': 0,
      'long': 0,
      'name': 'UT',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '24 Jahre',
  'type': 'Marriage'},
{'date': '1880-09-11',
  'description': 'Birth of Garner, Jennie S.',
  'gramps_id': 'E2042',
  'handle': 'a5af0ece908588a8627',
  'label': 'Geburt (Stief-/Adoptivtochter)',
  'media': [],
  'person': {'birth': {'date': '1880-09-11',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1964-06-20',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I0625',
  'handle': 'CH5KQCIEXSN1J5UEHB',
  'name_given': 'Jennie S.',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivtochter',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '25 Jahre',
  'type': 'Birth'},
{'date': '1880-11-25',
  'description': 'Marriage of Garner, Robert F. and Cannon, Mary Jane',
  'gramps_id': 'E3034',
  'handle': 'a5af0ed9c3a36e94db6',
  'label': 'Hochzeit (Stief-/Adoptivbruder)',
  'media': [],
  'person': {'birth': {'date': '1863-04-04',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1940-02-17',
    'place': 'Marshalltown, Marshall, IA, USA',
    'type': 'Tod'},
  'gramps_id': 'I1123',
  'handle': 'AWFKQCJELLUWDY2PD3',
  'name_given': 'Robert F.',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivbruder',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '25 Jahre',
  'type': 'Marriage'},
{'date': '1882-02-17',
  'description': 'Birth of Garner, Walter E.',
  'gramps_id': 'E2045',
  'handle': 'a5af0ece96571747dce',
  'label': 'Geburt (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1882-02-17',
    'place': 'Paragould, Greene, AR, USA',
    'type': 'Geburt'},
  'death': {'date': '1946-10-23',
    'place': 'Battle Creek, MI, USA',
    'type': 'Tod'},
  'gramps_id': 'I0626',
  'handle': 'DI5KQC3CLKWQI3I0CC',
  'name_given': 'Walter E.',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Paragould, Greene, AR, USA',
    'gramps_id': 'P1498',
    'handle': 'RF5KQCNJRQY8OGTX2H',
    'lat': 36.0584021,
    'long': -90.4973286,
    'name': 'Paragould',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0266',
      'lat': 0,
      'long': 0,
      'name': 'Greene',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0036',
      'lat': 0,
      'long': 0,
      'name': 'AR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '26 Jahre',
  'type': 'Birth'},
{'date': '1882-03-07',
  'description': 'Death of Zieliński, Phoebe Emily',
  'gramps_id': 'E0125',
  'handle': 'a5af0eb76ce7f2b0e95',
  'label': 'Tod (Stief-/Adoptivmutter)',
  'media': [],
  'person': {'birth': {'date': '1827-04-12',
    'place': 'Bogalusa, Washington, LA, USA',
    'type': 'Geburt'},
  'death': {'date': '1882-03-07',
    'place': 'Albuquerque, NM, USA',
    'type': 'Tod'},
  'gramps_id': 'I0107',
  'handle': '46WJQCIOLQ0KOX2XCC',
  'name_given': 'Phoebe Emily',
  'name_surname': 'Zieliński',
  'relationship': 'Stief-/Adoptivmutter',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Albuquerque, NM, USA',
    'gramps_id': 'P1398',
    'handle': 'N6WJQCD10UPB228THM',
    'lat': 0,
    'long': 0,
    'name': 'Albuquerque',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0042',
      'lat': 0,
      'long': 0,
      'name': 'NM',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '26 Jahre',
  'type': 'Death'},
{'date': '1883',
  'description': 'Birth of Garner, Elizabeth',
  'gramps_id': 'E2054',
  'handle': 'a5af0ecea9422d01d46',
  'label': 'Geburt (Tochter)',
  'media': [],
  'person': {'birth': {'date': '1883', 'place': '', 'type': 'Geburt'},
    'death': {'date': '',
      'place': 'Hays, Ellis, KS, USA',
      'type': 'Beerdigung'},
    'gramps_id': 'I0629',
    'handle': 'LL5KQCG687Y165GL5P',
    'name_given': 'Elizabeth',
    'name_surname': 'Garner',
    'relationship': 'Tochter',
    'sex': 'F'},
  'place': {},
  'age': '27 Jahre',
  'type': 'Birth'},
{'date': '1883-09-30',
  'description': 'Birth of Garner, Daniel Webster',
  'gramps_id': 'E2048',
  'handle': 'a5af0ece9da12308074',
  'label': 'Geburt (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1883-09-30',
    'place': 'Hood River, OR, USA',
    'type': 'Geburt'},
  'death': {'date': '1936-03-02',
    'place': 'Gary, Lake, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I0627',
  'handle': 'JJ5KQC83DT7VDMUYRQ',
  'name_given': 'Daniel Webster',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Hood River, OR, USA',
    'gramps_id': 'P1525',
    'handle': 'SJ5KQCJBK9X6SPB9OR',
    'lat': 0,
    'long': 0,
    'name': 'Hood River',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0021',
      'lat': 0,
      'long': 0,
      'name': 'OR',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '28 Jahre',
  'type': 'Birth'},
{'date': '1888-03-13',
  'description': 'Birth of Garner, Bertha P.',
  'gramps_id': 'E2051',
  'handle': 'a5af0ecea335561073e',
  'label': 'Geburt (Tochter)',
  'media': [],
  'person': {'birth': {'date': '1888-03-13',
    'place': 'Hagerstown, MD, USA',
    'type': 'Geburt'},
  'death': {'date': '1918-04-05',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I0628',
  'handle': 'NK5KQC1MAOU2BP35ZV',
  'name_given': 'Bertha P.',
  'name_surname': 'Garner',
  'relationship': 'Tochter',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Hagerstown, MD, USA',
    'gramps_id': 'P1603',
    'handle': 'VK5KQCEEVQCN5EX4U6',
    'lat': 0,
    'long': 0,
    'name': 'Hagerstown',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0093',
      'lat': 0,
      'long': 0,
      'name': 'MD',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '32 Jahre',
  'type': 'Birth'},
{'date': '1888-08-23',
  'description': 'Marriage of Parker, Frank R. and Garner, Anetta',
  'gramps_id': 'E3036',
  'handle': 'a5af0ed9c98623265a4',
  'label': 'Hochzeit (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1870-06-13',
    'place': 'Centralia, WA, USA',
    'type': 'Geburt'},
  'death': {'date': '1900-10-04',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I1126',
  'handle': 'GYFKQCPH8Q0JDN94GR',
  'name_given': 'Anetta',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Centralia, WA, USA',
    'gramps_id': 'P1464',
    'handle': 'PYFKQC1S13QD6Z7KV2',
    'lat': 0,
    'long': 0,
    'name': 'Centralia',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0022',
      'lat': 0,
      'long': 0,
      'name': 'WA',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '33 Jahre',
  'type': 'Marriage'},
{'date': '1895-02-08',
  'description': 'Death of Carr, Zelpha Josephine',
  'gramps_id': 'E0204',
  'handle': 'a5af0eb80fa6c647999',
  'label': 'Tod (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1858-12-31',
    'place': 'Brownwood, Harris, TX, USA',
    'type': 'Geburt'},
  'death': {'date': '1895-02-08', 'place': 'Beckley, WV, USA', 'type': 'Tod'},
  'gramps_id': 'I1119',
  'handle': '6TFKQCUTO94WB2NHN',
  'name_given': 'Zelpha Josephine',
  'name_surname': 'Carr',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Beckley, WV, USA',
    'gramps_id': 'P1461',
    'handle': 'PTFKQCKPHO2VC5SYKS',
    'lat': 0,
    'long': 0,
    'name': 'Beckley',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0001',
      'lat': 0,
      'long': 0,
      'name': 'WV',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '39 Jahre',
  'type': 'Death'},
{'date': '1895-12-01',
  'description': 'Birth of Garner, Eugene Stanley',
  'gramps_id': 'E1702',
  'handle': 'a5af0ecb6a7101f1b84',
  'label': 'Geburt (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1895-12-01',
    'place': 'Portsmouth, OH, USA',
    'type': 'Geburt'},
  'death': {'date': '1984-03-01',
    'place': 'Twin Falls, Twin Falls, ID, USA',
    'type': 'Tod'},
  'gramps_id': 'I0046',
  'handle': 'DPUJQCUYKKDPT78JJV',
  'name_given': 'Eugene Stanley',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {'alternate_names': [],
    'display_name': 'Portsmouth, OH, USA',
    'gramps_id': 'P1388',
    'handle': 'MPUJQC6XJGF36NP12L',
    'lat': 0,
    'long': 0,
    'name': 'Portsmouth',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0000',
      'lat': 0,
      'long': 0,
      'name': 'OH',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '40 Jahre',
  'type': 'Birth'},
{'date': '1900-10-04',
  'description': 'Death of Garner, Anetta',
  'gramps_id': 'E0218',
  'handle': 'a5af0eb82b720d4759b',
  'label': 'Tod (Stief-/Adoptivschwester)',
  'media': [],
  'person': {'birth': {'date': '1870-06-13',
    'place': 'Centralia, WA, USA',
    'type': 'Geburt'},
  'death': {'date': '1900-10-04',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I1126',
  'handle': 'GYFKQCPH8Q0JDN94GR',
  'name_given': 'Anetta',
  'name_surname': 'Garner',
  'relationship': 'Stief-/Adoptivschwester',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Columbus, Bartholomew, IN, USA',
    'gramps_id': 'P1553',
    'handle': 'TH5KQCHNEY4CJ5IJUK',
    'lat': 39.2014405,
    'long': -85.9213796,
    'name': 'Columbus',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0225',
      'lat': 0,
      'long': 0,
      'name': 'Bartholomew',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0039',
      'lat': 0,
      'long': 0,
      'name': 'IN',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '45 Jahre',
  'type': 'Death'},
{'date': '1907-06-02',
  'description': 'Marriage of Garner, Daniel Webster and Jackson, Cora Ellen',
  'gramps_id': 'E3030',
  'handle': 'a5af0ed9ba572456711',
  'label': 'Hochzeit (Sohn)',
  'media': [],
  'person': {'birth': {'date': '1883-09-30',
    'place': 'Hood River, OR, USA',
    'type': 'Geburt'},
  'death': {'date': '1936-03-02',
    'place': 'Gary, Lake, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I0627',
  'handle': 'JJ5KQC83DT7VDMUYRQ',
  'name_given': 'Daniel Webster',
  'name_surname': 'Garner',
  'relationship': 'Sohn',
  'sex': 'M'},
  'place': {},
  'age': '51 Jahre',
  'type': 'Marriage'},
{'date': '1907-11-16',
  'description': 'Marriage of Robinson, Clarence and Garner, Bertha P.',
  'gramps_id': 'E2834',
  'handle': 'a5af0ed61ad21441c7b',
  'label': 'Hochzeit (Tochter)',
  'media': [],
  'person': {'birth': {'date': '1888-03-13',
    'place': 'Hagerstown, MD, USA',
    'type': 'Geburt'},
  'death': {'date': '1918-04-05',
    'place': 'Columbus, Bartholomew, IN, USA',
    'type': 'Tod'},
  'gramps_id': 'I0628',
  'handle': 'NK5KQC1MAOU2BP35ZV',
  'name_given': 'Bertha P.',
  'name_surname': 'Garner',
  'relationship': 'Tochter',
  'sex': 'F'},
  'place': {'alternate_names': [],
    'display_name': 'Columbus, Bartholomew, IN, USA',
    'gramps_id': 'P1553',
    'handle': 'TH5KQCHNEY4CJ5IJUK',
    'lat': 39.2014405,
    'long': -85.9213796,
    'name': 'Columbus',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0225',
      'lat': 0,
      'long': 0,
      'name': 'Bartholomew',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0039',
      'lat': 0,
      'long': 0,
      'name': 'IN',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '52 Jahre',
  'type': 'Marriage'},
{'date': '1911-06-28',
  'description': 'Death of Garner, Lewis Anderson',
  'gramps_id': 'E1657',
  'handle': 'a5af0ecb11f5ac3110e',
  'label': 'Tod',
  'media': [],
  'person': {'relationship': 'self'},
  'place': {'alternate_names': [],
    'display_name': 'Twin Falls, Twin Falls, ID, USA',
    'gramps_id': 'P1678',
    'handle': 'YNUJQC8YM5EGRG868J',
    'lat': 42.5629668,
    'long': -114.4608711,
    'name': 'Twin Falls',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0409',
      'lat': 0,
      'long': 0,
      'name': 'Twin Falls',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0070',
      'lat': 0,
      'long': 0,
      'name': 'ID',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '',
  'type': 'Death'},
{'date': '1911-07-01',
  'description': 'Burial of Garner, Lewis Anderson',
  'gramps_id': 'E1658',
  'handle': 'a5af0ecb12e29af8a5d',
  'label': 'Beerdigung',
  'media': [],
  'person': {'relationship': 'self'},
  'place': {'alternate_names': [],
    'display_name': 'Twin Falls, Twin Falls, ID, USA',
    'gramps_id': 'P1678',
    'handle': 'YNUJQC8YM5EGRG868J',
    'lat': 42.5629668,
    'long': -114.4608711,
    'name': 'Twin Falls',
    'parent_places': [{'alternate_names': [],
      'gramps_id': 'P0409',
      'lat': 0,
      'long': 0,
      'name': 'Twin Falls',
      'type': 'Kreis'},
    {'alternate_names': [],
      'gramps_id': 'P0070',
      'lat': 0,
      'long': 0,
      'name': 'ID',
      'type': 'Bundesland'},
    {'alternate_names': [],
      'gramps_id': 'P0957',
      'lat': 0,
      'long': 0,
      'name': 'USA',
      'type': 'Land'}],
    'type': 'Stadt'},
  'age': '',
  'type': 'Burial'}]

export const App = () =>
  html`
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
    <grampsjs-person-timeline .data=${data} .strings=${strings}></grampsjs-person-timeline>
  `
