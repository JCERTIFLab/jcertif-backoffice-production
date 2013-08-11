Ext.define('JCertifBO.store.Cities', {
	extend : 'Ext.data.Store',
	fields: ['cid', 'city'],
  data: [
      {cid: 'Afghanistan' , city: 'Kabul' },
      {cid: 'Albania' , city: 'Tirana' },
      {cid: 'Algeria' , city: 'Algiers' },
      {cid: 'Andorra' , city: 'Andorra la Vella' },
      {cid: 'Angola' , city: 'Luanda' },
      {cid: 'Antigua and Barbuda' , city: "St. John's" },
      {cid: 'Argentina' , city: 'Buenos Aires' },
      {cid: 'Armenia' , city: 'Yerevan' },
      {cid: 'Australia' , city: 'Canberra' },
      {cid: 'Australia' , city: 'Sydney' },
      {cid: 'Australia' , city: 'Melbourne' },
      {cid: 'Australia' , city: 'Perth' },
      {cid: 'Australia' , city: 'Adelaide' },
      {cid: 'Australia' , city: 'Gold Coast' },
      {cid: 'Australia' , city: 'Newcastle' },
      {cid: 'Australia' , city: 'Brisbane' },
      {cid: 'Austria' , city: 'Vienna' },
      {cid: 'Azerbaijan' , city: 'Baku' },
      {cid: 'Bahamas' , city: 'Nassau' },
      {cid: 'Bahrain' , city: 'Manama' },
      {cid: 'Bangladesh' , city: 'Dhaka' },
      {cid: 'Barbados' , city: 'Bridgetown' },
      {cid: 'Belarus' , city: 'Minsk' },
      {cid: 'Belgium' , city: 'Brussels' },
      {cid: 'Belize' , city: 'Belmopan' },
      {cid: 'Benin' , city: 'Porto-Novo' },
      {cid: 'Benin' , city: 'Cotonou' },
      {cid: 'Bhutan' , city: 'Thimphu' },
      {cid: 'Bolivia' , city: 'Sucre' },
      {cid: 'Bolivia' , city: 'La Paz' },
      {cid: 'Bolivia' , city: 'Santa Cruz' },
      {cid: 'Bosnia and Herzegovina' , city: 'Sarajevo' },
      {cid: 'Botswana' , city: 'Gaborone' },
      {cid: 'Brazil' , city: 'Bras�lia' },
      {cid: 'Brazil' , city: 'S�o Paulo' },
      {cid: 'Brazil' , city: 'Rio de Janeiro' },
      {cid: 'Brazil' , city: 'Salvador' },
      {cid: 'Brazil' , city: 'Porto Alegre' },
      {cid: 'Brazil' , city: 'Belo Horizonte' },
      {cid: 'Brunei' , city: 'Bandar Seri Begawan' },
      {cid: 'Bulgaria' , city: 'Sofia' },
      {cid: 'Burkina Faso' , city: 'Ouagadougou' },
      {cid: 'Burma' , city: 'Naypyidaw (Pyinmana)' },
      {cid: 'Burma' , city: 'Yangon' },
      {cid: 'Burma' , city: 'Mandalay' },
      {cid: 'Burundi' , city: 'Bujumbura' },
      {cid: 'Cambodia' , city: 'Phnom Penh' },
      {cid: 'Cameroon' , city: 'Yaound&eacute;' },
      {cid: 'Cameroon' , city: 'Douala' },
      {cid: 'Canada' , city: 'Ottawa' },
      {cid: 'Canada' , city: 'Toronto' },
      {cid: 'Canada' , city: 'Montreal' },
      {cid: 'Canada' , city: 'Vancouver' },
      {cid: 'Canada' , city: 'Calgary' },
      {cid: 'Cape Verde' , city: 'Praia' },
      {cid: 'Central African Republic' , city: 'Bangui' },
      {cid: 'Chad' , city: "N'Djamena" },
      {cid: 'Chile' , city: 'Santiago' },
      {cid: 'Chile' , city: 'Valpara�so' },
      {cid: 'China' , city: 'Beijing' },
      {cid: 'China' , city: 'Shanghai' },
      {cid: 'Colombia' , city: 'Bogot�' },
      {cid: 'Comoros' , city: 'Moroni' },
      {cid: 'Democratic Republic of the Congo' , city: 'Kinshasa' },
      {cid: 'Republic of the Congo' , city: 'Brazzaville' },
      {cid: 'Costa Rica' , city: 'San Jos&eacute;' },
      {cid: 'Croatia' , city: 'Zagreb' },
      {cid: 'Cuba' , city: 'Havana' },
      {cid: 'Cyprus' , city: 'Nicosia' },
      {cid: 'Czech Republic' , city: 'Prague' },
      {cid: 'Denmark' , city: 'Copenhagen' },
      {cid: 'Djibouti' , city: 'Djibouti' },
      {cid: 'Dominica' , city: 'Roseau' },
      {cid: 'Dominican Republic' , city: 'Santo Domingo' },
      {cid: 'East Timor' , city: 'Dili' },
      {cid: 'Ecuador' , city: 'Quito' },
      {cid: 'Ecuador' , city: 'Guayaquil' },
      {cid: 'Egypt' , city: 'Cairo' },
      {cid: 'El Salvador' , city: 'San Salvador' },
      {cid: 'Equatorial Guinea' , city: 'Malabo' },
      {cid: 'Eritrea' , city: 'Asmara' },
      {cid: 'Estonia' , city: 'Tallinn' },
      {cid: 'Ethiopia' , city: 'Addis Ababa' },
      {cid: 'Fiji' , city: 'Suva' },
      {cid: 'Finland' , city: 'Helsinki' },
      {cid: 'France' , city: 'Paris' },
      {cid: 'France' , city: 'Nantes' },
      {cid: 'France' , city: 'Nice' },
      {cid: 'France' , city: 'Lilles' },
      {cid: 'France' , city: 'Poitier' },
      {cid: 'France' , city: 'Toulouse' },
      {cid: 'France' , city: 'Rennes' },
      {cid: 'Gabon' , city: 'Libreville' },
      {cid: 'The Gambia' , city: 'Banjul' },
      {cid: 'Georgia' , city: 'Tbilisi' },
      {cid: 'Germany' , city: 'Berlin' },
      {cid: 'Ghana' , city: 'Accra' },
      {cid: 'Greece' , city: 'Athens' },
      {cid: 'Grenada' , city: "St. George's" },
      {cid: 'Guatemala' , city: 'Guatemala City' },
      {cid: 'Guinea' , city: 'Conakry' },
      {cid: 'Guinea-Bissau' , city: 'Bissau' },
      {cid: 'Guyana' , city: 'Georgetown' },
      {cid: 'Haiti' , city: 'Port-au-Prince' },
      {cid: 'Honduras' , city: 'Tegucigalpa' },
      {cid: 'Hungary' , city: 'Budapest' },
      {cid: 'Iceland' , city: 'Reykjav�k' },
      {cid: 'India' , city: 'New Delhi' },
      {cid: 'India' , city: 'Delhi' },
      {cid: 'India' , city: 'Mumbai' },
      {cid: 'India' , city: 'Bangalore' },
      {cid: 'India' , city: 'Hydrabad' },
      {cid: 'India' , city: 'Ahmedabad' },
      {cid: 'India' , city: 'Chennai' },
      {cid: 'India' , city: 'Kolkata' },
      {cid: 'Indonesia' , city: 'Jakarta' },
      {cid: 'Iran' , city: 'Tehran' },
      {cid: 'Iraq' , city: 'Baghdad' },
      {cid: 'Republic of Ireland' , city: 'Dublin' },
      {cid: 'Israel' , city: 'Jerusalem' },
      {cid: 'Israel' , city: 'Tel Aviv' },
      {cid: 'Italy' , city: 'Rome' },
      {cid: 'Italy' , city: 'Milan' },
      {cid: 'Italy' , city: 'Naples' },
      {cid: 'Ivory Coast' , city: 'Yamoussoukro' },
      {cid: 'Ivory Coast' , city: 'Abidjan' },
      {cid: 'Jamaica' , city: 'Kingston' },
      {cid: 'Japan' , city: 'Tokyo' },
      {cid: 'Japan' , city: 'Kyoto' },
      {cid: 'Jordan' , city: 'Amman' },
      {cid: 'Kazakhstan' , city: 'Astana' },
      {cid: 'Kazakhstan' , city: 'Almaty' },
      {cid: 'Kazakhstan' , city: 'Shymkent' },
      {cid: 'Kenya' , city: 'Nairobi' },
      {cid: 'Kiribati' , city: 'South Tarawa' },
      {cid: 'North Korea' , city: 'Pyongyang' },
      {cid: 'South Korea' , city: 'Seoul' },
      {cid: 'Kuwait' , city: 'Kuwait City' },
      {cid: 'Kyrgyzstan' , city: 'Bishkek' },
      {cid: 'Laos' , city: 'Vientiane' },
      {cid: 'Latvia' , city: 'Riga' },
      {cid: 'Lebanon' , city: 'Beirut' },
      {cid: 'Lesotho' , city: 'Maseru' },
      {cid: 'Liberia' , city: 'Monrovia' },
      {cid: 'Libya' , city: 'Tripoli' },
      {cid: 'Liechtenstein' , city: 'Vaduz' },
      {cid: 'Liechtenstein' , city: 'Schaan' },
      {cid: 'Lithuania' , city: 'Vilnius' },
      {cid: 'Luxembourg' , city: 'Luxembourg City' },
      {cid: 'Republic of Macedonia' , city: 'Skopje' },
      {cid: 'Madagascar' , city: 'Antananarivo' },
      {cid: 'Malawi' , city: 'Lilongwe' },
      {cid: 'Malaysia' , city: 'Kuala Lumpur' },
      {cid: 'Malaysia' , city: 'Putrajaya' },
      {cid: 'Maldives' , city: 'Mal&eacute;' },
      {cid: 'Mali' , city: 'Bamako' },
      {cid: 'Malta' , city: 'Valletta' },
      {cid: 'Marshall Islands' , city: 'Majuro' },
      {cid: 'Mauritania' , city: 'Nouakchott' },
      {cid: 'Mauritius' , city: 'Port Louis' },
      {cid: 'Mexico' , city: 'Mexico City' },
      {cid: 'Federated States of Micronesia' , city: 'Palikir' },
      {cid: 'Federated States of Micronesia' , city: 'Weno' },
      {cid: 'Moldova' , city: 'Chisinau' },
      {cid: 'Monaco' , city: 'Monaco' },
      {cid: 'Mongolia' , city: 'Ulan Bator' },
      {cid: 'Montenegro' , city: 'Podgorica' },
      {cid: 'Morocco' , city: 'Rabat' },
      {cid: 'Morocco' , city: 'Casablanca' },
      {cid: 'Mozambique' , city: 'Maputo' },
      {cid: 'Namibia' , city: 'Windhoek' },
      {cid: 'Nauru' , city: 'inYaren' },
      {cid: 'Nauru' , city: 'Denigomodu' },
      {cid: 'Nauru' , city: 'Meneng' },
      {cid: 'Nauru' , city: 'Aiwo' },
      {cid: 'Nepal' , city: 'Kathmandu' },
      {cid: 'Kingdom of the Netherlands' , city: 'The Hague' },
      {cid: 'Kingdom of the Netherlands' , city: 'Rotterdam' },
      {cid: 'Kingdom of the Netherlands' , city: 'Amsterdam' },
      {cid: 'New Zealand' , city: 'Wellington' },
      {cid: 'New Zealand' , city: 'Auckland' },
      {cid: 'New Zealand' , city: 'Christchurch' },
      {cid: 'Nicaragua' , city: 'Managua' },
      {cid: 'Niger' , city: 'Niamey' },
      {cid: 'Nigeria' , city: 'Abuja' },
      {cid: 'Nigeria' , city: 'Lagos' },
      {cid: 'Nigeria' , city: 'Ibadan' },
      {cid: 'Nigeria' , city: 'Kano' },
      {cid: 'Nigeria' , city: 'Ilorin' },
      {cid: 'Nigeria' , city: 'Port Harcourt' },
      {cid: 'Nigeria' , city: 'Ogbomosho' },
      {cid: 'Norway' , city: 'Oslo' },
      {cid: 'Oman' , city: 'Muscat' },
      {cid: 'Pakistan' , city: 'Islamabad' },
      {cid: 'Pakistan' , city: 'Lahore' },
      {cid: 'Pakistan' , city: 'Faisalabad' },
      {cid: 'Pakistan' , city: 'Rawalpindi' },
      {cid: 'Pakistan' , city: 'Gujranwala' },
      {cid: 'Pakistan' , city: 'Multan' },
      {cid: 'Pakistan' , city: 'Hyderabad' },
      {cid: 'Pakistan' , city: 'Peshawar' },
      {cid: 'Pakistan' , city: 'Quetta' },
      {cid: 'Pakistan' , city: 'Karachi' },
      {cid: 'Palau' , city: 'Ngerulmud' },
      {cid: 'Palau' , city: 'Koror' },
      {cid: 'Palau' , city: 'Meyuns' },
      {cid: 'Palau' , city: 'Airai' },
      {cid: 'State of Palestine' , city: 'Jerusalem' },
      {cid: 'State of Palestine' , city: 'Gaza' },
      {cid: 'State of Palestine' , city: 'Ramallah' },
      {cid: 'State of Palestine' , city: 'West Bank' },
      {cid: 'Panama' , city: 'Panama City' },
      {cid: 'Papua New Guinea' , city: 'Port Moresby' },
      {cid: 'Paraguay' , city: 'Asunci�n' },
      {cid: 'Peru' , city: 'Lima' },
      {cid: 'Philippines' , city: 'Manila' },
      {cid: 'Philippines' , city: 'Quezon City' },
      {cid: 'Poland' , city: 'Warsaw' },
      {cid: 'Portugal' , city: 'Lisbon' },
      {cid: 'Qatar' , city: 'Doha' },
      {cid: 'Romania' , city: 'Bucharest' },
      {cid: 'Russia' , city: 'Moscow' },
      {cid: 'Rwanda' , city: 'Kigali' },
      {cid: 'Saint Kitts and Nevis' , city: 'Basseterre' },
      {cid: 'Saint Lucia' , city: 'Castries' },
      {cid: 'Saint Vincent and the Grenadines' , city: 'Kingstown' },
      {cid: 'Samoa' , city: 'Apia' },
      {cid: 'San Marino' , city: 'San Marino' },
      {cid: 'San Marino' , city: 'Serravalle' },
      {cid: 'San Marino' , city: 'Borgo Maggiore' },
      {cid: 'Sao Tom&eacute; and Principe' , city: 'Sao Tom&eacute;' },
      {cid: 'Saudi Arabia' , city: 'Riyadh' },
      {cid: 'Senegal' , city: 'Dakar' },
      {cid: 'Serbia' , city: 'Belgrade' },
      {cid: 'Seychelles' , city: 'Victoria' },
      {cid: 'Sierra Leone' , city: 'Freetown' },
      {cid: 'Singapore' , city: 'Singapore' },
      {cid: 'Slovakia' , city: 'Bratislava' },
      {cid: 'Slovenia' , city: 'Ljubljana' },
      {cid: 'Solomon Islands' , city: 'Honiara' },
      {cid: 'Somalia' , city: 'Mogadishu' },
      {cid: 'South Africa' , city: 'Pretoria' },
      {cid: 'South Africa' , city: 'Cape Town' },
      {cid: 'South Africa' , city: 'Bloemfontein' },
      {cid: 'South Africa' , city: 'Durban' },
      {cid: 'South Africa' , city: 'Johannesburg' },
      {cid: 'South Sudan' , city: 'Juba' },
      {cid: 'Spain' , city: 'Madrid' },
      {cid: 'Sri Lanka' , city: 'Sri Jayawardenapura Kotte' },
      {cid: 'Sri Lanka' , city: 'Colombo' },
      {cid: 'Sudan' , city: 'Omdurman' },
      {cid: 'Sudan' , city: 'Khartoum' },
      {cid: 'Suriname' , city: 'Paramaribo' },
      {cid: 'Swaziland' , city: 'Mbabane' },
      {cid: 'Swaziland' , city: 'Lobamba' },
      {cid: 'Swaziland' , city: 'Manzini' },
      {cid: 'Sweden' , city: 'Stockholm' },
      {cid: 'Switzerland' , city: 'Bern' },
      {cid: 'Switzerland' , city: 'Zurich' },
      {cid: 'Switzerland' , city: 'Geneva' },
      {cid: 'Switzerland' , city: 'Basel' },
      {cid: 'Switzerland' , city: 'Lausanne' },
      {cid: 'Syria' , city: 'Damascus' },
      {cid: 'Syria' , city: 'Aleppo' },
      {cid: 'Tajikistan' , city: 'Dushanbe' },
      {cid: 'Tanzania' , city: 'Dodoma' },
      {cid: 'Tanzania' , city: 'Dar es Salaam' },
      {cid: 'Tanzania' , city: 'Mwanza' },
      {cid: 'Thailand' , city: 'Bangkok' },
      {cid: 'Togo' , city: 'Lom&eacute;' },
      {cid: 'Tonga' , city: "Nuku'alofa" },
      {cid: 'Trinidad and Tobago' , city: 'Port of Spain' },
      {cid: 'Trinidad and Tobago' , city: 'Chaguanas' },
      {cid: 'Trinidad and Tobago' , city: 'San Fernando' },
      {cid: 'Trinidad and Tobago' , city: 'San Juan' },
      {cid: 'Tunisia' , city: 'Tunis' },
      {cid: 'Turkey' , city: 'Ankara' },
      {cid: 'Turkey' , city: 'Istanbul' },
      {cid: 'Turkmenistan' , city: 'Ashgabat' },
      {cid: 'Tuvalu' , city: 'Funafuti' },
      {cid: 'Uganda' , city: 'Kampala' },
      {cid: 'Ukraine' , city: 'Kiev' },
      {cid: 'United Arab Emirates' , city: 'Abu Dhabi' },
      {cid: 'United Arab Emirates' , city: 'Dubai' },
      {cid: 'United Arab Emirates' , city: 'Sharjah' },
      {cid: 'United Kingdom' , city: 'London' },
      {cid: 'United States' , city: 'Washington, D.C.' },
      {cid: 'United States' , city: 'New York City' },
      {cid: 'United States' , city: 'Los Angeles' },
      {cid: 'United States' , city: 'Chicago' },
      {cid: 'United States' , city: 'Houston' },
      {cid: 'United States' , city: 'Philadelphia' },
      {cid: 'United States' , city: 'Phoenix' },
      {cid: 'United States' , city: 'San Antonio' },
      {cid: 'United States' , city: 'San Diego' },
      {cid: 'United States' , city: 'Dallas' },
      {cid: 'United States' , city: 'San Jose' },
      {cid: 'United States' , city: 'Austin' },
      {cid: 'United States' , city: 'Jacksonville' },
      {cid: 'United States' , city: 'Indianapolis' },
      {cid: 'United States' , city: 'San Francisco' },
      {cid: 'United States' , city: 'Columbus' },
      {cid: 'United States' , city: 'Fort Worth' },
      {cid: 'United States' , city: 'Charlotte' },
      {cid: 'United States' , city: 'Detroit' },
      {cid: 'United States' , city: 'El Paso' },
      {cid: 'United States' , city: 'Memphis' },
      {cid: 'United States' , city: 'Boston' },
      {cid: 'United States' , city: 'Seattle' },
      {cid: 'United States' , city: 'Denver' },
      {cid: 'Uruguay' , city: 'Montevideo' },
      {cid: 'Uzbekistan' , city: 'Tashkent' },
      {cid: 'Vanuatu' , city: 'Port Vila' },
      {cid: 'Vatican City' , city: 'Vatican City' },
      {cid: 'Venezuela' , city: 'Caracas' },
      {cid: 'Vietnam' , city: 'Hanoi' },
      {cid: 'Vietnam' , city: 'Ho Chi Minh City' },
      {cid: 'Yemen' , city: "Sana'a" },
      {cid: 'Zambia' , city: 'Lusaka' },
      {cid: 'Zimbabwe' , city: 'Harare' }
  ]
});
