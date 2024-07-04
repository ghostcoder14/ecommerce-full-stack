import { products } from "./Constants/data.js"
import Products from "./Model/productschema.js";


const Defaultdata = async() => {
     try {
       await Products.insertMany(products)
        console.log("\n Data imported sucessfully in default.js file " );
     } catch (error) {
        console.error("error in default.js file and the error is ",error.message)
     }
}
export default Defaultdata 