import axios from 'axios';


export const setsData = async (data, type, data2= null, type2 = null) => {
    try {
        const url = `http://127.0.0.1:8080/api/v1/${type}`;
        const res = await axios({
            method: 'POST',
            url,
            data
        });

        if (res.data.status === 'success') {
            if(type2 === 'kids'){
                const data = new FormData();
                data.append( 'parents', res.data.data.parents._id)
                for(let [key,val] of data2.entries()){
                    data.append( key, val)
                }
                await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8080/api/v1/kids',
                    data
                });
            }
        }
        return 'close-modal'
    } catch (err) {
        console.log('error', err.response.data.message);
    }
};
