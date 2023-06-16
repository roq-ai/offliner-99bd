import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().required(),
  venue_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
