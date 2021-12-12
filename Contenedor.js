const {promises: fs} = require('fs');


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async save(obj) {

        const objs = await this.getAll();

        let newId

        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId }
        objs.push(newObj);

        try {
            
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
            return newId

        } catch (error) {
            throw new Error (`Error al guardar: ${error}`);
        }
    }

    async getById(id) {
        const objs = await this.getAll();
        const obj = objs.find(x => x.id == id);
        return obj;
    }

    async delteById(id) {
        const objs = await this.getAll();
        const obj = objs.filter(x => x.id !== id);
        return obj
    }

    async delteAll() {
        const objs = await this.getAll();
        let arrayObjetosMapeados = objs.map(x => x.id)

        arrayObjetosMapeados.length = 0
        const obj = arrayObjetosMapeados
        return obj
    }
    

    async getAll() {
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(objs);
        } catch (error) {
            return []
        }
    }
}

module.exports = Contenedor
