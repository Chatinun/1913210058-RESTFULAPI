let user = {
    name: 'Chatinun',
    nickname: 'Max',
    hobby: 'sleep',
    address: 'Pattanakarn 44',
    province: {
        province: 'Bangkok',
        postcode: '10250'
    }
};

const ShowData = ({nickname, hobby, province:{postcode}}) => {
    return `
    My nickname is ${nickname}, My hobby is ${hobby}
    and my postcode is ${postcode}
    `
}

console.log(ShowData(user));
