document.addEventListener('DOMContentLoaded', () => {
  const addDefinitionBtn = document.getElementById('addDefinitionBtn');
  addDefinitionBtn.addEventListener('click', addDefinition);
});

function addDefinition() {
  const word = document.getElementById('wordInput').value;
  const definition = document.getElementById('definitionInput').value;

  if (!word || !definition) {
      document.getElementById('storeResult').textContent = 'Please fill in both fields.';
      return;
  }

  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://localhost:3500/api/definitions', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              document.getElementById('storeResult').textContent = xhr.responseText;
          } else {
              document.getElementById('storeResult').textContent = 'Error: ' + xhr.status;
          }
      }
  };

  const data = `word=${encodeURIComponent(word)}&definition=${encodeURIComponent(definition)}`;
  xhr.send(data);
}
  