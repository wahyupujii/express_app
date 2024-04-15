const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /youtube endpoint', async done => {
    const res = await request.get('/youtube')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Youtube Indonesia!')
    done()
})
it('Call the /google endpoint', async done => {
    const res = await request.get('/google')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Google Indonesia!')
    done()
})
it('Call the /twitter endpoint', async done => {
    const res = await request.get('/twitter')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Twitter Indonesia!')
    done()
})
it('Call the /discord endpoint', async done => {
    const res = await request.get('/discord')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Discord Indonesia!')
    done()
})
it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('This App is running properly!')
    done()
})
it('Call the /pong endpoint', async done => {
    const res = await request.get('/ping')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Pong!')
    done()
})
it('Call the /hello/:name endpoint', async done => {
    const res = await request.get('/hello/Iqbal')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello Iqbal')
    done()
})
  

  
