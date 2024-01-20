const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
const Product = require('../models/ProductCard');
const User = require('../models/User');
const UserProduct = require('../models/UserProduct');

const key = "AIzaSyARj3WZVsYwxmVkXhJUwSBkIam-CrcgTL4"
const cx = "31e5ee6051dd446c5"
const find = async (pdt) => {
    const res = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${pdt}`)
    const js = await res.json()
    const urls = []
    console.log(js.items.length)
    for (const item of js.items) {
        if (item.displayLink.includes("flipkart") && item.link.includes("/p/")) {
            urls.push({ domain: item.displayLink, link: item.link })
        } else if (item.displayLink.includes("amazon") && item.link.includes("/dp/")) {
            urls.push({ domain: item.displayLink, link: item.link })
        } else if (item.displayLink.includes("ebay") && item.link.includes("/itm/")) {
            urls.push({ domain: item.displayLink, link: item.link })
        }
    }
    console.log(urls)
    const result = []
    for (const url of urls) {
        const res = await fetch("https://devquest-4t7w.onrender.com/scrape", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: url.link })
        })
        const data = await res.json()
        if (!data.error) {
            data.brand = url.domain
            data.link = url.link
            if (data.price.includes("US $")) {
                let temp = data.price.replace("US $", "")
                temp = (parseFloat(temp) * 83.12).toString()
                data.price = temp
            } else if (data.price.includes("₹")) {
                let temp = data.price.replace("₹", "")
                data.price = temp
            }
            const storedPrice = await Product.create({ name: data.name, price: data.price, createdAt: Date.now(), description: data.short_description ? data.short_description : data.product_description ? data.product_description : "No description available", brand: data.brand, link: data.link, images: data.images ? data.images[0] === "{" ? data.images.split("\"")[1] : data.images : [] })
            result.push(storedPrice)
        }
    }
    return result
}
function getRandomDate(startDate, endDate) {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();

    // Generate a random timestamp between start and end dates
    const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);

    // Create a new Date object using the random timestamp
    const randomDate = new Date(randomTimestamp);

    return randomDate;
}
const f2 = async () => {
    const pdts = []
    const pdtsFreq = {}
    const startDate = new Date('2020-01-01'); // replace with your start date
    const endDate = new Date('2023-12-31');
    const json = require("./dummy.json")
    let ctr = 0;
    for (const item of json) {
        const randomDate = getRandomDate(startDate, endDate);
        const name = item.product_name
        const link = item.product_url
        const createdAt = randomDate
        const category = item.category
        const price = item.retail_price
        const description = item.description
        const brand = "www.flipkart.com"
        const images = [item.image]
        const storedPrice = await Product.create({ name, price, createdAt, description, brand, link, images, category })
        console.log(storedPrice)
        console.log(ctr++)
    }
    console.log("success")
}

async function sendMail({ email, productName, userName, currentPrice, productLink, reminderPrice }) {
    const emailUrl = "testvaxad@gmail.com";
    const  password= 'ibxj pois evfq muzf';
    console.log(email)
    // Create a Nodemailer transporter using your email service's credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
      auth: {
        user: emailUrl,
        pass: password,
      },
    });
      // Define the email message
    const mailOptions = {
      from: 'testvaxad@gmail.com',
      to: recipientEmail,
      subject: `Price Drop Alert for ${productName}`,
      text: `

      Dear ${userName},
      
      We are excited to inform you that the price of the product ${productName} has dropped below your desired threshold.
      
      Product Details:
      - Name: ${productName}
      - Current Price: ${currentPrice}
      - Previous Price: ${previousPrice}
      - Product Link: ${productLink}
      
      Hurry up and take advantage of this great deal now!
      
      Thank you for using our Price Tracker App.
      
      Best Regards,
      Your Price Tracker Team
      `
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
const f3 = async(pid) => {
    try{
        console.log(pid)
    const pdt = await Product.findById(pid)
    const pdts = await Product.find({name:pdt.name}).sort({createdAt:-1})
    const userpdts = await UserProduct.find({productId:pid})
    for(const userpdt of userpdts){
        const user = await User.findOne({email:userpdt.email})
        if(pdts[0].price<=userpdt.price){
            sendMail({email:userpdt.email,userName:user.name, productName:pdts[0].name, currentPrice:pdts[0].price, productLink:pdts[0].link, reminderPrice:userpdt.price})
        }
    }
}catch(err){

}
}
router.get('/test', async (req, res) => {
    try {
        await f2()
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})

//ROUTE 1: fetch all notes using: GET '/api/notes/fetch'
router.get('/find/:item', async (req, res) => {
    try {
        console.log(req.params.item)
        const searchTerms = req.params.item.split(' ');
        const regExps = searchTerms.map(term => new RegExp(term, 'i'));
        const priceCards = await Product.find({
            $and: regExps.map(reg => ({ name: { $regex: reg } }))
          })
        console.log(priceCards.length)
        if(priceCards.length!==0){
        const priceCard = find(req.params.item)
        f3()
        return res.status(200).json(priceCards);
        }else{
            const priceCard = await find(req.params.item)
            return res.status(200).json(priceCard);  
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }

})

router.get('/', async (req, res) => {
    const page = parseInt(req.query.p) || 1;
    const perPage = parseInt(req.query.n) || 25; // Number of products per page
    try {
        console.log("fetching all products")
        const priceCard = await Product.find().skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
        return res.status(200).json(priceCard);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
})

router.put("/test", async (req, res) => {
    try {
        const pdts = await Product.find()
        let ctr = 0;
        for (const pdt of pdts) {
            const price = pdt.price
            if (price.includes("US $")) {
                let temp = price.replace("US $", "")
                temp = (parseFloat(temp) * 83.12).toString()
                pdt.price = temp
                await pdt.save()
                console.log(ctr++)
            } else if (price.includes("₹")) {
                let temp = price.replace("₹", "")
                pdt.price = temp
                await pdt.save()
                console.log(ctr++)
            } else if (price.includes(",")) {
                let temp = price.replace(",", "")
                pdt.price = temp
                await pdt.save()
                console.log(ctr++)
            }
        }
        res.json(pdts)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})

router.delete("/test", async (req, res) => {
    try {
        const pdts = await Product.find({images:[]})
        let ctr = 0;
        for (const pdt of pdts) {
            await Product.findByIdAndDelete(pdt._id)
            console.log(ctr++)
        }
        res.json(pdts)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})
//ROUTE 2: add new note using: POST '/api/notes/'
router.post('/', fetchuser, [
], async (req, res) => {
    try {
        const { productId, price } = req.body;
        const user = await User.findById(req.user.id).select("-password");
        const userpdt = await UserProduct.create({ email: user.email, productId: productId, price: parseFloat(price) })
        return res.json(userpdt);
    } catch (error) {
        return res.status(500).json({ error });
    }
})

router.post('/mail', fetchuser, [
], async (req, res) => {
    try {
        const resl = await sendMail({email:"prabhuvrd@gmail.com",productName:"iPhone 12",userName:"Varad",currentPrice:"45000",productLink:"https://www.amazon.in/New-Apple-iPhone-12-256GB/dp/B08L5W5Z9Q",reminderPrice:"47000"})
        return res.json(userpdt);
    } catch (error) {
        return res.status(500).json({ error });
    }
})

//ROUTE 3: update a note using: PUT '/api/notes/:id'
router.put('/:id', fetchuser, async (req, res) => {
    try {

        const { title, content } = req.body;
        //store what user wants to update
        const newNote = {};
        if (title) { newNote.title = title }
        if (content) { newNote.content = content };
        newNote.updatedAt = Date.now();

        //VERIFY USER
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        //update note
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        return res.json(note);
    } catch (error) {
        return res.status(500).json({ error });
    }
})

//ROUTE 4: delete a note using: DELETE '/api/notes/:id'
router.delete('/:id', fetchuser, async (req, res) => {
    try {

        //VERIFY USER
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        //delete note
        note = await Note.findByIdAndDelete(req.params.id);
        return res.json({ message: "This note was deleted", note });
    } catch (error) {
        return res.status(500).json({ error });
    }
})

//ROUTE 5: fetch note by id using: GET '/api/notes/fetch/:id'
router.get('/fetch/:id', async (req, res) => {
    try {
        const productCard = await Product.findById(req.params.id)
        if (!productCard) { return res.status(404).send("Not found") }
        const targetPrice = productCard.price; // Replace with your specific target price
        const tolerance = 5000; // Adjust this value based on how close you want the prices to be

        const others = await Product.find({brand:productCard.brand}).limit(25)

        return res.status(200).json({product:productCard, others:others});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }

})

module.exports = router;