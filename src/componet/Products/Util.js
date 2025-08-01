import { useEffect, useState } from "react";

function useFetchapi(){
     let [pro, setpro] = useState([]);
    let [isLoading, Setisloadind] = useState(false);
    let [errmsg, seterrmsg] = useState("");
    let [textsearch, settextserach] = useState("");
    let [filterditems, setfilterditems] = useState([]);

    useEffect(() => {
        GetProd();
    }, []);

    async function GetProd() {
        try {
            Setisloadind(true);
            let res = await fetch("https://fakestoreapi.in/api/products");
            if (!res.ok) throw new Error("something went wrong");
            let data = await res.json();


            setpro(data.products);
            setfilterditems(data.products);
        } catch (err) {
            seterrmsg(err.message);
        } finally {
            Setisloadind(false);
        }
    }
    return [pro, isLoading, errmsg, textsearch, filterditems, GetProd,setfilterditems,seterrmsg,setpro,settextserach]


}
export default useFetchapi;