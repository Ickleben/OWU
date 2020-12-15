export default function  (props){
    import('./Comment.css')
let {item}=props
    console.log(item)
    return (
        <div>
            <div className='comm-num-title'> {item.id}.{item.name}</div><div>{item.title}-{item.body}</div>
        </div>
    );
}