

let subject=["HTML","CSS" ,"Java","JavaScript","Python"]

let subject_data=document.getElementById("subjects")

subject.forEach(ele=>{
    let list_item=document.createElement("li")
    list_item.innerText=ele
    subject_data.append(list_item)
})
