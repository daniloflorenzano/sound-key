const { resolve } = require("path");

class MacrosController {

    // CREATE
    static async create(data) {

        try {
            const createMacro = await Macros.create(data);
            console.log(createMacro);
        } catch (error) {
            console.log(error);
        }
    }

    // READ ALL
    static async getAll() {
        try {
            const all = await Macros.findAll({
                attributes: ['key', 'file_path']
            });

            let object = JSON.stringify(all);
            //console.log(object)
            
            return object;

        } catch (error) {
            console.log(error);
        }
    }

}