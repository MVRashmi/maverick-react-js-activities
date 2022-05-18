function Profile() {
    let name = 'Rashmi';
    return (<div>
        <p>Name: {name}</p>
    </div>)
}

export function Picture(){
    let imageURL ='https://www.bing.com/th?id=OIP.yDahSWDUUff_WJMoP6O6rQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';
    return (<div>
        <img src ={imageURL} width ="100" height="100"/>
    </div>)
}

export default Profile;