postList.addEventListener('click',(e)=>{
    let deltBtnPress = e.target.id == 'delete_post';
    
 //    let id = e.target.parentElement.dataId.id;
 let id =e.target.parentElement.dataset.id;
    // Delete Method
    if(deltBtnPress){

     fetch(`https://my-bland.herokuapp.com/api/v1/blogs/${id}`,{
         method:'DELETE',
         headers:{
             'Content-Type':'application/json',
             //'Authorization': 'bearer '  + token,
         }
     })
     .then(res => res.json())
     .then(()=> location.reload())
    }
   
   
})