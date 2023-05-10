function signup(navigateTo) {
  // creación//
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const UserSignup = document.createElement('h4');
  const emailSignup = document.createElement('h4');
  const passwordSignup = document.createElement('h4');
  const form = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const question = document.createElement('h5');
  const buttonEnterSignup = document.createElement('button');
  const buttonReturnSignup = document.createElement('button');

  const logo = document.createElement('img');
  const header = document.createElement('div');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  emailSignup.textContent = 'Correo electrónico';
  passwordSignup.textContent = 'Contraseña';
  UserSignup.textContent = 'Nombre de Usuario';
  question.textContent = 'Esta aplicación esta pensada para personas que se identifican como mujeres. Por favor responde: ¿Te identificas como mujer?  ';

  buttonEnterSignup.textContent = 'Registrarte';
  buttonReturnSignup.textContent = 'X';
  buttonReturnSignup.addEventListener('click', () => {
    navigateTo('/');
  });

  // agregar clases//

  header.classList.add('header');
  logo.classList.add('logo');
  sectionForm.classList.add('sectionFormSignup');
  sectionHeader.classList.add('sectionHeaderSignup');
  form.classList.add('formSignup');
  buttonReturnSignup.classList.add('buttonReturnSignup');
  UserSignup.classList.add('subTitlesSignup');
  emailSignup.classList.add('subTitlesSignup');
  passwordSignup.classList.add('subTitlesSignup');
  buttonEnterSignup.classList.add('buttonEnterSignup');
  question.classList.add('question');

  // agrupar secciones//
  // eslint-disable-next-line max-len

  form.append(
    UserSignup,
    inputUser,
    emailSignup,
    inputEmail,
    passwordSignup,
    inputPassword,
    buttonEnterSignup,
    question,
  );
  sectionForm.append(form);
  sectionHeader.append(header, logo);
  section.append(sectionHeader, sectionForm, form);

  return section;
}
export default signup;
