'use client';
import { Observable, Subject } from "rxjs"


export class SubjectManager {
    Modal$ = new Subject<IModalInfo>();

    getModalInfo(): Observable<IModalInfo> {
        return this.Modal$.asObservable()
    }
    setModalInfo(data: IModalInfo) {
        this.Modal$.next(data)
    }
    resetModalInfo() {
        this.Modal$.next({ title: '', message: '', isOpen: false })
    }

}