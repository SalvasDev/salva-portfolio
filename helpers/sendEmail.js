import emailjs from 'emailjs-com' 

const emailjsConfig = {
  serviceID: 'service_e0qslu8',
  templateID: 'template_qan882o',
  userID: 'jHm0qhPKtbcxBtkM0'
};

export const sendEmail = (values) => {
  const { nombre,  empresa, telefono, email, comentario } = values;
  emailjs.send(
    emailjsConfig.serviceID,
    emailjsConfig.templateID,
    {
      to_name: 'Odissy',
      from_name: nombre,
      from_company: empresa,
      from_phone: telefono,
      message: comentario,
      reply_to: email
    },
    emailjsConfig.userID
  );
};