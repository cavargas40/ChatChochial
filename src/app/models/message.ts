export class Message {
    public app_user_name: string;
    public timestamp: Object;
    public text: string;
    public img: string;

    public constructor(init?: Message) {
        Object.assign(this, init);
    }
}