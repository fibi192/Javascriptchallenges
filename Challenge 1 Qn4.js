let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
 
// Print required answer
let s = PalindromicStrings(arr, N);
if(s.length == 0)
    document.write("-1");
for(let st of s)
    document.write(st," ");