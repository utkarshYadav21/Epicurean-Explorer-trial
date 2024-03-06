module.exports = fn =>{
    return (req,res,next)=>{
      console.log("Data has error and is in catch async")
      fn(req,res,next).catch(next)
    }
}