import axios from 'axios';


export const setsData = async (data, type, data2= null, type2 = null) => {
    try {
        const url = `http://127.0.0.1:8080/api/v1/${type}`;
        const res = await axios({
            method: 'POST',
            url,
            data: {
                name: data.name,
                age: data.age,
                photo: data.photo
            }
        });

        if (res.data.status === 'success') {
            if(type2 === 'kids'){
                await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8080/api/v1/kids',
                    data: {
                        name: data.name,
                        age: data.age,
                        photo: data.photo,
                        parents: res.data.data.parents._id
                    }
                });
            }
        }
    } catch (err) {
        console.log('error', err.response.data.message);
    }
};
