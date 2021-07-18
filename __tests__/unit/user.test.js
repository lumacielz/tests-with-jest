const{ User } = require('../../src/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');
const { INTEGER } = require('sequelize');
describe ('User', () =>{
    beforeEach(async()=>{
        await truncate();
    })
    it ('should encrypt user password', async()=> {
        const user = await User.create({name:'Luiza',email:'luiza@gmail.com',password:'123456'});
        expect(await bcrypt.compare('123456',user.password_hash)).toBe(true);
    })
})