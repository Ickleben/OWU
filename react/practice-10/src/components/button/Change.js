import Modal from "../modal/Modal";
export default function  (){
   const Change=(e)=>{
e.preventDefault()
return
   }
    return (

        <div>

            <form onSubmit={Change}>
                <button>Change</button>
            </form>
            <Modal/>
        </div>
    );
}