/* Task 2 - Debounce form */

const CORRECT_INPUT_LENGTH = {
  min: 5,
  max: 15
};
const CLASS_NAMES = {
  wrong: 'wrong',
  correct: 'correct'
};


const signInForm = document.querySelector('#signInForm');

const handleInputValidation = ({ target }) => {
  const isValid =
    target.value.length > CORRECT_INPUT_LENGTH.min &&
    target.value.length < CORRECT_INPUT_LENGTH.max
  ;
  if (isValid) {
    target.classList.add(CLASS_NAMES.correct);
    target.classList.remove(CLASS_NAMES.wrong);
  } else {
    target.classList.add(CLASS_NAMES.wrong);
    target.classList.remove(CLASS_NAMES.correct);
  }
};

const debounceMs = 800;

signInForm.addEventListener('input', _.debounce(handleInputValidation, debounceMs));
// signInForm.addEventListener('input', handleInputValidation); //* aici e utilitatea debounce //