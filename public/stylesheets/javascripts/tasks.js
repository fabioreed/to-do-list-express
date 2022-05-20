const setTagAsDone = async (element, id => {
    event.preventDefault();
    try { //CHAMADA PRO BACKEND
        let headers = new Headers({ 'Content-Type' : 'application/json'});
        let body = JSON.stringify({ task: { done: element.checked }});
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' })
        let data = await response.json();
        let task = data.task;
        let parent = element.parentNode;

        if(task.done){ //ALTERA APARENCIA BASEADO NO Q O BACKEND RESPONDEU
            element.checked = true;
            parent.classLista.add('has-text-success');
            parent.classLista.add('is-italic');
        } else {
            element.checked = false;
            parent.classLista.remove('has-text-success');
            parent.classLista.remove('is-italic');
        }
    } catch (error) {
        alert('Erro ao atualizar a tarefa')
    }
})