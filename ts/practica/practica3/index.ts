const promesa1 = async():Promise<string>=>{
    return await new Promise((res,rejc)=>{
        setTimeout(()=>{
            res("hola pendejos")
        },2000)
   })

}

promesa1().then((res)=>console.log(res))
