import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';


export const ajv = new Ajv.default({
  formats: { email: true },
  strict: true,
  strictTypes: true,
  removeAdditional: true,
  useDefaults: true,
  coerceTypes: true,
  allErrors: true,
});

ajvFormats(ajv, ['email']);
