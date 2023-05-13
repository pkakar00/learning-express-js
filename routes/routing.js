const express=require('express')
const router=express.Router()
const path=require('path')
const options=[{name:"Website 1",link:"/web1"},
{name:"Website 2",link:"/web2"},
{name:"Website 3",link:"/web3"},
{name:"Website 4",link:"/web4"},
{name:"Website 5",link:"/web5"}]
router.get('/',(req,res)=>
{
    res.render('../views/home',{options:options})
})
router.get('/web1',(req,res)=>
{
    res.render('../views/web1')
})
router.get('/web2',(req,res)=>
{
    res.render('../views/web2')
})
router.get('/web3',(req,res)=>
{
    res.render('../views/web3')
})
router.get('/web4',(req,res)=>
{
    res.render('../views/web4')
})
router.get('/web5',(req,res)=>
{
    res.render('../views/web5')
})

module.exports=router