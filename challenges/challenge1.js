/*
const findingRemainder = (number) =>{
    roundDown = Math.floor(number);
    howManyTimesItGoesin = roundDown * currentNum;
   remainder = num - howManyTimesItGoesin;
    console.log(`remainder of five hundred ` + remainder);
}
*/




const change = (num) => {

    const findingRemainder = (currentNum) =>{
        division = num/currentNum;
        roundDown = Math.floor(division);
        howManyTimesItGoesin = roundDown * currentNum;
        remainder = num - howManyTimesItGoesin;
        console.log(roundDown);
    }

    if(num >= 500){
        let currentNum = 500;
        findingRemainder(currentNum);
        console.log(`remainder of ${currentNum} ` + remainder);
           if(remainder >= 100){
                let currentNum = 100;
                findingRemainder(currentNum);
                console.log(`remainder of ${currentNum} ` + remainder);
                    if(remainder >= 25){
                        currentNum = 25;
                        findingRemainder(currentNum);
                        console.log(`remainder of ${currentNum} ` + remainder);
                            if(remainder >= 10){
                                currentNum = 10;
                                findingRemainder(currentNum);
                                console.log(`remainder of ${currentNum} ` + remainder);
                                    if(remainder >= 5){
                                        currentNum = 5;
                                        findingRemainder(currentNum);
                                        console.log(`remainder of ${currentNum} ` + remainder);
                                            if(remainder >= 1){
                                                currentNum = 1;
                                                findingRemainder(currentNum);
                                                console.log(`done ` + remainder);

                                               
                                            }
                                    }
                            }
                    }
            }
    }

    totalchange = remainder/currentNum ;
console.log(totalchange); 
}
  
change(642);
