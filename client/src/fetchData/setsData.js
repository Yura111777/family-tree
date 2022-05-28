import axios from 'axios';


export const setsData = async (data1, type, data2= null, type2 = null, select = {status:false, id:null}) => {
    try {
        console.log(select)
        const url = `http://127.0.0.1:8080/api/v1/${type}`;
        let res;
        const data = data1;
        if(!select.status) {
            res = await axios({
                method: 'POST',
                url,
                data
            });
        }
        let res2;
        if (res?.data.status === 'success' || select.status) {
            if(type2 === 'parents'){
                const data = new FormData();
                select.status ?  data.append( 'kids', select.id) :  data.append( 'kids', res.data.data.kids._id)
                const entries = select.status ? data1.entries() : data2.entries()
                for(let [key,val] of entries){
                    data.append( key, val)
                }

                res2 = await axios({
                    method: 'POST',
                    url: `http://127.0.0.1:8080/api/v1/${select.status ? 'kids' : 'parents'}`,
                    data
                });
            }
        }
        return {
            dataDB: {
                kids: res ? res.data.data : [],
                parents: res2 ? res2.data.data : []
            },
            command: 'close-modal'
        }
    } catch (err) {
        console.log('error', err);
    }
};
