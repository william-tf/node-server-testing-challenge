const db = require('../accounts/../../data/dbConfig')

module.exports = {
    get(){
        return db('accounts')
    },
    getById(id){
        return db('accounts').where('id', id).first()
    },
    create(account){
        return db('accounts').insert(account)
        .then(([id]) => {
            return db('accounts').where('id', id).first()
        })
    },
    update(account){
        return db('accounts').where('id', id).first()
    },
    delete(id){
    return db('accounts').where('id', id).del()
    }
}