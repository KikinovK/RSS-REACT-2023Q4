import { FC, useRef } from 'react';
import * as Yup from 'yup';

import Grid from '../../ui/Grid/Grid';
import FiledText from '../../ui/UnControll/FiledText/FiledText';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import schema from '../../validation/schema';
import FiledSelect from '../../ui/UnControll/FiledSelect/FiledSelect';
import CheckBox from '../../ui/UnControll/CheckBox/CheckBox';

interface IFormData {
  [key: string]: string | number | boolean | undefined;
}

const UnControllFormPage: FC = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const formRefs = {
    name: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    age: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    email: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    password: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    passwordConfirm: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    gender: {
      input: useRef<HTMLSelectElement>(null),
      wrap: useRef<HTMLDivElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
    accept: {
      input: useRef<HTMLInputElement>(null),
      wrap: useRef<HTMLLabelElement>(null),
      messageError: useRef<HTMLElement>(null),
    },
  };

  type TFormFieldName = keyof typeof formRefs;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;
    }

    const formData: IFormData = {};
    Object.keys(formRefs).forEach((fieldName) => {
      const fieldNameTyped = fieldName as TFormFieldName;
      const inputElement = formRefs[fieldNameTyped].input.current;

      if (inputElement) {
        if (
          inputElement instanceof HTMLInputElement &&
          inputElement.type === 'checkbox'
        ) {
          formData[fieldNameTyped] = inputElement.checked;
        } else {
          formData[fieldNameTyped] = inputElement.value ?? '';
        }
      } else {
        formData[fieldNameTyped] = '';
      }

      const messageErrorRef = formRefs[fieldNameTyped].messageError;
      if (messageErrorRef && messageErrorRef.current) {
        messageErrorRef.current.classList.remove('filed__error--on');
      }
      const wrapRef = formRefs[fieldNameTyped].wrap;
      if (wrapRef && wrapRef.current) {
        wrapRef.current.classList.remove('filed__wr--error');
      }
    });
    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (validationErrors) {
      const errorsByField: { [key: string]: string } = {};

      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            errorsByField[error.path] = error.message;
          }
        });
      }

      Object.keys(errorsByField).forEach((fieldName) => {
        const fieldNameTyped = fieldName as TFormFieldName;

        const messageErrorRef = formRefs[fieldNameTyped].messageError;
        if (messageErrorRef && messageErrorRef.current) {
          messageErrorRef.current.textContent = errorsByField[fieldName];
          messageErrorRef.current.classList.add('filed__error--on');
        }

        const wrapRef = formRefs[fieldNameTyped].wrap;
        if (wrapRef && wrapRef.current) {
          wrapRef.current.classList.add('filed__wr--error');
        }
      });
    }

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = false;
    }
  };

  return (
    <Section>
      <h2>UnControllFormPage</h2>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item sm={6}>
            <FiledText
              inputRef={formRefs.name.input}
              name="name"
              id="name"
              label="Name"
              errorMessageRef={formRefs.name.messageError}
              wrapRef={formRefs.name.wrap}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              inputRef={formRefs.age.input}
              name="age"
              id="age"
              label="Age"
              errorMessageRef={formRefs.age.messageError}
              wrapRef={formRefs.age.wrap}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              inputRef={formRefs.email.input}
              name="email"
              id="email"
              label="Email"
              errorMessageRef={formRefs.email.messageError}
              wrapRef={formRefs.email.wrap}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              inputRef={formRefs.password.input}
              name="password"
              id="password"
              label="Password"
              type="password"
              errorMessageRef={formRefs.password.messageError}
              wrapRef={formRefs.password.wrap}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              inputRef={formRefs.passwordConfirm.input}
              name="passwordConfirm"
              id="passwordConfirm"
              label="Confirm password"
              type="password"
              errorMessageRef={formRefs.passwordConfirm.messageError}
              wrapRef={formRefs.passwordConfirm.wrap}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledSelect
              selectRef={formRefs.gender.input}
              name="gender"
              label="Gender"
              errorMessageRef={formRefs.gender.messageError}
              wrapRef={formRefs.gender.wrap}
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </Grid>
          <Grid item sm={12}>
            <CheckBox
              inputRef={formRefs.accept.input}
              name="accept"
              label="By clicking 'Accept T&C', you agree to the terms and conditions governing the use of our services."
              errorMessageRef={formRefs.accept.messageError}
              wrapRef={formRefs.accept.wrap}
              id="accept"
            />
          </Grid>
        </Grid>
        <Button
          buttonRef={submitButtonRef}
          type="submit"
          classNames={['btn--submit']}
        >
          Submit
        </Button>
      </form>
    </Section>
  );
};

export default UnControllFormPage;
