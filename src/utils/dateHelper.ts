import moment from "moment"



const dateHelper = (date:string)=>{


    return moment.utc(date).local().fromNow()
}
export default dateHelper