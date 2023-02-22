

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"



function whatCentury(year)
{
 let century =  Math.ceil(year/100);
 let lastDigit = century.toString().slice(-1)
  if(lastDigit == 1 && century != 11) return century + 'st';
  else if(lastDigit == 2 && century != 12) return century + 'nd' 
  else if (lastDigit == 3 && century != 13) return century + 'rd'
  else return century + 'th'
  
}