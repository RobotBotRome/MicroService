migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // remove
  collection.schema.removeField("rysj8taa")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rysj8taa",
    "name": "prictureUrl",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
