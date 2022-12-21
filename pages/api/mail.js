const mail = require('@sendgrid/mail');
const client = require('@sendgrid/client');

mail.setApiKey(process.env.SENDGRID_API_KEY);
client.setApiKey(process.env.SENDGRID_API_KEY);

const TEMPLATE_ID = 'd-f75ad0c562f042f48951a758445ac4d5';
const FROM_EMAIL = 'welcome@k33.com';

const LISTS = {
  aheadOfTheCurve: 'd2e4dc82-5cd8-4cc9-ad84-131389919f91'
};

/**
 * Saves the given email in Sendgrid and sends an email.
 *
 * @param req: { body: {
 *                email, // user email
 *                skipSendingEmail, // when true, this function does not send an email
 *                list // default undefined, when undefined, adds the email to the global Sendgrid list; when a specific list name is provided, adds the email to that list
 *              }}
 * @param res
 */
export default async function handler(req, res) {
  const { email, skipSendingEmail, list } = JSON.parse(req.body);

  if (list && !LISTS[list]) {
    res.status(500).json({
      status: 'error',
      message: `The provided list param ${list} is not defined! Please use one of ${Object.keys(LISTS)}, or use undefined for the global list.`
    });

    return;
  }

  let sendMailResponse = { message: 'Email was not sent, because skipSendingEmail was true' };
  let sendMailError;

  if (!skipSendingEmail) {
    const { response, error } = await sendMail({ email });

    sendMailResponse = response;
    sendMailError = error;
  }

  const { response: saveContactResponse, error: saveContactError } = await saveContact({ email, list });

  res.status(sendMailError || saveContactError ? 500 : 200).json({
    status: sendMailError || saveContactError ? 'Error' : 'OK',
    responses: {
      saveContact: saveContactResponse,
      sendMail: sendMailResponse
    },
    errors: {
      saveContact: saveContactError,
      sendMail: sendMailError
    }
  });
}

const sendMail = async ({ email }) => {
  try {
    const [response] = await mail.send({
      from: FROM_EMAIL,
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: {}
        }
      ],
      template_id: TEMPLATE_ID
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const saveContact = async ({ email, list }) => {
  const data = list ? {
    contacts: [{ email }],
    list_ids: [LISTS[list]]
  } : {
    contacts: [{ email }],
  };

  const request = {
    url: '/v3/marketing/contacts',
    method: 'PUT',
    body: data
  };

  try {
    const [response] = await client.request(request);
    return { response };
  } catch (error) {
    return { error };
  }
};
