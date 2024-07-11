var modal = document.getElementById('modal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.querySelector('.close');

openModalBtn.onclick = function() {
  openModal();
}

closeModalBtn.onclick = function() {
  closeModal();
}

var currentStep = 1;

function openModal() {
  currentStep = 1;
  document.querySelector('.step.step-1').classList.add('active');
  modal.style.display = 'block';
}

function nextStep(step) {
  document.querySelector('.step-' + step).classList.remove('active');
  step++;
  document.querySelector('.step-' + step).classList.add('active');
  currentStep = step;
}

function prevStep(step) {
  document.querySelector('.step-' + step).classList.remove('active');
  step--;
  document.querySelector('.step-' + step).classList.add('active');
  currentStep = step;
}

function submitModal() {
  // Lógica de envio do modal
  closeModal();
}

function closeModal() {
  modal.style.display = 'none';
  currentStep = 1;
  document.querySelector('.step.step-1').classList.add('active');
  document.querySelector('.step.step-2').classList.remove('active');
  document.querySelector('.step.step-3').classList.remove('active');
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
