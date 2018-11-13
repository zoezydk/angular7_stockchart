// import { Date } from "@angular/common";


export class rpadata_mssql {

    private exetimestamp: Date;
    private logtimestamp: Date;
    private taskresult: string[];


    constructor() { }
    // public get getdatestamp(): Date {
    //     return this.DateStamp;
    // }

    // public set setdatestamp(value: Date) {
    //     this.DateStamp = value;
    // }

    public get getexetimestamp(): Date {
        return this.exetimestamp;
    }

    public set setexetimestamp(value: Date) {
        this.exetimestamp = value;
    }

    public get getlogtimestamp(): Date {
        return this.logtimestamp;
    }

    public set setlogtimestamp(value: Date) {
        this.logtimestamp = value;
    }

    public get gettaskresult(): string[] {
        return this.taskresult;
    }

    public set settaskresult(value: string[]) {
        this.taskresult = value;
    };


    // convertdate(DateStamp: Date){

    //     var d = new Date();
    //     var date = d.toString().replace()

    // };

}