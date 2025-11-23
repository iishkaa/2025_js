function walkDog(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = false
            if(dogwalked){
                resolve("you walk the dog");
            }
            else{
                reject("you didnt walk the dog");
            }

        },1500)
    })
}
function cleanKitchen(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didnt clean the kitchen");
            }

        },2500)
    })
}
function takeOutTrash(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = false
            if(trashTakenOut){
                resolve("You take the trash out");
            }
            else{
                reject("You didnt take the trash out");
            }

        },500)
    })
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log("you finished all the chores")
    }
    catch(error){
        console.error(error);
    }

}

doChores();



/*walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value);return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finished all the chores")})
         .catch(error => console.error(error))
 */