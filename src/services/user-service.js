const UserRepository = require('../repository/user-repository');

class UserService {
    constructor(){
        this.UserRepository = new UserRepository();
    }
    async create(data)
    {
        try {
            const user = await this.UserRepository.create(data);
            return user;

        }
        catch(error)
        {
            console.log("Something went wron with the Services Layer");
            throw error;
        }
    }

}

module.exports  =UserService;