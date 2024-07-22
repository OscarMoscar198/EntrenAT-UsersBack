import { Request, Response } from "express";
import { UpdateUserConfigUC } from "../../application/updateUserConfigUC";


export class UpdateUserConfigController {
    constructor(readonly updateUserConfig : UpdateUserConfigUC) {}
    async run(req:Request, res:Response) {
        try {
            let {
                id,
                UserID,
                canName,
                canDescription,
                canAge,
                canWeight,
                canHeight,
                canSex,
                canEmail,
                canProfile,
                canGym,
                isPremium,
            } = req.body
        
            let updateUserConfig = await this.updateUserConfig.run(id, UserID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium)

            if(updateUserConfig){
                return res.status(200).send({
                    status:"succes",
                    data:{
                        InactivatedUser: "usuario: " + id + " inactivo",
                    }
                })
            }
            if (!updateUserConfig) {
                return res.status(404).send({
                    status: "error",
                    message: "no hay usuario con esa id."
                });
            }
        } catch (error) {   
            return res.status(500).send({
                status: "error",
                message: "ocurrio un error al intentar inactivar un usuario."
            });
        }
    }
}