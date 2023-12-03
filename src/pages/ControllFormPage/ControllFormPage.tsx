import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Section from '../../ui/Section/Section';
import Grid from '../../ui/Grid/Grid';
import FiledText from '../../ui/Controll/FiledText/FiledText';
import { FormData } from '../../validation/schema';

import schema from '../../validation/schema';
import Button from '../../ui/Button/Button';

const ControllFormPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => console.log(data);

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
              type="passwordConfirm"
              id="passwordConfirm"
              label="Confirm password"
              isError={!!errors.passwordConfirm?.message}
              errorMessage={errors.passwordConfirm?.message}
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
