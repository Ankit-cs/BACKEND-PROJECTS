const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,response,next)).catch((err)=>next(err)
    )
    }
}




export{asyncHandler}
/*
const asyncHandler=()=>{}
const asyncHandler=(func)=>()=>{}
const asyncHandler =(func)=>async()=>{}




*/

// const asyncHandler=(fn)=> async(req,resp,next)=> {
//     try{
//      await fn(req,resp,next);
//     }
//     catch(error){
//       resp.status(error.code||404).json({
//         sucess:false,
//         message:error.message
//       })
//     }
// }// higer order function