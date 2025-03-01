const { MongoClient } = require("mongodb")
require("dotenv").config({path: "./config.env"}) // connect it with config file


async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)

    try { await client.connect() // make connection with database

        const collections = await client.db("sample_mflix".collections)
        collections.forEach((collection) => {console.log(collections.s.namespace.collection)});
    } catch (e){
        console.error(e)
    } finally {
        await client.close()
    }

}

main()