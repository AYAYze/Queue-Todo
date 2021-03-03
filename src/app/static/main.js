let tasks = document.getElementById("tasks");

function AddQueue(e){
    if(e.keyCode == 13 && e.path[0].value != '') {
        let taskWrap = document.createElement("div");
        taskWrap.className = "taskWrap";

        let taskName = e.path[0].value;
        let taskTitle = makeTaskName(taskName);
        let checkbox = makeCheckBox();
        taskWrap.appendChild(checkbox);
        taskWrap.appendChild(taskTitle);

    
        //작업목록에 추가. taskWrap이 최종적으로 추가될 DOM이다.
        tasks.insertBefore(taskWrap, tasks.firstChild);

        //Last Child Style
        update(tasks);
        document.getElementById("taskInput").value = '';
    }
}

function makeTaskName(title) {
    let t = document.createElement("div");
    t.innerText = title;
    t.className = "task";

    return t;
}

function makeCheckBox(){
    let c = document.createElement("input");
    c.type = "checkbox";
    c.className = "check";
    c.marginLeft = "10px";
    c.marginRight = "10px";

    c.addEventListener("click", deleteTask)

    return c;
}

document.getElementById("taskInput").addEventListener("keydown", AddQueue)

function deleteTask(e){
    let willDeleted = e.target.parentElement;
    let parent = willDeleted.parentNode;

    parent.removeChild(willDeleted);
    if(parent.childElementCount != 0) update(tasks)
}

function update(tasks){
    let lastDom = tasks.lastElementChild;
    lastDom.style.marginTop = "15px";
    lastDom.style.backgroundColor = "#fad5ff";
    tasks.scrollTop = tasks.scrollHeight;

}