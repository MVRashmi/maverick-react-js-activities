function ProfileProps(props) {
    let name = props.username;
    let age = props.age;
    return (<div>
        <p>Name: {name},Age: {age}</p>
    </div>)
}

export function PictureProps(props){
    let imageURL =props.url;
     return (<div>
        <img src ={imageURL} width ="100" height="100"/>
    </div>)
}

export default ProfileProps;