export  interface IProduct{
    id:number;
    src:string;
    title:string;
    content:string;
   }
   const  _products : IProduct[] = [
    {id : 1,title : 'sdad', src:'asdsafs',content :'dsadsafas'}  //拟造数据
    ]
export const getProducts = async()=>{
    (100)
    return _products
}
export const buyProducts = async()=>{
    await wait(100)
    return Math.random()>0.5
    async function wait (dely:number){
    return new Promise((resolve)=>setTimeout(resolve,dely)) 
    } 
}