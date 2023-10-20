import dayjs, { Dayjs } from 'dayjs';

export const rules = {
    require: (message: string = 'Это обязательное поле') => ({
        required: true, 
        message, 
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Dayjs) {
            if(dayjs(value) >= dayjs()) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        }
    })
};