import { log } from '../../utils/helpers'

export const ContactUsPayload = (formData) => {
  log('ContactUsPayload', formData)
  return {
    'name': formData.name,
    'email': formData.email,
    'subject': formData.subject,
    'message': formData.message
  }
}
