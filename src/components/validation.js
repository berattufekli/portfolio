import * as yup from "yup"

const validations = yup.object().shape({
    name: yup.string().required("Zorunlu alan."),
    email: yup.string().email("Geçerli bir e-mail girin.").required("Zorunlu alan."),
    subject: yup.string().required("Zorunlu alan."),
    message: yup.string().required("Zorunlu alan."),
});

export default validations;