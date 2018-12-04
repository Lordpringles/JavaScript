function sex2(art, age2){
     if (sex.toUpperCase() == 'MALE'){
        console.log('you are '+`${art} ${age2}`+ ' male')
    } else if (sex.toUpperCase() == 'FEMALE'){
        console.log('you are ' +`${art} ${age2}`+' female')
    } else {
        console.log('invalid sex')
    }
}

let age = 15;
let sex = 'female'

if (age <= 17){
    sex2('an','underage');
}else if (age >= 18 && age < 55){
    sex2('an','adult');
}else if (age >= 55){
    sex2('a','senior');
}else {
    console.log('invalid age');
}
