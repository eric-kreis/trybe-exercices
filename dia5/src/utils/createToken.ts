import crypto from 'crypto';

export default () => crypto.randomBytes(6).toString('hex');
