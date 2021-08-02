function paragraphe(p){
     p = p.toUpperCase();
    arr =[];
     var n =0;
    
   arr =  p.split(" ").length;
   for(let i =0; i<p.length; i++){
       if(p[i] === "A" || p[i] ==="U" || p[i] ==="I" || p[i] ==="E" || p[i] ==="O" ){
           n+= 1;
       }
   }
   
console.log(arr);
console.log(n);
}

console.log(paragraphe("This website is for losers"));