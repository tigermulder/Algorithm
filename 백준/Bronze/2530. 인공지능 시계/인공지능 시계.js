const fs=require('fs')
let input=fs.readFileSync('/dev/stdin').toString().split('\n')
v=input[0].split(' ').map(x=>+x)
h=parseInt(v[0])
m=parseInt(v[1])
s=parseInt(v[2])
n=parseInt(input[1])
sum=s+n
m=m+parseInt(sum/60)
sum%=60
h=h+parseInt(m/60)
m%=60
h%=24
console.log("%d %d %d",h,m,sum)
