const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

function criarTarefa(texto) {
  if (!listaTarefas) return; 

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = texto;

  span.addEventListener('click', () => {
    span.classList.toggle('completed'); 
  });

  const removerBtn = document.createElement('button');
  removerBtn.textContent = 'X';
  removerBtn.style.marginLeft = '10px';
  removerBtn.style.cursor = 'pointer';

  removerBtn.addEventListener('click', () => {
    if (listaTarefas.contains(li)) {
      listaTarefas.removeChild(li);
    }
  });

  li.appendChild(span);
  li.appendChild(removerBtn);
  listaTarefas.appendChild(li);
}

if (adicionarBtn && tarefaInput) {
  adicionarBtn.addEventListener('click', () => {
    const tarefaTexto = (tarefaInput instanceof HTMLInputElement) ? tarefaInput.value.trim() : '';
    if (tarefaTexto !== "") {
      criarTarefa(tarefaTexto);
      tarefaInput.value = '';
      tarefaInput.focus();
    }
  });

  tarefaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      adicionarBtn.click();
    }
  });
}
