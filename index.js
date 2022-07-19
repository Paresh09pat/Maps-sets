// 1)
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output: abcdef

let str="abcadeecfb";
let set= new Set();
let hello =str.split("");
hello.forEach(ele=>{
    set.add(ele)
})
console.log(set);


// 2)
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

var Count = (s) => 
{
    let Arr = s.split("").sort();
    var v;
    let mapOne = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      v=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          v=acc+1;
        }
        return v;
      }, 0);

      mapOne.set(`${Arr[i]}` , v);
    }


    let x = [];
    mapOne.forEach((value,key)=>
    {
    if(value>=1)
    {
      x.push(key + "" + value);
    }
    
    });
    return (x.join(""));
};
 console.log(Count("abcadeecfb"));