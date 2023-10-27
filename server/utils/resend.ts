import { Resend } from 'resend';

let _resend: Resend;

export const useResend = () => {
  if (!_resend) {
    const config = useRuntimeConfig();

    _resend = new Resend(config.resend.apiKey);
  }

  return _resend;
};
