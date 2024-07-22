import { IUserRepository } from "../domain/userRepository";


export class UpdateUserConfigUC{
    constructor(readonly userRepository: IUserRepository) {}

    async run(id:number, UserID: number, canName: boolean, canDescription: boolean, canAge: boolean, canWeight: boolean, canHeight: boolean, canSex: boolean, canEmail: boolean, canProfile: boolean, canGym: boolean, isPremium: boolean ):Promise<number | null>{
        try {
            const deleteUser = await this.userRepository.updateUserConfig(id, UserID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium)
            return deleteUser;
        } catch (error) {
            return null;
        }
    }
}
