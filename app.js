import axios from "axios";

 async function getData(Number){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+Number)
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts/"+Number)
    console.log(user)
    console.log(post)
}
export default getData;
