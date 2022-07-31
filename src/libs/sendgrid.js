const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const emailSender = async (email) => {

  const msg = {
    to: email,
    from: 'ruidosocerebro@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    const sent = await sgMail.send(msg)
    console.log(sent[0].statusCode)
    console.log(sent[0].headers)
    return sent;
  } catch (error) {
    console.error(error);
  }
};

module.exports = emailSender;
