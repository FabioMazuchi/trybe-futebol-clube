import Joi = require('joi');
import { IValidatorLogin } from '../protocols';

export default class ValidLoginBody implements IValidatorLogin {
  constructor(private email: string, private password: string) {
    this.email = email;
    this.password = password;
  }

  validEmail(): boolean {
    const myEmail = this.email;
    const schema = Joi.object({
      myEmail: Joi.string().email(),
    });

    const validEmail = schema.validate({ myEmail });
    if (validEmail.error) return false;
    return true;
  }

  validPassword(): boolean {
    const myPassword = this.password;
    const schema = Joi.object({
      myPassword: Joi.string().min(6),
    });

    const validPassword = schema.validate({ myPassword });
    if (validPassword.error) return false;
    return true;
  }

  valid(): boolean {
    if (!this.validEmail() || !this.validPassword()) return false;
    return true;
  }
}
