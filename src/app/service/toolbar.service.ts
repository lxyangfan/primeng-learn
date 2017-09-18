import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolBarService {

    get getButtons(): Observable<any> {
        const buttons = [
            {
                label: '新增',
                icon: 'fa-plus',
                class: 'ui-button-success',
                url: 'http://www.baidu.com'
            },
            {
                label: '修改',
                icon: 'fa-refresh',
                class: 'ui-button-info',
                url: 'http://www.google.com'
            }
        ];
        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next(buttons);
            }, 700);
        });
    }

}