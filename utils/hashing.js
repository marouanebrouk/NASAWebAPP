import { hash,compare} from 'bcryptjs';

export const doHash =  (value, saltValue) => {
    const result =  hash(value, saltValue);
    return result;
};


export const doHashValidation = (value, hashed) => {
    const result = compare(value, hashed);
    return result;
};