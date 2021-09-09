class MacrosController {

    // CREATE
    static async createMacro(req, res) {
        const data = {
            name: 'Ranger',
            key: 'f2',
            keyCode: '113',
            file_path: 'uploads/ranger.mp3'
          };

        try {
            const newMacro = await Macros.create(data);
            console.log(newMacro);
        } catch(error) {
            
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