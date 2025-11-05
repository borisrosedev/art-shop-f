import { Button } from "../interfaces/button.interfaces";
import BaseContainer from "../models/base-container.models";
import bootstrapTextFieldComponent from "../ui/components/form/bootstrap-text-field.components";
import buttonsGroup from "../ui/components/shared/buttons-group.components";

class LoginAndRegisterContainer extends BaseContainer {
  isLoggingIn!: boolean;
  loginMain!: HTMLElement;
  formFields!: any;
  emailInput!: HTMLInputElement
  passwordInput!: HTMLInputElement
  firstnameInput!: HTMLInputElement
  lastnameInput!: HTMLInputElement
  confirmedPasswordInput!: HTMLInputElement
  buttons = [{
    id: 'submit',
    content: 'Submit',
    classNames: 'btn-primary',
    bootstrapped: false,
  }, {
    id: 'reset',
    content: 'Reset',
    type: 'reset',
    classNames: 'btn-secondary',
    bootstrapped: false,

  }] as Button[]

  constructor(onNavigate: (h: string) => void, isLoggingIn: boolean = false) {
    super(onNavigate);
    this.isLoggingIn = isLoggingIn;
    this.loginMain = document.getElementById('login-main') as HTMLElement;
    this.createUI(this.isLoggingIn);
    this.stockInputElements(this.isLoggingIn)
  }

  createUI(isLoggingIn: boolean) {
    const form = document.createElement('form')
    this.loginMain.insertAdjacentElement('afterbegin', form)
    if(!isLoggingIn){
        form.id = "register-form"

        form.insertAdjacentHTML('beforeend', bootstrapTextFieldComponent({
            id: 'firstname',
            labelContent: 'Firstname',
            helperContent: 'ex: john',
            helperId: 'firstname-helper'
        }))
        form.insertAdjacentHTML('beforeend', bootstrapTextFieldComponent({
            id: 'lastname',
            labelContent: 'Lastname',
            helperId: 'lastname-helper',
            helperContent: 'ex: doe'
        }))
        return 
    } 
    form.id = "login-form"
    form.insertAdjacentHTML('beforeend',  bootstrapTextFieldComponent({
      id: 'email',
      labelContent: 'Email',
      helperId: 'lastname-helper',
      helperContent: 'ex: john@doe.com'
    }))
    form.insertAdjacentHTML('beforeend', 
        bootstrapTextFieldComponent({
        id: 'Password',
        labelContent: 'Password',
        helperId: 'password-helper',
        helperContent: 'at least 12 characters with symboles ...'
    }))
    form.insertAdjacentHTML('beforeend', buttonsGroup(this.buttons, { ariaLabel: `buttons of the ${isLoggingIn ? 'login' : 'register'} form`}))

  }

  handleInputEvents(isLoggingIn: boolean) {
    if(!isLoggingIn){
      this.confirmedPasswordInput.addEventListener('change', this.onChange.bind(this))
      this.firstnameInput.addEventListener('change', this.onChange.bind(this))
      this.passwordInput.addEventListener('change', this.onChange.bind(this)) 
    }
    this.passwordInput.addEventListener('change', this.onChange.bind(this))
    this.emailInput.addEventListener('change', this.onChange.bind(this))
  }

  stockInputElements(isLoggingIn: boolean) {
    if(!isLoggingIn){
      this.confirmedPasswordInput = document.getElementById('confirmed-password') as HTMLInputElement;
      this.firstnameInput = document.getElementById('firstname') as HTMLInputElement;
      this.lastnameInput = document.getElementById('lastname') as HTMLInputElement;
    }
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.passwordInput = document.getElementById('password') as HTMLInputElement;

  }


  areFieldsEmpty(fields: any): boolean {
    for (const [_, value] of Object.entries(fields)) {
      if (value == "") return true;
    }
    return false;
  }

  onChange(value: string, inputId: string) {
    this.formFields[inputId] = value
  }

  onSubmit() {

    switch (this.isLoggingIn) {
      case true:
        if (this.areFieldsEmpty(this.formFields)) return;
        console.log("password ===>", this.formFields.password);
        console.log("email ===>", this.formFields.email);
        break;
      case false:
        if (this.areFieldsEmpty(this.formFields)) return;
        console.log("email ===>", this.formFields.email);
        console.log("password ===>", this.formFields.password);
        console.log(
          "confirmed password ===>",
          this.formFields.confirmedPassword
        );
        console.log("firstname ===>", this.formFields.firstname);
        console.log("lastname ===>", this.formFields.lastname);
        break;
      default:
        return;
    }
  }
}

export default LoginAndRegisterContainer;
