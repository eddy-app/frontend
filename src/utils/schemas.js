import * as yup from "yup"

export const contactSchema = yup.object().shape({
  firstname: yup.string().trim().required(),
  lastname: yup.string().trim().required(),
  email: yup.string().email().required(),
})
