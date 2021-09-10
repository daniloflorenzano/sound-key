class MacrosController {

    // CREATE
    static async create(data) {
        // const data = {
        //     name: 'Ranger',
        //     key: 'f2',
        //     keyCode: '113',
        //     file_path: 'uploads/ranger.mp3'
        //   };

        try {
            const createMacro = await Macros.create(data);
            console.log(createMacro);
        } catch(error) {
            console.log(error);
        }
    }

    // READ ALL
    static async getAll(req, res) {
        try {
            const all = await Macros.findAll();
            console.log(all);
        } catch (error) {
            
        }
    }

}