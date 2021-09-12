class MacrosController {

    static async create(data) {

        try {
            const createMacro = await Macros.create(data);
            console.log(createMacro);
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const all = await Macros.findAll({
                attributes: ['keyCode', 'file_path']
            });

            let object = JSON.stringify(all);
            
            return object;

        } catch (error) {
            console.log(error);
        }
    }

}
