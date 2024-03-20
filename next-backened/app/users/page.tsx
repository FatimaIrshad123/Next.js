import axios from "axios";

async function fetchdata(){
  let res = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  return res.data
}
export default async function User(){
        const data = await fetchdata();
        return <div>
            {data.email}
            {data.name}
        </div>
}