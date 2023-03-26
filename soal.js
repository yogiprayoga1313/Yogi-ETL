// soal contoh
function p1(){
    console.log('p1 done')
}
function p2(callback){
    setTimeout(() => {
        console.log('p2 done')
        callback()
    }, 1000);
}

function p3(callback){
    setTimeout(() => {
        // console.log('p3 done')
        callback('p3 done')
    }, 3000);
}

p1()
p2(() =>{
    // console.log()
    p3((x) => {
        console.log(x)
    })
})


// code ini beda dari soal bang, yang p3 saya kasih setTimeout