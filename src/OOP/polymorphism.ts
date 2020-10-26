/*Полиморфизм - это способность класса использовать методы родительского класса, при этом второй не должен быть инициирован. */

abstract class Social123 {
    protected readonly socialId: string
    constructor(protected readonly socialId: string) {
        this.socialId = socialId;
    }

    abstract save(options?: {[key: string]: string | number}): Promise<string>

    delete(): boolean {
        return true;
    }
}

class Comment extends Social123 {
    constructor(commentId: string) {
        super(commentId);
    }

    async save() {
        //some async actons
        return '';
    }
}

const comment = new Comment('123')
comment.save() // ok
comment.delete() // ok