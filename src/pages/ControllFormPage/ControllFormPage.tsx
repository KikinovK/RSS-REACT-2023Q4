import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Section from '../../ui/Section/Section';
import Grid from '../../ui/Grid/Grid';
import FiledText from '../../ui/Controll/FiledText/FiledText';
import Button from '../../ui/Button/Button';
import FiledSelect from '../../ui/Controll/FiledSelect/FiledSelect';
import CheckBox from '../../ui/Controll/CheckBox/CheckBox';

import { FormData } from '../../validation/schema';
import { IData } from '../../types/interface';
import { addData } from '../../reducers/dataReducer';
import schema from '../../validation/schema';
import constants from '../../constants/constants';

const ControllFormPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (formData: FormData) => {
    const data: IData = {
      name: formData.name,
      age: formData.age.toString(),
      email: formData.email,
      password: formData.password,
      gender: formData.gender as 'male' | 'female',
      accept: formData.accept,
    };
    dispatch(addData(data));
    navigate(constants.PATH.MAIN);
  };

  return (
    <Section>
      <h2>ControllFormPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item sm={6}>
            <FiledText
              register={register}
              name="name"
              id="name"
              label="Name"
              isError={!!errors.name?.message}
              errorMessage={errors.name?.message}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              register={register}
              name="age"
              id="age"
              label="Age"
              isError={!!errors.age?.message}
              errorMessage={errors.age?.message}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              register={register}
              name="email"
              type="email"
              id="email"
              label="Email"
              isError={!!errors.email?.message}
              errorMessage={errors.email?.message}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              register={register}
              name="password"
              type="password"
              id="password"
              label="Password"
              isError={!!errors.password?.message}
              errorMessage={errors.password?.message}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledText
              register={register}
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              label="Confirm password"
              isError={!!errors.passwordConfirm?.message}
              errorMessage={errors.passwordConfirm?.message}
            />
          </Grid>
          <Grid item sm={6}>
            <FiledSelect
              register={register}
              name="gender"
              id="gender"
              label="Gender"
              isError={!!errors.gender?.message}
              errorMessage={errors.gender?.message}
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </Grid>
          <Grid item sm={12}>
            <CheckBox
              register={register}
              name="accept"
              label="By clicking 'Accept T&C', you agree to the terms and conditions governing the use of our services."
              id="accept"
              isError={!!errors.accept?.message}
              errorMessage={errors.accept?.message}
            />
          </Grid>
        </Grid>
        <Button type="submit" classNames={['btn--submit']} disabled={!isValid}>
          Submit
        </Button>
      </form>
    </Section>
  );
};

export default ControllFormPage;
