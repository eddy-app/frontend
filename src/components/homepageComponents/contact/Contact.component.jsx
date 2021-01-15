import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { contactSchema } from "../../../utils/schemas"
import Page from "../../../App.styled"
import Input from "../../common/input/Input.component"
import Error from "../../common/formError/FormError.component"
import ContactBtn from "../../common/customBtn/CustomBtn.component"
import ContactSection from "./Contact.styled"

const Contact = () => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <ContactSection.container id="contact">
      <Page.container>
        <h4>Contact</h4>
        <ContactSection.form onSubmit={handleSubmit(onSubmit)}>
          <ContactSection.formHeader>
            <div>
              <Input
                half
                type="text"
                name="firstname"
                error={errors.firstname ? true : false}
                placeholder="First Name"
                ref={register}
              />
              {errors.firstname && <Error message="First Name is required" />}
            </div>
            <div>
              <Input
                half
                type="text"
                name="lastname"
                error={errors.lastname ? true : false}
                placeholder="Last Name"
                ref={register}
              />
              {errors.lastname && <Error message="Last Name is required" />}
            </div>
          </ContactSection.formHeader>
          <div>
            <Input
              type="email"
              name="email"
              error={errors.email ? true : false}
              placeholder="Email"
              ref={register}
            />
            {errors.email && <Error message="Email is required" />}
          </div>
          <ContactBtn contact type="submit" text="Contact" />
        </ContactSection.form>
      </Page.container>
    </ContactSection.container>
  )
}

export default Contact
