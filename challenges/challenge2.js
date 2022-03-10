
const sameNecklace = (string1, string2) => {
    
   if(string1[0] === string2.slice(-1)){
       console.log(true);
   }else{
       console.log(false);
   }
};

sameNecklace("crane","crane")