const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dac5676@gmail.com', // Tu dirección de correo electrónico
    pass: 'uawqzqgxgiibomfr', // Tu contraseña de correo electrónico
  },
});

// Controlador para enviar correo electrónico
exports.sendEmail = (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'dac5676@gmail.com', // Tu dirección de correo electrónico
    to: to, // Destinatario
    subject: subject, // Asunto
    text: text, // Cuerpo del correo electrónico
  };

  // Envío del correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Hubo un error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
};
