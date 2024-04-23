export const checkFormEmail = (email:string) => {
  const emailIsValid = ref<boolean>(false);

  if (email) { // Checking if email isn't an empty string
    try {
      const firstPart = email.split('@')[0];
      const secondPart = email.split('@')[1];

      if (firstPart!=='' && firstPart.length<=20 && secondPart==='student.atmajaya.ac.id') { // Checking the address length email host
        const name = firstPart.split('.')[0];
        const campusID = firstPart.split('.')[1];
        const dots = (firstPart.match(/\./g) || []).length;
        
        if (name.length<=7 && campusID.length===12 && dots===1) { //Checking if name length max characters and campus ID characters
          const onlyLetters = /^[a-z]+$/.test(name);
          const onlyNumbers = /^\d+$/.test(campusID);
          const batchOf = campusID.substring(0,4);

          if (onlyLetters && onlyNumbers && batchOf === '2018' || batchOf === '2019' || batchOf === '2020' || batchOf === '2021' || batchOf === '2022' || batchOf === '2023') { //Checking if name only contains letters, campus ID only contains numbers, and the batch is from the year 2018-2023
            const majorCode = campusID.substring(4,8);
            const validMajorCode = ref(false);
            switch(majorCode) {
              case '0101':
              case '0102':
              case '0103':
              case '0151':
              case '0152':
              case '0153':
              case '0201':
              case '0202':
              case '0203':
              case '0251':
              case '0252':
              case '0253':
              case '0301':
              case '0303':
              case '0304':
              case '0305':
              case '0351':
              case '0353':
              case '0354':
              case '0355':
              case '0403':
              case '0451':
              case '0452':
              case '0453':
              case '0456':
              case '0500':
              case '0551':
              case '0600':
              case '0602':
              case '0700':
              case '0751':
              case '0851':
              case '0852':
                validMajorCode.value=true;
                break;
              default:
                validMajorCode.value=false;
                break;                
            }
            if (validMajorCode.value) {
              emailIsValid.value=true;
            }
            else emailIsValid.value=false;
          }
          else emailIsValid.value=false;
        }
        else emailIsValid.value=false;
      }
      else emailIsValid.value=false;
    } catch (error) {
      emailIsValid.value=false;
    }
  }
  else emailIsValid.value=false;
  
  return {
    emailIsValid
  }
}