export class UserDto {
    id;
    email;
    name;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.name = model.name;
    }
}