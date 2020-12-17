const request = require('supertest')
const server = require("./server")
const db = require('../data/dbConfig')

const mcD = {name:"mcdongald", budget:500}
const tom = {name:"tommy", budget:5}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db('accounts').truncate()
})
afterAll(async () => {
    await db.destroy()
})

describe('endpoints', () => {
    describe('[GET] /accounts', () => {
        it("responds with 200", async () => {
            const res = await request(server).get('/api/accounts')
            expect(res.body).toHaveLength(0)
        })
    })
    it('[POST] works to /api/accounts', async () => {
        const res = await request(server).post('/api/accounts').send(mcD)
        expect(res.body.id).toBe(1)
        expect(res.body.name).toBe("mcdongald")
    })


    it("[DEL] works to /api/accounts/:id", async () => {
        await db('accounts').insert(mcD)
        let resp = await request(server).get('/api/accounts/1')
        expect(resp.body).toMatchObject(mcD)
         await request(server).delete('/api/accounts/1')
         const res = await request(server).get('/api/accounts')
        expect(res.body).toHaveLength(0)
    })
})


