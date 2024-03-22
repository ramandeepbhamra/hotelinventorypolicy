import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static validateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return {
                invalidName: true
            };
        }

        return null
    }

    static validateSpecialChar(char: string) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)) {
                return {
                    invalidSpecialChar: true
                };
            }

            return null
        }
    }

    // Curently has an issue as once control.get('checkOutDate')?.setErrors is set it is not removable 
    static validateDate(control: FormGroup) {
        const checkInDate: any = new Date(control.get('checkInDate')?.value);
        const checkOutDate: any = new Date(control.get('checkOutDate')?.value);

        const diffTime = checkOutDate - checkInDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        console.log('diffTime:', diffTime);
        console.log('diffDays:', diffDays);

        if (diffDays < 0) {
            control.get('checkOutDate')?.setErrors(
                { invalidDate: true }
            );

            return {
                invalidDate: true
            }
        }

        //https://stackoverflow.com/questions/43445315/angular2-reactive-forms-delete-error
        if (control.get('checkOutDate')?.hasError('invalidDate')) {
            delete control.get('checkOutDate')?.errors?.["invalidDate"];
            control.get('checkOutDate')?.updateValueAndValidity({ onlySelf: true });
        }

        return null;
    }
}