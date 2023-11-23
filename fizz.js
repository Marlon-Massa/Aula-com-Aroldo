const param = [];
for (let i = 0; i < 150; i += 1) {
  param.push(i);
}

function fizzBuzz(limit){
    for  (let i = 0; i < limit.length; i++){


        if (limit[i] % 3 === 0)
        console.log('fizz');
    else if (limit[i] % 5 === 0)
    console.log('buzz');
    else
    console.log(limit[i])
    }
}
fizzBuzz(param)

