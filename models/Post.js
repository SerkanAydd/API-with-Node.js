const db = require('../config/db');

class Post{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    save() {
        let sql = `
        INSERT INTO posts(
            name,
            email
        )
            VALUES(
            '${this.name}',
            '${this.email}'
        )
        `;

        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM posts WHERE id = ${id};`;

        return db.execute(sql);
    }
    

    static findAll() {
        let sql = "SELECT * FROM posts;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Post;

