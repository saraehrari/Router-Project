import { useLocation, useNavigate } from "react-router-dom";

export default function login({onlogin}){
const navigates= useNavigate();
const location= useLocation();



const from= location.state?.from?.pathname | "/checkout"
function handlelogin(){
    onlogin();
    navigates(from, {replace:true})
}
}