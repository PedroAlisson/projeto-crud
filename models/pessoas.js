const findAll = (connect) =>{
    return new Promise((resolve, reject)=>{
            connect.query('select * from pessoas', (err, results)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
        }) 
    })
}

module.exports ={ findAll}